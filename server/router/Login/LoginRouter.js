const router = require("express").Router();
const LoginSchema = require("../../schema/Login/LoginSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("../../env.json");

router.route("/login").post(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let user = {};
  LoginSchema.findOne({ email: email }).then((result) => {
    if (result == null) {
      res.json({ message: "User does not exist", success: false });
    } else if (result.password.length > 0) {
      bcrypt.compare(password, result.password, (err, verified) => {
        if (verified) {
          const EMAIL = email;
          const LOGGED = true;
          const access_token = jwt.sign({ EMAIL, LOGGED }, env.ACCESS_TOKEN, {
            expiresIn: "1h",
          });
          user = result;
          res.json({
            user: {
              firstName: firstName,
              lastName: lastName,
              email: email,
              avatar: "",
              detailInformation: detailInformation,
            },
            success: true,
          });
        } else {
          res.json({ message: "The password is incorrect", success: false });
        }
      });
    }
  });
});

module.exports = router;
