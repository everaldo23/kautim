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
    'Devise',
    'ng-token-auth'
  ])
  .config(function ($routeProvider, $httpProvider, $authProvider) {
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
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
    $httpProvider.defaults.withCredentials = true;
    $authProvider.configure({
      apiUrl: 'http://localhost:3000'
    });
  })
  .run(function(editableOptions, $auth){
    editableOptions.theme = 'bs3';
    console.log($auth.validateUser());
  });
