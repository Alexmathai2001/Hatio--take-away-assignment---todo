const userModel = require("../models/userSchema");
const bcrypt = require("bcrypt");
const session = require("express-session")
const saltRounds = 10;

module.exports = {
  userSignup: async (req, res) => {
    const { name, email, password } = req.body;
    const userid = createUserID();

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new userModel({
      userID: userid,
      userName: name,
      email: email,
      Password: hashedPassword,
    });
    newUser.save();
    res.json();
  },
  checklogin: async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;

    const data = await userModel.find({ email: email });
    if (data.length > 0) {
      const passwordMatch = await bcrypt.compare(password, data[0].Password);
      if (passwordMatch) {
        req.session.loginuser = data[0]?.userID
        res.json({ status: "success",userId : data[0]?.userID});
      }else{
        res.json({status : 'password doesnot match'})
      }
    } else {
      res.json({ status: "email id not found" });
    }
  },
};

function createUserID() {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  const result = `USR-${randomNumber}`;
  return result;
}
