const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://markzuck:nikanikonika@cluster0.k2jpu.mongodb.net/doge-network?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const Signup = require("./router/Signup/SignupRouter");
app.use("/auth", Signup);

const Login = require("./router/Login/LoginRouter");
app.use("/auth", Login);

// const GetAll = require("./router/GetAll/GetAllRouter");
// app.use("/auth", GetAll);

const ChangeDetailInformation = require("./router/ChangeDetailInformation/ChangeDetailInformationRouter");
app.use("/auth", ChangeDetailInformation);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port - ${PORT}`);
});
