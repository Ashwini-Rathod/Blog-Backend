const express = require("express");
const cors = require("cors");
const app = express();
const blogRoutes = require("./routes/blogRoutes");
const dotenv = require("dotenv");
dotenv.config({
    path: "./config.env",
})
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/blogs", blogRoutes);
app.listen(process.env.PORT, ()=>{
    console.log(`Listening to the port`);
})