const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "Database is connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.error(err?.message);
  }
};

module.exports = connectDB;
