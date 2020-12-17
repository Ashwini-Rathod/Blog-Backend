# Blog-Backend

This project is about creating a simple express server application that serves blog data. The data is stored in a json file on the local machine. The data is served on local host on port number 3000. This will serve as an base URL for this project. For performing certain operations, api endpoints are created.

# The api end-points supports the following operations:

Get all the blogs:

The api endpoint is designed to get all the blogs present in the json file. The api endpoint for this particular operation is : http://localhost:3000/blogs. Here, '/blogs' is an api endpoint for obtaining all the blogs present in the json file stored locally.

Get blog by passing a query:

The user can also pass the query parameters such as http://localhost:3000/blogs?author=Harry Potter. This simply means the blog with author name as 'Harry Potter' will be obtained. The user can pass a single query or multiple queries. Multiple queries are seperated by an '&'. The example for passing multiple queries is http://localhost:3000/blogs?author=Harry Potter&title=Half Blood Prince. For this example the blog which has both the query parameters 'author' and 'title' with value as 'Harry Potter' and 'Half Blood Prince' respectively will be obtained. If any one of these parameters or its value differ from the one passed in the query or are passed in the query but not actually present in the blog object, the search will fail.  

Get a specific blog with a blogId sent as a route parameter:

Here, the api endpoint is designed in a way that the user can find a particular blog based on the blog Id. Each and every blog in the json file has an unique Id. The user will have to provide an Id as an route parameter to search for a particular blog. The api endpoint for this particular operation is: http://localhost:3000/blogs/2rvqpdbpka3n3fhg. Here, '/blogs/:id' is the api endpoint for finding a particular blog. For this particular id '/2rvqpdbpka3n3fhg', the blog which belongs to this Id will be obtained.

# Git repository:
The git repository contains all the files that are used for setting up the express server. The user can start the execution by 'npm run start'.

The link for a live demo of a server hosted on Heroku is provide below: 

https://blog-rendering.herokuapp.com/blogs

