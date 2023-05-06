# Getting Started with Budget App

## View the App on the Web

You can view this project on the web  [here](https://main--creative-tarsier-41ca75.netlify.app/).

## How to Install Locally

### Back End Installation  

* Make a new directory and git clone the [Budget App Back End](https://github.com/1ryanlundy/budget-app-backend) repository in it. 
* Open the repo in VSCode and create a .env file to the root directory.
* Add the following code to the .env file ```PORT = 3333``` and then save.
* Make sure nodemon is installed on your computer. 
    If you need help installing nodemon visit the following [page](https://www.npmjs.com/package/nodemon) and scroll down to the installation instructions.
* Run the following code in the repository's command line ```npm i cors dotenv express``` to make sure all            dependencies are installed correctly.

* Run the following code in the repository's command line ```nodemon server.js``` to run the back end server.
* The back end server should be up and running now.


### Front End Installation 

* Create a new directory and git clone this repository ([Budget App Front End](https://github.com/1ryanlundy/budget-app-front-end)) in it.
* Open the repository in VSCode and create a .env file in the root directory.
* Add the following code to the .env file ```REACT_APP_URL = http://localhost:3333```
* Run the following code in the repository's command line ```npm i axios``` to make sure all dependencies are installed correctly.
* Run the following code in the repository's command line ```npm start``` to start the app in a live server.
* The front end application should be up and running now.

#### Budget Back End Deployment Link
https://budget-app-backend-azti.onrender.com/









