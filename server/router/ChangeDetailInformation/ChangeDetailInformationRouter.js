const router = require("express").Router();
const LoginSchema = require("../../schema/Login/LoginSchema");

router.route("/changeDetailInformation").post(async (req, res) => {
  const email = req.body.email;
  const detailInformation = req.body.detailInformation;
  if (email) {
    LoginSchema.findOne({ email: email }).then((result) => {
      result.detailInformation = detailInformation;
      res.json({
        msg: "success",
        user: {
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
          avatar: result.avatar,
          detailInformation: result.detailInformation,
        },
      });
      result.save();
    });
  }
});

module.exports = router;
