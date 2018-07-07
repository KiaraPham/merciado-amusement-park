'use strict';

angular.module('myApp.attraction', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/attraction', {
            templateUrl: 'attraction/attraction.html',
            controller: 'AttractionCtrl'
        });
    }])

    .controller('AttractionCtrl', [function() {

    }]);