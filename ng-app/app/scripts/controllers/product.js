'use strict';

/**
 * @ngdoc function
 * @name kautimApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the kautimApp
 */
angular.module('kautimApp')
  .controller('ProductCtrl', function ($scope) {

    $scope.products = [
      {
        name: 'Cookies', quantity: 2, price: 5
      },
      {
        name: 'Scarves', quantity: 1, price: 4
      },
      {
        name: 'Quilts', quantity: 3, price: 10
      }
    ];
    $scope.addProduct = function(name,quantity, price){
      $scope.name = name;
      $scope.quantity = quantity;
      $scope.price = price;
      $scope.products.push({name:name, quantity:quantity, price:price});
      $scope.name = '';
      $scope.quantity = '';
      $scope.price = '';
    };
    $scope.removeProducts = function() {
      $scope.products = [];
    };
  });
