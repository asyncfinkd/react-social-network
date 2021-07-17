const router = require("express").Router();
const LoginSchema = require("../../schema/Login/LoginSchema");
const bcrypt = require("bcrypt");

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
      const SignupSchema = new LoginSchema({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        avatar: avatar,
        detailInformation: detailInformation,
      });
      SignupSchema.save();
      res.json("signup success");
    }
  });
});

module.exports = router;
