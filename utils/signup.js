import User from '../models/user.js';
import { sendMail } from '../nodemailer/nodemailer.js';
import bcrypt from 'bcrypt';
import generateTokenAndSetCookie from './jwt.js';

async function signup() {

    try {
        if (!username || !email || !password) {
          throw new Error("All fields are required");
        }
    
        const userAlreadyExists = await User.findOne({ email });
        if (userAlreadyExists) {
          throw new Error("User already exists");
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationToken = Math.floor(
          100000 + Math.random() * 900000
        ).toString();
    
        const user = new User({
          username,
          email,
          password: hashedPassword,
          verificationToken,
          verificationTokenExpires: Date.now() + 24 * 60 * 60 * 1000,
        });
        const createdUser = await user.save();
    
        //jwt
        generateTokenAndSetCookie(res, user._id);
    
        sendMail(email, {purpose: "VerifyEmail", token: verificationToken});
        
        const { password: _, ...userWithoutPassword } = createdUser.toObject();
        return userWithoutPassword;
        
      } catch (err) {
        console.log(err);
        throw new Error('Error creating user: ',  err.message);
      }

}

export { signup };