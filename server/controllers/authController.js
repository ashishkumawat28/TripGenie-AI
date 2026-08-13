
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendOTPEmail } from "../utils/sendEmail.js";

// Temporary OTP Store
const otpStore = {};

/*
|--------------------------------------------------------------------------
| SEND OTP
|--------------------------------------------------------------------------
*/

export const sendOTP = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    // Hash password before storing temporarily
    const hashedPassword = await bcrypt.hash(password, 10);

    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    otpStore[email] = {
      name,
      email,
      password: hashedPassword,
      otp,
      expires: Date.now() + 5 * 60 * 1000,
    };

    await sendOTPEmail(email, otp);

    console.log(`OTP for ${email}: ${otp}`);

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

/*
|--------------------------------------------------------------------------
| VERIFY OTP + REGISTER USER
|--------------------------------------------------------------------------
*/

export const verifyOTP = async (req, res) => {
  try {

    const { email, otp } = req.body;

    const record = otpStore[email];

    if (!record) {
      return res.status(400).json({
        success: false,
        message: "OTP not found",
      });
    }

    if (Date.now() > record.expires) {

      delete otpStore[email];

      return res.status(400).json({
        success: false,
        message: "OTP expired",
      });
    }

    if (record.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    const newUser = await User.create({
      name: record.name,
      email: record.email,
      password: record.password,
    });

    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    delete otpStore[email];

    res.status(201).json({
      success: true,
      message: "Registration Successful",

      token,

      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};




/*
|--------------------------------------------------------------------------
| FORGOT PASSWORD - SEND OTP
|--------------------------------------------------------------------------
*/

export const forgotPassword = async (req, res) => {

  try {

    const { email } = req.body;


    if (!email) {
      return res.status(400).json({
        success:false,
        message:"Email is required",
      });
    }


    const user = await User.findOne({ email });


    if (!user) {

      return res.status(404).json({
        success:false,
        message:"User not found",
      });

    }


    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();


    otpStore[email] = {

      otp,

      purpose:"forgot-password",

      expires: Date.now() + 5 * 60 * 1000,

    };


    await sendOTPEmail(email, otp);


    res.status(200).json({

      success:true,

      message:"Password reset OTP sent",

    });


  } catch(error) {


    res.status(500).json({

      success:false,

      message:error.message,

    });


  }

};



/*
|--------------------------------------------------------------------------
| VERIFY RESET OTP
|--------------------------------------------------------------------------
*/

export const verifyResetOTP = async (req,res)=>{

  try{


    const {email,otp}=req.body;


    const record = otpStore[email];


    if(!record){

      return res.status(400).json({

        success:false,

        message:"OTP not found",

      });

    }


    if(record.purpose !== "forgot-password"){

      return res.status(400).json({

        success:false,

        message:"Invalid OTP request",

      });

    }


    if(Date.now() > record.expires){

      delete otpStore[email];


      return res.status(400).json({

        success:false,

        message:"OTP expired",

      });

    }



    if(record.otp !== otp){

      return res.status(400).json({

        success:false,

        message:"Invalid OTP",

      });

    }



    otpStore[email].verified = true;



    res.json({

      success:true,

      message:"OTP verified successfully",

    });



  }catch(error){


    res.status(500).json({

      success:false,

      message:error.message,

    });


  }

};


/*
|--------------------------------------------------------------------------
| RESET PASSWORD
|--------------------------------------------------------------------------
*/

export const resetPassword = async(req,res)=>{


  try{


    const {
      email,
      password
    } = req.body;



    const record = otpStore[email];


    if(!record || !record.verified){

      return res.status(400).json({

        success:false,

        message:"Please verify OTP first",

      });

    }



    const hashedPassword = await bcrypt.hash(
      password,
      10
    );



    await User.findOneAndUpdate(
      {email},
      {
        password:hashedPassword
      }
    );



    delete otpStore[email];



    res.json({

      success:true,

      message:"Password reset successful",

    });



  }catch(error){


    res.status(500).json({

      success:false,

      message:error.message,

    });


  }


};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


export const getProfile = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



export const uploadProfileImage = async (req, res) => {
  try {

    console.log("PROFILE IMAGE UPLOAD");
    

    console.log("User ID:", req.user?._id);

    console.log("REQ.FILE:");
    console.log(
      JSON.stringify(req.file, null, 2)
    );


    // No file received

    if (!req.file) {

      return res.status(400).json({
        success: false,
        message: "No image file received",
      });

    }


    // Find user

    const user = await User.findById(req.user._id);


    if (!user) {

      return res.status(404).json({
        success: false,
        message: "User not found",
      });

    }


    console.log(
      "Cloudinary URL:",
      req.file.path
    );


    // Save Cloudinary URL

    user.profileImage = req.file.path;

    await user.save();


    console.log(
      "Profile image saved:",
      user.profileImage
    );


    return res.status(200).json({

      success: true,

      message: "Profile updated successfully",

      image: user.profileImage,

    });


  } catch (error) {

    console.log(
      "================================"
    );

    console.log(
      "PROFILE UPLOAD ERROR"
    );

    console.log(
      "================================"
    );


    console.error(
      "Error:",
      error
    );


    console.error(
      "Error JSON:",
      JSON.stringify(
        error,
        Object.getOwnPropertyNames(error),
        2
      )
    );


    console.error(
      "Error message:",
      error.message
    );


    return res.status(500).json({

      success: false,

      message:
        error.message ||
        "Profile image upload failed",

    });

  }
};