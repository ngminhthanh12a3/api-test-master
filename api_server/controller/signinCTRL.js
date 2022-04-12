var { User } = require("../models");

module.exports = async (req, res, next) => {
  const { username, password } = req.body;

  // find username
  User.findOne({ username: username }).then((user) => {
    // Found Username
    if (user) {
      var { checkCorrectPassword } = require("../handler");

      // check correct password
      if (checkCorrectPassword(password, user.password)) {
        res.status(200).json({ msg: "Signin Succes" });

        // Store to session
        req.session.user = user;
        req.session.save((err) => {
          if (err) {
            console.log(err);
          }
        });
        // Store to session
        return;
      }

      // wrong password
      res.status(400).json({ err: "Wrong Password" });
      return;
    }

    // Not found Username
    res.status(400).json({ err: "Username not found" });
    return;
  });
};
