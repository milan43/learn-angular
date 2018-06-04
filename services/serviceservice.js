var app = angular.module("myApp", []);
app.controller("myCtrl", ["$scope", "calculateService", function($scope, calculateService){
	$scope.a = 10;
	$scope.b = 20;
	$scope.findSum = function(){
		calculateService.getSum($scope.a, $scope.b, function(result){
			$scope.sum = result;
		});
	};
}]);
app.service("calculateService", ["$http", "$log", function($http, $log){
	$log.log("service instantiated");
	this.getSum = function(a, b, callback){
		return callback(parseInt(a)+parseInt(b));
	};
}]);