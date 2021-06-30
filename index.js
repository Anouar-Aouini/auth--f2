console.clear();

// import express
const express = require("express");
const app = express();
//dotenv
require("dotenv").config();
//require database
const connectDB = require("./config/connectDB");
// middelware
app.use(express.json());
// require rounting
const userRouter = require("./routes/user");

const PORT = process.env.PORT;

//connection
connectDB();

// routing
app.use("/api/user", userRouter);

app.listen(process.env.PORT, (err) => {
    err
        ? console.error(err)
        : console.log(`server is connected on port ${PORT}`);
});
