'use strict';

/**
 * @ngdoc function
 * @name crfRdpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the crfRdpApp
 */
angular.module('crfRdpApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/equipiers', {
                templateUrl: 'views/equipiers.html',
                controller: 'EquipiersCtrl'
            })
    })
    .controller('EquipiersCtrl', [
        '$scope',
        'Equipiers'
        , function ($scope, Equipiers) {

            $scope.equipiers = Equipiers.get();

        }]);
