var app = angular.module('app',[]);

app.controller('UsersCtrl',function($scope,$http){
	$http.get('/api/users')
		.success(function(data){
			$scope.users = data;
		})
		.error(function(data){
			console.log('Error',data);
		});
});