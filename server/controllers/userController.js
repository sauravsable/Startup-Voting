const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
// const {uploadToS3} = require('../utils/s3.js');

exports.registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        console.log("req body", req.body);


        if (!name || !email || !password) {
            return next(new ErrorHandler("Please Enter Name, Email & Password", 400));
        }

        const presentUser = await User.findOne({ email });

        if (presentUser) {
            return next(new ErrorHandler("Email Already Exists", 400));
        }

        const user = await User.create({
            name,
            email,
            password,
        });

        sendToken(user, 201, res);

    } catch (error) {
        console.log("error", error);

        if (error.name === "ValidationError") {
            const firstErrorMessage = Object.values(error.errors)[0].message;
            return next(new ErrorHandler(firstErrorMessage, 400));
        }

        return next(new ErrorHandler(error?.message || "Internal Server Error", 500));
    }
};

// Login User
exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email & Password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    sendToken(user, 200, res);
};

// Get user detail
exports.getUserDetails = async (req, res, next) => {
    const user = await User.findById(req.user._id).select("-password");

    res.status(200).json({
        success: true,
        user,
    });
};

//Logout user
exports.logout = async (req, res, next) => {
    res.clearCookie("startup_token");

    res.status(200).json({
        success: true,
        message: "Logged out",
    });
};

// Update user password
exports.updatePassword = async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Old password is Incorrect", 400));
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler("password does not match", 400));
    }

    user.password = req.body.newPassword;

    await user.save();

    sendToken(user, 200, res);
};

exports.updateUserProfile = async (req, res, next) => {

    const user = await User.findById(req.user._id);

    if (!user) {
        return next(new ErrorHandler("User not found", 400));
    }

    await User.findByIdAndUpdate(req.user._id, req.body, { new: true });

    res.status(200).json({ success: true });

};
