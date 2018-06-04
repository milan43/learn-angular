var app = angular.module("myApp", []);
app.controller("myCtrl", ["$scope", "calculateFactory", function($scope, calculateFactory){
	$scope.a = 10;
	$scope.b = 20;
/*	$scope.findSum = function(){
	$scope.sum = calculateFactory.getSum($scope.a, $scope.b)
};*/
	//for asychronous operation
	$scope.findSum = function(){
	calculateFactory.getSum($scope.a, $scope.b, function(result){
		$scope.sum = result;
	});
};
	
}]);

app.factory("calculateFactory", ["$http", "$log", function($http, $log){
	$log.log("Factory instantiated")
	var oCalculate = {};

/*	oCalculate.getSum = function(a, b){
	return parseInt(a) + parseInt(b);
	}
*/
			/**
		here call to service is synchronous because to perform further operation
		it should wait for the above function to be completed
		To use asychronous mechanish we can use callback method, hat is passed 
		with arguments to methods
	*/

	//for asychronous opertion
	oCalculate.getSum = function(a, b, callback){
		return callback(parseInt(a) + parseInt(b));
	}

	return oCalculate;
}]);