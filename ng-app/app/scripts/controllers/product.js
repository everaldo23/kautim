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
        $scope.stuff = data;
        console.log($scope.stuff);
      });

    $scope.products = [
      {
        name: 'Cookies', price: 5
      },
      {
        name: 'Scarves', price: 4
      },
      {
        name: 'Quilts', price: 10
      }
    ];
    $scope.addProduct = function(name, price){
      $scope.name = name;
      $scope.price = price;
      $scope.products.push({name:name, price:price});
      $scope.name = '';
      $scope.price = '';
    };
    $scope.removeProducts = function() {
      $scope.products = [];
    };
  });
