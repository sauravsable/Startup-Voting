const ErrorHandler = require("../utils/ErrorHandler");
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const isAuthenticatedUser = async (req, res, next) => {

    try {
        const { startup_token } = req.cookies;

        if (!startup_token) {
            return next(new ErrorHandler("Please log in to access this resource", 401));
        }
    
        const decodedData = jwt.verify(startup_token, process.env.JWT_SECRET);
        
        req.user = await User.findById(decodedData.id);
        
        if (!req.user) {
            return next(new ErrorHandler("User not found", 404));
        }

        next();
    } catch (error) {
        return next(new ErrorHandler("Invalid or expired token", 401));
    }
};


const authorizeRoles = (...roles)=>{
    
    return (req,res,next) =>{

        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resource`,403));
        }

        next();
    };
};

module.exports = {isAuthenticatedUser,authorizeRoles};