const userModel = require("../models/userSchema");
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  userSignup: async (req, res) => {
    console.log(req.body);
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
    res.json()
  },
};

function createUserID() {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  const result = `USR-${randomNumber}`;
  return result;
}
