const passport = require('passport');
const { RegistrationController, LoginController} = require('../controllers/userController')

module.exports = (app) => {
    app.post('/api/user/register', RegistrationController);

    app.post('/api/user/login', )

    app.get(
      "/api/user/validate",
      passport.authenticate("jwt", { session: false }),
      (req, res) => {
        res.status(200).send("Authorized.");
      }
    );
}