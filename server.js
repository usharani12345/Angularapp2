var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require("body-parser");
var mongoose  = require("mongoose");
var path = require("path");
var Register = require("./models/register");

/*app.use(express.static(path.join(__dirname,"css")));*/
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost/contactlist-app",function(){
	console.log("successfully connected to database");
})


/*router.get("/",function(request, response){
	response.json("this is mean Stack App")
})*/
/*router.get("/getData",function(request, response){
	Contact.getC(function(err,contactObj){
		if(err){
			throw err;
		}
		response.json(contactObj)
	})
})*/



router.post("/createRegister", function(request,response){
	var registerObj = request.body;

	Register.createRegister(registerObj, function(err, regObj){
		if(err){
			throw err;
		}
		response.json(regObj)
	})
})


 app.use("/", router)

var PORT = process.env.PORT || 1337;
app.listen(PORT,function(){
	console.log("Server is Listening is PORT at " +PORT)

}) 