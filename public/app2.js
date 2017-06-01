var app = angular.module("myApp2",['ui.router']);
app.config(["$locationProvider",function($locationProvider){
    $locationProvider.hashPrefix('');
}])

app.config(["$stateProvider",function($stateProvider){
    $stateProvider
        .state("home",{
        url:'/',
        templateUrl:"index.html",
        controller:"myHomeController"
    })
     .state("register",{
        url:'/register',
        templateUrl:"Register.html",
        controller:"myRegisterController",
        caseInsensitiveMatch:true
    })
     .state("login",{
        url:'/login',
        templateUrl:"Login.html",
        controller:"myLoginController"
    })
}])

app.controller("myHomeController",["$scope",function($scope){
	$scope.message1="inside Home controller";
}])

app.controller("myRegisterController",["$scope",function($scope){
	$scope.name="usha";
}])
app.controller("myLoginController",["$scope",function($scope){
	$scope.message3="inside login controller";
}])