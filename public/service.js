app.factory("registerFactory", ['$http',function($http){  
    var obj = {};
    
   /* obj.fetchContact = function(){ 
        return $http.get('/getContacts');
    }*/


    obj.addRegister = function(register){ 
        return $http.post('/createRegister',register);
    }

   

 return obj;
}]);