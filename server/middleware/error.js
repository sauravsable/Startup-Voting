const ErrorHandler = require('../utils/ErrorHandler');

module.exports = (err,req,res,next)=>{

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Wrong Mongodb Id Error
    if(err.name === 'CastError'){
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message,400);
    }

    //Mongoose duplicate error
    if(err.code == 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message,400)
    }

    // JSON Webtoken Error
    if(err.name === 'JsonWebTokenError'){
        const message = "Json web token is invalid, try again";
        err = new ErrorHandler(message,400);
    }

    // JWT Expire
    if(err.name === 'TokenExpireError'){
        const message = "Json web token is Expire, try again";
        err = new ErrorHandler(message,400);
    }

    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
};