'use strict';

/**
 * @ngdoc function
 * @name kautimApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kautimApp
 */
angular.module('kautimApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
