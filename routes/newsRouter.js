var express = require('express');
var newsRouter = express.Router();
var News = require('./../models/newsModel');
var tokenMW = require('./tokenMW');

newsRouter.route('/')
	.get(function(req, res){
		News.find({}).sort('-createdOn').exec(function(err, news){
			if(err)
				res.status(500).send(err);

			res.json(news);
			//res.render('pages/news', {newsList : news});
		});
	})
	.post(function(req, res){
		var news = new News();
		news.heading = req.body.heading;
		news.teaser = req.body.teaser;
		news.text = req.body.text;
		news.author = req.body.author;

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
			//res.render('pages/news_one', {news: news, comments: news.comments});
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

newsRouter.route('/:id/comment')
	.post(function(req, res){
		News.findByIdAndUpdate(req.params.id, {$push: {'comments':{'comment':req.body.comment, 'date': new Date(), 'active': true}}}, function(err, news){
			if(err)
				res.send(500, err);

			//res.redirect('/news/' + req.params.id);
			res.json({msg: "Comment updated"});
		});
	});


module.exports = newsRouter;