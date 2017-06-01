var mongoose = require("mongoose");
registerSchema = mongoose.Schema({
	name: {
		type:String,
		required: true
	},
	gender : {
		type:String,
		required: true
	},
	email : {
		type:String,
		required: true
	},
	mobile : {
		type:String,
		required: true
	},
	password : {
		type:String,
		required: true
	},
	confirmpassword : {
		type:String,
		required: true
	}
});

var Register = module.exports = mongoose.model("register",registerSchema,"register")
// inserting contact
module.exports.creatRegister = function(regobj, callback){
	return Register.create(regobj, callback)
}


































