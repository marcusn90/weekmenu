var db = require('./config/db');
var mongoose = require('mongoose');
// var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console,'connection error:'));
mongoose.connection.once('open',function(){ console.log('CONNECTED') 
	var Schema = mongoose.Schema;
	var userSchema = new Schema({ first_name: String, last_name: String });
	var User = mongoose.model('User',userSchema);
	module.exports.User = User;

});

mongoose.connect(db.url);
