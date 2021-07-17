const router = require("express").Router();
const LoginSchema = require("../../schema/Login/LoginSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("../../env.json");

router.route("/signup").post(async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const avatar = req.body.avatar;
  const detailInformation = req.body.detailInformation;

  try {
    var salt = await bcrypt.genSalt();
    var hashedPassword = await bcrypt.hash(password, salt);
  } catch (err) {
    console.log(err);
  }

  let user = {};
  LoginSchema.findOne({ email: email }).then((result) => {
    if (result) {
      res.json({ message: "Email is registered", success: false });
    } else {
      const EMAIL = email;
      const LOGGED = true;
      const access_token = jwt.sign({ EMAIL, LOGGED }, env.ACCESS_TOKEN, {
        expiresIn: "1h",
      });
      const SignupSchema = new LoginSchema({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        avatar: avatar,
        detailInformation: detailInformation,
      });
      SignupSchema.save();
      res.json({
        user: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          avatar: "",
          detailInformation: detailInformation,
        },
        access_token: access_token,
        success: true,
      });
    }
  });
  //   res.json("success");
});

module.exports = router;
