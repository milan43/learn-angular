angular.module("myApp", []);
var app = angular.module("myApp");
app.controller("myCtrl", function(){
	this.employees = [
	{
		"id": 1,
		"name": "Hari",
		"salary": 10000,
		"age": 13
	},
		{
		"id": 2,
		"name": "Arjun",
		"salary": 20000,
		"age": 24
	},
		{
		"id": 3,
		"name": "Asha",
		"salary": 50000,
		"age": 22
	},
		{
		"id": 4,
		"name": "Nabin",
		"salary": 25000,
		"age": 22
	},
		{
		"id": 5,
		"name": "Shyam",
		"salary": 10000,
		"age": 22
	},
		{
		"id": 6,
		"name": "Hari",
		"salary": 40000,
		"age": 23
	}
		];
		this.value = 2 > 3;
	//this.hideSalary = parseDouble(employees.salary) < 10000;

		//filter dependency is should be included in controller just like $http as $filter
		/*this.name = "MILAN";
		this.name =$filter("uppercase")(this.name);
		*/


	/*To order table based on the user click to particular header of table
	this method is called when user clicks the particular th element of table*/
	this.orderByMe = function(orderByClick){
		// orderFactory.orderByClick(customorder, function(ordering){
		this.ordering = orderByClick;

	// });
	}	
	});
/*app.factory("orderFactory", function(){
	var order = {};
	order.orderByClick = function(odr, callback){
		return callback(odr);
	};
	return order;
});*/