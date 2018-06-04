var app = angular.module("myApp", []);// [] is used to load dependencies at once like $watch
var app1 = angular.module("myApp");// here we are retrieving existing myApp module

/*var url = "";
this.config = function(link){
	url = link;
	};*/
app1.controller("myCtrl", ["$scope", "calculateservice", function($scope, calculateservice){
	$scope.a = 10;
	$scope.b = 20;
	$scope.findSum = function(){
		calculateservice.getSum($scope.a, $scope.b, function(result){
			$scope.sum = result;
		});
	};
}]);

app1.provider("calculateservice", function(){
	//we should define $http and $log in $get because these external services will not be
	//availabe at the time of execution of provider
	this.$get = ["$http", "$log", function($http, $log){
		$log.log("provider instantiated");
		var oCalculate = {};
		oCalculate.getSum =function(a, b, callback){
			return callback(parseInt(a) + parseInt(b));
		};
		return oCalculate;
	}];
});

app.provider("calculateservice" function(){
	this.$get = ["$http", "$log", function(){
		var oCalculate = {};
		oCalculate.getSum = function(a, b,  callback){
			$http({
				url : ,
				method :
			}).then(function(resp){
				$log.log("success message");
				callback(resp.data);
			},function(rest){
				$log.log("Failed message");
			});
		};
	}];
});

app1.config(["calculateserviceProvider", function(calculateserviceProvider){
	// calculateserviceProvider.config("some url");
}]);