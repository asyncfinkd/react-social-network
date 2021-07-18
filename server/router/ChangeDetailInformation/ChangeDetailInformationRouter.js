const router = require("express").Router();
const LoginSchema = require("../../schema/Login/LoginSchema");

router.route("/changeDetailInformation").post(async (req, res) => {
  const email = req.body.email;
  const detailInformation = req.body.detailInformation;
  LoginSchema.findOne({ email: email }).then((result) => {
    console.log(result);
    result.detailInformation = detailInformation;
    result.save();
  });
  res.json({ msg: "success" });
});

module.exports = router;
