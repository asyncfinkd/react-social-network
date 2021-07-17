const router = require("express").Router();
const LoginSchema = require("../../schema/Login/LoginSchema");

router.route("/signup").post(async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const avatar = req.body.avatar;
  const detailInformation = req.body.detailInformation;

  const SignupSchema = new LoginSchema({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    avatar: avatar,
    detailInformation: detailInformation,
  });

  SignupSchema.save();
  res.json("signup success");
});

module.exports = router;