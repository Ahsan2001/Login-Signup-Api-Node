const mongoose = require("mongoose");
const dataBase = process.env.BASEURL
mongoose.connect(dataBase)
mongoose.connection.on("connected", () => console.log("mongoose connected"));
mongoose.connection.on("error", (error) => console.log(error));