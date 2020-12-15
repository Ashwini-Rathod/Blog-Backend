# Blog-Backend

This project is about creating a simple express server application that serves blog data. The data is stored in a json file on the local machine. The data is served on local host on port number 3000. This will serve as an base URL for this project. For performing certain operations, api endpoints are created.

# The api end-points supports the following operations:

Get all the blogs:
The api endpoint is designed to get all the blogs present in the json file. The api endpoint for this particular operation is : http://localhost:3000/blogs. Here, '/blogs' is an api endpoint for obtaining all the blogs present in the json file stored locally.

Get a specific blog with a blogId sent as a route parameter:
Here, the api endpoint is designed in a way that the user can find a particular blog based on the blog Id. Each and every blog in the json file has an unique Id. The user will have to provide an Id as an route parameter to search for a particular blog. The api endpoint for this particular operation is: http://localhost:3000/blogs/2rvqpdbpka3n3fhg. Here, '/blogs/:id' is the api endpoint for finding a particular blog. For this particular id '/2rvqpdbpka3n3fhg', the blog which belongs to this Id will be obtained.

# Git repository:
The git repository contains all the files that are used for setting up the express server.

The link for a live demo of a server hosted on Heroku is provide below: 

https://blog-rendering.herokuapp.com/blogs

