var express = require('express');
var mysql = require('mysql');
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	database : 'join_us'
});

app.get("/", function(req, res){
 	var q = 'SELECT COUNT(*) as count FROM users';
 	connection.query(q, function (error, results) {
 		if (error) throw error;
 		var msg = results[0].count;
 		res.render("home", {count: msg});
 	});
});

app.post('/register', function(req,res){
 	var person = {email: req.body.email};
 	connection.query('INSERT INTO users SET ?', person, function(err, result) {
 		console.log(err);
 		console.log(result);
 		res.redirect("/");
	});
});

//INPUT LOT OF RANDOM DATA
// var data = [];
// for(var i = 0; i < 500; i++){
//     data.push([
//         faker.internet.email(),
//         faker.date.past()
//     ]);
// }
 
// var q = 'INSERT INTO users (email, created_at) VALUES ?';
 
// connection.query(q, [data], function(err, result) {
//   console.log(err);
//   console.log(result);
// });

//RANDOM NUMBER
// 	app.get("/random_num", function(req, res){
//  var num = Math.floor((Math.random() * 10) + 1);
//  res.send("Your lucky number is " + num);
// })

app.listen(3000, function(){
	console.log("Successfully running on port 3000!");
});