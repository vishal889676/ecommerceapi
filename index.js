const express = require("express");
const app = express();
const db = require("./config/mongodb");
const port = process.env.PORT || 27017;
app.use(express.json())//parsing incomming json data from postman

const route = require("./routers");//importing routers
app.use("/", route);//diversing our req


app.use(express.urlencoded({ extended: false }));//parse data
app.set("view engine", "ejs");//setup for view engine
app.set("views", "./views");//giving location from view
app.listen(port, function (err) {
 if (err) {
   console.log("find some err while connecting to server");
   return;
 }
 console.log(`Server running successfully`);
});