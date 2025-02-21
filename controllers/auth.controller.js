import User from "../models/user.js";
import bcrypt from "bcrypt";
import generateTokenAndSetCookie from "../utils/jwt.js";
import { sendMail } from "../nodemailer/nodemailer.js";

const register = async (req, res) => {
  try{
    const user = signup(req.body);
    res.status(201).json({ success: true, user });
  }catch(err){
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
  
};

const verifyToken = async (req, res) => {
  try {
      const { email, token } = req.body;

      // Find user by email
      const user = await User.findOne({ email });

      // Check if the user exists
      if (!user) {
          return res.status(404).json({ success: false, message: 'User not found.' });
      }

      // Check if the token matches
      if (user.verificationToken !== token) {
          return res.status(400).json({ success: false, message: 'Invalid token.' });
      }

      // Check if the token is expired
      if (user.tokenExpiry < Date.now()) {
          return res.status(400).json({ success: false, message: 'Token has expired.' });
      }

      // Token is valid; proceed with verification
      user.verificationToken = undefined;
      user.tokenExpiry = undefined;
      user.isVerified = true;
      await user.save();

      sendMail(email, {purpose: "Registered"});

      res.status(200).json({ success: true, message: 'Email successfully verified!' });

  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error verifying token.' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body; 

  try {

    if (!email || !password) {
      throw new Error("All fields are required");
    }

    const user = await User.findOne(email);

    if (!user) {
      throw new Error("Invalid Email");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
      throw new Error("Invalid Password");
    }

    generateTokenAndSetCookie(res, user._id);

    res.status(200).json({ success: true, message: 'LoggedIn Successfully', user });

  }catch(err){
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }


};

const logout = async (req, res) => {

  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Logged out successfully" });

};

const forgotPassword = (req, res) => {
  res.send("Forgot Password route");
};

export { register, verifyToken, login, logout, forgotPassword };
