const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((error) => {
      console.error("Error! MongoDB not Connected", error);
      process.exit(1); 
    });
}

connectDB();

module.exports = connectDB;
