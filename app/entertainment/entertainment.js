'use strict';

angular.module('myApp.entertainment', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/entertainment', {
            templateUrl: 'entertainment/entertainment.html',
            controller: 'EntertainmentCtrl'
        });
    }])

    .controller('EntertainmentCtrl', [function() {

    }]);