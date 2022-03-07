# Social Network API

[![License Badge](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)

## Description

The social network API contains all of the API routes for the back-end set-up of this application. The API routes created in this project allow for communication between a client and the database. this application uses a NoSQL database (MongoDB) to allow for fast and large data requirements. The API routes allow users to be created, then users can create thoughts, reactions, and add or remove friends. The API routes allow for interfacing between client requests for information in a NoSQL database. 

## Table of Contents
  * [Built With](#built-with)
  * [Code Access](#code-access)
  * [Preview](#preview)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)
  * [Credits](#credits)

## Built With

The Social Network API was built with:
- JavaScript
- Node.js
- Mongoose
- MongoDB
- Express.js

## Code Access

If you would like to access the code for the social network API, please visit [GitHub](https://github.com/sm3131/social-network-api)

## Preview

Click on the links below to watch the Screencastify videos that demonstrate the social network API being used in Insomnia:


## Installation
To install the social network API complete the following steps:
1. Clone the application's code from this [GitHub](https://github.com/sm3131/social-network-api) repository onto your local machine into a new directory (e.g. social network API).
2. Open the command line and navigate to the directory you cloned this repository into, then open the content in a code text editor. You should now see the main files and folders for this project (server.js, package.json, /models, /routes, /controllers).
3. Next check to see if you have node.js installed on your machine by running the command *node -v* in your command line.
4. If you have node.js make sure your version is up to date by going to this website (https://nodejs.org/en/).
5. If you do not have node.js installed follow the installation steps on this website (https://nodejs.org/en/).
6. Once you have node.js installed, make sure you are still in the social network API directory in the command line, and then run the following command *npm install* to install the required packages and dependencies to run the application.
7. Next you will need to make sure you have mongoDB installed in the command line to create the social network database for this application. Follow this link (https://docs.mongodb.com/manual/installation/) to install and run mongoDB on your local machine. 
8. Next you will need to download an application called Insomnia to test all of the routes this social network API provides. To install Insomnia follow the steps on this site (https://docs.insomnia.rest/insomnia/get-started).
9. After you have node.js, mongoDB, Insomnia, and the required npm dependencies installed, you are ready to start the express server and connect to mongoDB via mongoose using node.js in the command line, in order to test the routes in Insomnia.

## Usage
To use and test the social network routes in Insomnia complete the following steps:
1. The purpose of this application is to create properly functioning API routes that can be used in conjunction with a social network front-end to create a fully functional app. 
2. After you have completed all of the above installation steps, you can now start your express server and test the routes in Insomnia.
3. To start the server using the command line, type *npm start* and you should see a notification stating "Connected on localhost:3001", meaning your server is functioning properly. you should also see that mongoose is connected as well.
4. If the server is running properly you can now head over to the Insomnia application you downloaded in the installation steps and set up a request collection to start organizing your route requests.
5. Once in Insomnia you will have an option to create a new request collection, which you can title social network API for example, then within this collection you can create a folder for each collection of the routes in this application (i.e. user-requests, thought-requests, reaction-requests, friend-requests), or if you prefer you can just put them all on the same screen.
6. Once you have created your route folders, you can start making a file for each individual request in each folder which would be the GET, POST, PUT, and DELETE requests.
7. Now in each individual request file you will need to either enter just the endpoint in the top URL bar for GET and DELETE requests, or you will need to enter the endpoint and a JSON formatted body for POST and PUT requests.
8. If you are running this app locally, then according to your server you will be on port 3001, so the correct endpoint for every route will start with localhost:3001/api, then the end portion of the endpoint will vary depending on the request and which specific route your are trying to test.
9. So an example GET request to get all the users would be formatted as: localhost:3001/api/users then the dropdown request bar should be GET.
10. Again check to make sure your server is running in the command line, and then you can hit send on the request to GET all of the current users from the database. 
11. If you need to know which endpoints to use for each of the routes you can refer to the routes folder in your code editor, and see that they all start with localhost:3001/api, then the final endpoint will either contain users, thoughts, reactions, friends, and then possibly a combination of ids for more specific requests

**IMPORTANT NOTE:** Ensure that your server is running properly before testing routes, and make sure that you have entered the correct endpoints to properly execute your requests. 

## License

MIT License

Copyright (c) 2022 Sammi Moore

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Questions

If you would like to access this project's repository as well as other projects in my GitHub, click this [GitHub](https://github.com/sm3131) link. 

For all other questions or inquires please feel free to contact me via email at [sm2683@nau.edu](mailto:sm2683@nau.edu)

## Credits

All of the models, routes, controllers, and server configurations were created by myself, Sammi Moore.

The resources that I used for this project are as follows:
- The mongoose package from npm in this node.js application in order more easily use mysql databases (https://www.npmjs.com/package/mongoose)
- The express package from npm to create the server and routes (https://www.npmjs.com/package/express)
- The node.js date-and-time date formatter from npm (https://www.npmjs.com/package/date-and-time)
- https://opensource.org/licenses/ (To borrow the license section text describing the terms of each of the licenses included in the readme generator)
- https://shields.io/ (To generate the link to create the license badge)
For the license badges and license section of the readme, I used the following resources:
- https://choosealicense.com/ (To help with picking which licenses to include)
- https://shields.io/ (To generate the link to create the license badge)
- https://wisehackermonkey.github.io/badge-demo/ (To help with coloring the license badges and grabbing the license links)
- https://opensource.org/licenses/ (To borrow the license section text describing the terms of each of the licenses included in the readme generator)