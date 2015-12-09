angular.module('newsCtrl', ['newsService'])

.controller('newsController', function(News) {

	var vm = this;

	vm.processing = true;

	News.all()
		.success(function(data){

			vm.processing = false;

			vm.newsList = data;

		});

})

.controller('newsOneController', function(News, $routeParams, $route){

	var vm = this;

	vm.processing = true;


	vm.id = $routeParams.id;

	News.get(vm.id)
		.success(function(data){

			vm.processing = false;

			vm.news = data;

		});


	vm.addComment = function(){
		News.addComment(vm.news._id, {comment : vm.comment})
			.success(function(data){

				$route.reload();
			});
	};




});