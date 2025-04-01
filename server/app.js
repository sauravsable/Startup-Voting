require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const errorMiddleWare = require('./middleware/error');
const connectDataBase = require('./database');

const PORT = process.env.PORT || 5500;
const app = express();

app.use(cors({
    origin:true,
    credentials: true,
  })
);

app.use(express.json({ limit: '10mb' }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 5 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true
    }
}));

app.use(cookieParser());

app.get('/',(req,res)=>{
res.send("server is running");    
})

// Routes
const userRoute = require("./routes/userRoutes");

app.use('/api/v1', userRoute);

app.use(errorMiddleWare);

connectDataBase()
  .then((data)=>{
    console.log('Mongodb connected with Server');
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  })
  .catch((err)=>{console.log(err)})
