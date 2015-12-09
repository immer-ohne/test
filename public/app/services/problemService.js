angular.module('problemService', [])

.factory('Problem', function($http) {

	// create a new object
	var problemFactory = {};

	// get a single problem
	problemFactory.get = function(id) {
		return $http.get('/api/problem/' + id);
	};

	// get all problem
	problemFactory.all = function() {
		return $http.get('/api/problem');
	};

	// create a problem
	problemFactory.create = function(problemData) {
		return $http.post('/api/problem/', problemData);
	};

	// update a problem
	problemFactory.update = function(id, problemData) {
		return $http.put('/api/problem/' + id, problemData);
	};

	// delete a problem
	problemFactory.delete = function(id) {
		return $http.delete('/api/problem/' + id);
	};

	// return our entire problemFactory object
	return problemFactory;

});