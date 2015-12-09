angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'app/views/pages/home.html'
		})

		.when('/danke', {
			templateUrl : 'app/views/pages/danke.html'
		})

		.when('/fehler', {
			templateUrl : 'app/views/pages/fehler.html'
		})
		
		// news page
		.when('/news', {
			templateUrl : 'app/views/pages/news/all.html',
   			controller  : 'newsController',
    		controllerAs: 'news'
		})

		.when('/news/:id', {
			templateUrl : 'app/views/pages/news/one.html',
   			controller  : 'newsOneController',
    		controllerAs: 'newsOne'
		})
		
		.when('/kontakt', {
			templateUrl : 'app/views/pages/kontakt.html',
			controller  : 'kummerController',
    		controllerAs: 'kummer'
		})

		.when('/probleme', {
			templateUrl : 'app/views/pages/probleme.html',
   			controller  : 'problemController',
    		controllerAs: 'problem'
		})

		.otherwise({redirectTo: '/'});

	$locationProvider.html5Mode(true);

});
