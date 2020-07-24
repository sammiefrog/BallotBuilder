// passport configuration
const User = require("../models/User");
const { secret } = require("./keys");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secret;

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            User.findOne({ _id: jwt_payload.id })
                .then(user => (user ? done(null, user) : done(null, false)))
                .catch(err => done(err, false));
        })
    );
};
