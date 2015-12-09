var express 	= require('express');
var userRouter 	= express.Router();
var User 		= require('./../models/userModel');

userRouter.route('/')
	.post(function(req, res){
		var user = new User();

		user.username = req.body.username;
		user.password = req.body.password;

		user.save(function(err){
			if(err) res.send(err);

			res.json({msg : "User added"});
		});
	})
	.get(function(req, res){
		User.find(function(err, users){
			if(err) res.send(err);

			res.json(users);
		});
	});

	module.exports = userRouter;