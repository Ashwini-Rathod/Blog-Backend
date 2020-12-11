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

const getBlogById = (req, res, next)=>{
    let blogFound = blogs.find((blog)=>{
        return blog.id == req.params.id;
    })
    if(!blogFound){
        res.status(404).json({
            status: "Unsuccessful",
            message: "Blog with the entered ID does not exists",
        })
    }
    res.status(200).json({
        status: "Successful",
        data: blogFound,
    })
}

module.exports.getAllBlogs = getAllBlogs;
module.exports.getBlogById = getBlogById;