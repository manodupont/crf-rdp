'use strict';

/**
 * @ngdoc overview
 * @name crfRdpApp
 * @description
 * # crfRdpApp
 *
 * Main module of the application.
 */
angular
    .module('crfRdpApp', [
        'ui.bootstrap',
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMap',

    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
