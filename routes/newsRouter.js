var express = require('express');
var newsRouter = express.Router();
var News = require('./../models/newsModel');

newsRouter.route('/')
	.get(function(req, res){
		News.find(function(err, news){
			if(err)
				res.status(500).send(err);

			//res.json(news);
			res.render('pages/news', {newsList : news});
		});
	})
	.post(function(req, res){
		var news = new News();
		news.heading = req.body.heading;
		news.text = req.body.text;
		news.createdBy = req.body.createdBy;
		news.active = req.body.active;

		news.save(function(err){
			if(err){
				res.status(500).send(err);
			}
			res.json({msg: "News saved!"});
		})
	});

newsRouter.route('/:id')
	.get(function(req, res){
		News.findById(req.params.id, function(err, news){
			if(err)
				res.status(500).send(err);

			res.json(news);
		});
	})
	.delete(function(req, res){
		News.findByIdAndRemove(req.params.id, function(err){
			if(err){
				res.status(500).send(err);
			}
			else{ 
				res.json({msg : "News deleted"});
			}
		});
	})
	.put(function(req, res){
		News.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, news){
			if(err)
				res.send(500, err);

			res.json({msg: "News updated"});
		});
	});

module.exports = newsRouter;