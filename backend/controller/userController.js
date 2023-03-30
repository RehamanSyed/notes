const User = require("../models/userModels");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

//For user Registration
const userRegister = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error(`User ${name} already exists`);
  }
  const user = await User.create({ name, email, password, pic });
  if (user) {
    res.status(201).json({
      message: "Successfull registration done",
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      pic: user.pic,
    });
  } else {
    res.status(400);
    throw new Error(`Error Occure`);
  }
  res.json({ name: name, email: email });
});

//For user Login
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(user);
  if (user && (await user.matchPassword(password))) {
    console.log(res);
    res.json({
      message: `successfully login`,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

module.exports = { userRegister, userLogin };
