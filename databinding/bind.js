var app = angular.module("app" ,[]);
app.controller("ctrl", ["$scope", function($scope){
	$scope.a = 10;
	$scope.b = 20;
	$scope.findSum = function(){
		$scope.sum = $scope.a + $scope.b;

		$scope.a = $scope.a *2;
	}
}]);

app.controller("dblCtrl", ["$scope", function($scope){
	$scope.c = 10;
	$scope.d = 20;
	$scope.findSummation = function(){
		/**
		 * data obtained from input fields are String type to 
		 * parse them to int for calculation
		*/
		$scope.summation = parseInt($scope.c) + parseInt($scope.d);
	};
}]);