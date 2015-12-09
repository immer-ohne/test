angular.module('problemCtrl', ['problemService'])

.controller('problemController', function(Problem, $route) {

	var vm = this;

	vm.processing = true;

	Problem.all()
		.success(function(data){

			vm.processing = false;

			vm.problemList = data;

		});

	vm.sendProblem = function () {
		
		Problem.create({text : vm.message})
			.success(function(data){
				$route.reload();
			});
	};
});