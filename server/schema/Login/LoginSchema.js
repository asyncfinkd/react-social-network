const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Date = new mongoose.Schema({
  day: {
    type: String,
  },
  month: {
    type: String,
  },
  year: {
    type: String,
  },
});

const DetailInformation = new mongoose.Schema({
  date: [Date],
  sex: {
    type: String,
  },
});

const LoginSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  detailInformation: [DetailInformation],
});

const Login = mongoose.model("users", LoginSchema);
module.exports = Login;
