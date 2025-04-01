const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

const connectDataBase = async ()=>{
    await mongoose.connect(MONGO_URI);
}

module.exports = connectDataBase;

