/**
Service
Serice is a special unit of code which can be used across different controllers
service can be utility or business logic units independent to controller
there will be only one instance of service unlike controllers
we can have multiple services used by multiple controllers
service can also used by other services too
build in services: $http, $log, $location
Factory, Service, Provider can be used to create custom services 
*/

var app = angular.module("myApp", []);
app.controller("myCtrl", ["$scope",function($scope){
	$scope.a = 10;
	$scope.b = 20;
	$scope.findSum = function(){
		$scope.sum = parseInt($scope.a) + parseInt($scope.b);
	};

/*	$scope.findSum = function(){
	$scope.sum = calculate.getSum($scope.a, $scope.b);*/

	/**
		here call to service is synchronous because to perform further operation
		it should wait for the above function to be completed
		To use asychronous mechanish we can use callback method, hat is passed 
		with arguments to methods
	*/

/*	$scope.findSum = function(){
		calculate.getSum($scope.a, $scope.b, function(result){
			$scope.sum = result;
		});
	};*/
}]);

