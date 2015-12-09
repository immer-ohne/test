angular.module('newsService', [])

.factory('News', function($http) {

	// create a new object
	var newsFactory = {};

	// get a single news
	newsFactory.get = function(id) {
		return $http.get('/api/news/' + id);
	};

	// get all news
	newsFactory.all = function() {
		return $http.get('/api/news');
	};

	// create a news
	newsFactory.create = function(newsData) {
		return $http.post('/api/news/', newsData);
	};

	// update a news
	newsFactory.update = function(id, newsData) {
		return $http.put('/api/news/' + id, newsData);
	};

	// delete a news
	newsFactory.delete = function(id) {
		return $http.delete('/api/news/' + id);
	};

	newsFactory.addComment = function(id, comment){
		return $http.post('/api/news/' + id + '/comment', comment);
	}

	// return our entire newsFactory object
	return newsFactory;

});