const passport = require("passport");
const { RegistrationController, LoginController } = require("../controllers/userController");

module.exports = app => {
    app.post("/api/user/register", RegistrationController);

    app.post("/api/user/login", LoginController);

    app.post("/api/user/validate", passport.authenticate("jwt", { session: false }), (req, res) => {
        console.log(req.user);
        res.status(200).send("Authorized.");
    });
};
