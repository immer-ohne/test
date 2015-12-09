angular.module('kummerCtrl', [])

.controller('kummerController', function($http, $location) {

	var vm = this;
	
	vm.showKummer = true;
	vm.processing = false;

	vm.sendMsg = function(name, message){

		vm.showKummer = false;
		vm.processing = true;
		$http.post('/api/kummer', {name : vm.name, message : vm.message})
			
			.success(function(data){
				if(data.success)
					$location.url('/danke');
				else
					$location.url('/fehler');
			});
	};
});