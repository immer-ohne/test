var express = require('express');
var problemRouter = express.Router();
var Problem = require('./../models/problemModel');
var tokenMW = require('./tokenMW');

problemRouter.route('/')
	.get(function(req, res){
		Problem.find({}).sort('-createdOn').exec(function(err, problems){
			if(err)
				res.status(500).send(err);

			res.json(problems);
		});
	})
	.post(function(req, res){
		var problem = new Problem();
		problem.text = req.body.text;

		problem.save(function(err){
			if(err){
				res.status(500).send(err);
			}
			res.json({msg: "Problem saved!"});
		})
	});

problemRouter.route('/:id')
	.get(function(req, res){
		Problem.findById(req.params.id, function(err, problem){
			if(err)
				res.status(500).send(err);

			res.json(problem);
		});
	})
	.delete(function(req, res){
		Problem.findByIdAndRemove(req.params.id, function(err){
			if(err){
				res.status(500).send(err);
			}
			else{ 
				res.json({msg : "Problem deleted"});
			}
		});
	})
	.put(function(req, res){
		Problem.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, problem){
			if(err)
				res.send(500, err);

			res.json({msg: "Problem updated"});
		});
	});


module.exports = problemRouter;