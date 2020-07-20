const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { canRegister, canLogin } = require("./validation");
const { secret } = require("../config/keys");

module.exports = {
    RegistrationController: async (req, res) => {
        const { username, password } = req.body;

        const { err } = await canRegister(req.body);
        if (err) return res.status(400).send(error.details[0].message);

        const usernameIsRegistered = await User.findOne({ username });
        if (usernameIsRegistered) return res.status(400).send("This username is already in use");

        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);
        const newUser = new User({ username, password: hash });

        try {
            const savedUser = await newUser.save();
            console.log(savedUser)
            const jwt_payload = {
                id: savedUser._id,
                username: savedUser.username
            };

            const token = await jwt.sign(jwt_payload, secret, { expiresIn: "1hr" });
            res.status(200).send({ token: `Bearer ${token}`, id: savedUser._id });

        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    },
    LoginController: async (req, res) => {
        const { username, password } = req.body;

        const { err } = await canLogin(req.body);
        if (err) return res.status(400).send(error.details[0].message);

        const existingUser = await User.findOne({ username }).populate("candidates").populate("plan") //populate
        if (!existingUser) return res.status(400).send("Username or password is incorrect!");

        const matching = await bcrypt.compare(password, existingUser.password);
        if (!matching) return res.status(400).send("Username or password is incorrect!");

        const jwt_payload = {
            id: existingUser._id,
            username: existingUser.username
        };

        const token = await jwt.sign(jwt_payload, secret, { expiresIn: "1hr" });
        res.status(200).send({ token: `Bearer ${token}`,  id: existingUser._id  });
    }
};
