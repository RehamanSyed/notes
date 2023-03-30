const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOOSE_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("connection connected", conn.connection.host);
  } catch (error) {
    console.log("error in db", error);
    process.exit();
  }
};
module.exports = connectDB;
