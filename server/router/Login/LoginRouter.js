const router = require("express").Router();
const LoginSchema = require("../../schema/Login/LoginSchema");
const bcrypt = require("bcrypt");
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
          user = result;
          res.json({
            user: {
              firstName: result.firstName,
              lastName: result.lastName,
              email: result.email,
              avatar: result.avatar,
              detailInformation: result.detailInformation,
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
