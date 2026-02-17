const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    dbName:process.env.DB_NAME,
  });
  console.log('MongoDB connected');
};

module.exports = connectDB;
