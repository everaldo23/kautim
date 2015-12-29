'use strict';

/**
 * @ngdoc overview
 * @name kautimApp
 * @description
 * # kautimApp
 *
 * Main module of the application.
 */
angular
  .module('kautimApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'xeditable',
    'Devise'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/product', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'product'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .otherwise({
        redirectTo: '/'
      });
    $httpProvider.defaults.withCredentials = true;
  })
  .run(function(editableOptions, Auth){
    editableOptions.theme = 'bs3';
    Auth.currentUser().then(function(user){
      console.log(user);
      console.log(Auth._currentUser);
    });
  });
