//jshint esversion:6
const express = require("express");
const bodyParser = require("express");
const ejs = require("ejs");
app = express();
app.use(express.static('public'));
var items = ["BuyFood","CookFood","EatFood","chocolate","icecream"];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
    //res.sendFile(__dirname+"/index.html")

     var today = new Date();
      var option = {weekday:"long",year:"numeric",day:"numeric",month:"long"};
        var date = today.toLocaleDateString("hi-IN",option);

           var utctime = today.toLocaleTimeString();

        console.log(items);
         res.render('list',{kindofday:date,kindoftime:utctime,foodname:items});

})

app.post("/", function(req, res) {
        var item = req.body.foods;
        items.push(item);
        res.redirect("/");

})
app.listen(3000, function() {
  console.log("Server is running on port 3000");
})
