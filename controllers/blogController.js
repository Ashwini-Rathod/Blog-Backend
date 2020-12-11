const fs = require("fs");
const path = require("path");
const blogFile = path.join(__dirname, "..", "data", "data.json");
const blogs = JSON.parse(fs.readFileSync(blogFile, "utf-8")); 


const getAllBlogs = (req, res, next)=>{
    res.status(200).json({
        status: "Successful",
        data: [blogs],
    })
}

module.exports.getAllBlogs = getAllBlogs;