var app = angular.module('app',[]);

app.controller('UsersCtrl',function($scope,$http){
	$http.get('/api/users')
		.success(function(data){
			$scope.users = data;
		})
		.error(function(data){
			console.log('Error',data);
		});
	$scope.addUser = function(){
		console.log('GOOG');
		$http.post('/api/users',{name:'Nazar'})
		.success(function(data){
			$scope.status = data;
		})
		.error(function(data){
			$scope.status = data;
		});
	}

});