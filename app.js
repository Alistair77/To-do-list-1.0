const express = require("express");

const app = express();

var items = [];

app.use(express.urlencoded({
  extended: true
}));
//The public folder which holds the CSS
app.use(express.static("public"));


app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  var today = new Date();

var options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

var day = today.toLocaleDateString("en-US", options)
  res.render("list", {
    kindOfDay: day ,newitem: items
  });

});

app.post("/",function(req,res){
var item = req.body.NewItem;

items.push(item);
res.redirect("/");

})

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
