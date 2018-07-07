'use strict';

angular.module('myApp.restaurant', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/restaurant', {
            templateUrl: 'restaurant/restaurant.html',
            controller: 'RestaurantCtrl'
        });
    }])

    .controller('RestaurantCtrl', [function() {

    }]);