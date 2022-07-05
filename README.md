# FloatBnB

## Index

[Feature list documentation](https://github.com/mipresley23/FloatBnB/wiki/MVP-Feature-List)

[Database Schema](https://github.com/mipresley23/FloatBnB/wiki/DB-Schema-V2)

[Frontend Routes Documentation](https://github.com/mipresley23/FloatBnB/wiki/Frontend-Routes)

[API Routes Documentation](https://github.com/mipresley23/FloatBnB/wiki/API-Routes)

[Redux Store Tree Document](https://github.com/mipresley23/FloatBnB/wiki/StateShape)

## Live site hosted by Heroku

[FloatBnB](https://floatbnb.herokuapp.com/)

## Link to Project Repo

[FloatBnB Repo](https://github.com/mipresley23/FloatBnB)

## Technologies used
> ### [React](https://reactjs.org/)
> ### [Redux](https://redux.js.org/)
> ### [Express](https://expressjs.com/)
> ### [Sequelize](https://sequelize.org/)
> ### [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Getting started locally
> * Clone the repo from [https://github.com/mipresley23/FloatBnB](https://github.com/mipresley23/FloatBnB)
> * In the /backend file directory you'll find a .env.example file.
> * Create a database with an owner based off this example file. Be sure to give your user CREATEDB privileges and a strong password.
> * Create a .env based on this example file filling in the password based on the user you created and the JWT secret which can be any string of characters. 
> > * Recommended to use the command  openssl rand -base64 10  in your terminal to create a random secret.
> * To run this application correctly you'll need to run two local servers.
> * To get these servers to run correctly, first navigate to the /backend directory and run npm install to install all dependencies.
> * In a separate terminal, naviagate to the /frontend directory and again run npm install.
> * Next create and seed the database tables by running the following commands in order in your /backend directory:
> > * npx dotenv sequelize db:migrate
> > * npx dotenv sequelize db:seed:all
> * If done correctly you should not see any errors and your database should be completely migrated and all tables filled with seeder data.
> * Now navigate one terminal to /backend and run the npm start command to start your backend server.
> * Next navigate a separate terminal to /frontend and again run npm start to start your frontend server.
> * If all steps are followed correctly you should see confirmation of both servers running successfully in your terminal.
> * You may now navigate to http://localhost:3000 in your browser of choice to navigate the application.


## Project Summary
Welcome to FloatBnB, a clone of Airbnb but specifically for yachts of various shapes and sizes. Here at FloatBnB, users can view the wide assortment of luxury boats available to be booked for the vacation of your dreams! Come join the FloatBnB community and you'll get so much more!

As a registered user, you'll get premium features such as:
> * The ability to create and list your own spot for others to book vacations on.
> * The ability to book the vacation you've always dreamed of on any of the available luxury spots.
> * A profile page where you can view or delete any of your spots and/or bookings.


## App Screenshots
### Signup Page
![image](https://user-images.githubusercontent.com/59783664/177337864-24c2b804-8ec6-4246-9ae6-686a45d441a9.png)

### Log in Modal
![image](https://user-images.githubusercontent.com/59783664/177339507-27cdec94-436f-47d2-bbe7-10c164d89591.png)


### Splash Page

![image](https://user-images.githubusercontent.com/59783664/177337612-c3797a40-e3e1-4011-ab2a-6a9df55e26e0.png)

### Spots Page with Create Spot Form

![image](https://user-images.githubusercontent.com/59783664/177338221-aa6e27d0-9730-4eb7-8760-09f2268cbdb0.png)


### Spot detail page
![image](https://user-images.githubusercontent.com/59783664/177338599-41cbf63b-8ce7-419e-b0e0-18e7ea522a49.png)

### Profile page
![image](https://user-images.githubusercontent.com/59783664/177338979-ef54027d-d429-4eaf-b018-5c6fc3dd663b.png)

### All bookings Page
![image](https://user-images.githubusercontent.com/59783664/177339243-a56f7519-b55a-4d72-83f9-233ab6689aea.png)



## Instructions for navigating FloatBnB
Upon navigating to site, users can view the spots with pictures on the home screen. Each picture is a navlink navigating to that spot's details. If the user is not logged in they may only view the spot and its details. Logging in will display the option to book that spot. If the user is logged in as the creator of that spot, they may also have the option to edit or delete that spot. The user may then navigate to their profile page by clicking their name in the profile menu in the upper righthand corner. Anyone can view anyone else's profile, but on the user's own profile, they'll be given the option to delete any spots or bookings they may have.

## Future features
In the future I have plans to implement a full CRUD reviews feature.
I plan to add the ability to add an image upon spot creation.
I would also like to add geolocation features, a more fleshed out profile/buddy system, and more details within my current features. I.e. displaying total price for each booking, number of people in each group being booked etc. I also like the idea of having my forms all implemented as modals. I couldn't quite get them to work the way I wanted so I commented the code out so I could come back to them later and implemented regular forms for the time being. I would like to improve the date picking experience. Currently, users aren't able to pick a date in the past or overlapping dates for the start date and end date on bookings and that works great within the calendar. Users aren't able to book an already booked date, but there's no indication which dates are booked dates. From what has been learned via online research is there really is no good way to make the dates unselectable like the min/max attributes do so this will be something I'll need to work more with and learn more about to find alternatives.

## Technical implementation details

One particular challenge was my images being grabbed from my backend with an extra empty array item with an id of 'undefined.' So when I went to display them on the splash page I had an extra empty spot with no image that also was a navlink to a blank page due to the id of undefined. I was able to solve this by creating a new array without that undefined item and then mapping over that array to display them on the screen. I know my implementation is not necessarily the most efficient method due to adding an extra loop through an array, however I'm proud of my ability to self debug and problem solve a particularly frustrating issue.

![image](https://user-images.githubusercontent.com/59783664/176972846-c6cab062-7ef1-49a9-8b12-e44971c2b036.png)

![image](https://user-images.githubusercontent.com/59783664/176972865-2b8e9b25-c721-4009-bc33-6f599f43bbcc.png)

