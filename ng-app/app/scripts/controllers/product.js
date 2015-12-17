'use strict';

/**
 * @ngdoc function
 * @name kautimApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the kautimApp
 */
angular.module('kautimApp')
  .controller('ProductCtrl', function ($scope,$http) {

    $http
      .get('/api/products')
      .success( function(data) {
        $scope.products = data;
        console.log($scope.products);
      });

    $scope.addProduct = function(name, price){
      $scope.products.push({name:name, price:price});
      $http
        .post('/api/products', {name: name, price: price})
        .success(function (data) {
          console.log(data);
        });
      $scope.name = '';
      $scope.price = '';
    };

    $scope.removeProducts = function() {
      $http
        .delete('api/erase')
        .success(function() {
          $scope.products = [];
        });
    };

    $scope.ditchProduct = function (id){
      $http
        .delete('api/products/' + id)
        .success(function () {
          $scope.products = [];
        })
    };
  });
