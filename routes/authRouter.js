var express 	= require('express');
var authRouter 	= express.Router();
var User 		= require('./../models/userModel');
var jwt			= require('jsonwebtoken');
var superSecret = require('./../config/config').secret;


authRouter.get('/', function(req, res){
	res.render('pages/login');
});

authRouter.post('/', function(req, res){
	User.findOne({username: req.body.username}).select('username password').exec(function(err, user) {

		if (err) throw err;
		
		if (!user) {
			// res.json({
			// 	success: false,
			// 	message: 'Authentication failed. User not found.'
			// });
			res.render('pages/login', {err : 'Falscher User'});

		} else if (user) {
			var validPassword = user.comparePassword(req.body.password);
			
			if (!validPassword) {
				// res.json({
				// 	success: false,
				// 	message: 'Authentication failed. Wrong password.'
				// });
				res.render('pages/login', {err : 'Falsches Passwort'});			

			} else {
				var token = jwt.sign({id: user._id, username: user.username}, superSecret, {expiresIn: 86400 });
				
				// res.json({
				// 	success: true,
				// 	message: 'Enjoy your token!',
				// 	token: token
				// });

				res.render('pages/login', {token: token});
			}
		}
	});
});

module.exports = authRouter;