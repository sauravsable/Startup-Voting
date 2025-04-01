// Creating Token and Saving it into the Cookie

const sendToken = (user,statusCode,res)=>{

    const token = user.getJWTToken();

    // options for cookie
    const options = {
        maxAge: process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true
    };

    res.status(statusCode).cookie('startup_token', token,options).json({
        success: true,
        user,
    });
    
};

module.exports = sendToken;