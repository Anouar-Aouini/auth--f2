const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
});
module.exports = model("user", userSchema);
