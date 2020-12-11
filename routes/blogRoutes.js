const express = require("express");
const { getAllBlogs } = require("../controllers/blogController");


const router = express.Router();
router.route("/").get(getAllBlogs);
router.route("/:id").get();

module.exports = router;