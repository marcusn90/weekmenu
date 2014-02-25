module.exports = function(app){
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// sample api route
	app.get('/api/users', function(req, res) {
		// use mongoose to get all nerds in the database
		DB.User.find({},function(err, users) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err);

			res.json(users);
			// res.json(nerds); // return all nerds in JSON format
		});
	});

	app.post('/api/users', function(req, res) {
		console.log('CREATE USER REQ:',req.body);
		res.send(req.body.name+' Created!!');
	});

	// route to handle creating (app.post)
	// route to handle delete (app.delete)

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load our public/views/index.html file
	});
}