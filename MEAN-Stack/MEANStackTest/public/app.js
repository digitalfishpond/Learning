var myApp = angular.module("myApp", []);

myApp.controller("mainController", function($http){
    var app = this;
    var url = "http://localhost:3000";

    app.saveProduct = function(newProduct){
        $http.post(url + "/add", {name:newProduct}).success(function(){
            app.loadProducts();
        });
    };

    app.loadProducts = function() {
        $http.get(url).success(function (products) {
            app.products = products;
        })
    }

    app.loadProducts();
});