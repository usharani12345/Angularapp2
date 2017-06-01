var app = angular.module("myApp",['ngRoute']);
app.config(["$locationProvider",function($locationProvider){
	$locationProvider.hashPrefix('');
}])
app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl:"index.html",
		controller:"myHomeController",
         caseInsensitiveMatch:true
	})
	.when("/register",{
		templateUrl:"Register.html",
		controller:"myRegisterController",
        caseInsensitiveMatch:true
	})
	.when("/login/:id/:name/:age",{
		templateUrl:"Login.html",
		controller:"myLoginController",
         caseInsensitiveMatch:true
	})
}])

app.run([function(){
	
}])

app.controller("myHomeController",["$scope",function($scope){
	$scope.message1="inside Home controller";
}])

app.controller("myRegisterController",["$scope",function($scope){
	$scope.name="usha";

	$scope.createRegister = function(){
	
		contactFactory.addRegister($scope.register)
			.then(function(response){
				console.log(response)
				$scope.contact = {};
				
			})
	}
}])
app.controller("myLoginController",["$scope","$routeParams",function($scope,$routeParams){
	$scope.message3="inside login controller"+$routeParams.id+""+$routeParams.name+""+$routeParams.age;
}])