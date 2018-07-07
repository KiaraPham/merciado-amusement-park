'use strict';

angular.module('myApp.homepage', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/homepage', {
            templateUrl: 'homepage/homepage.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', ['$scope', function ($scope) {
        $scope.myInterval = 3000;
        $scope.slides = [
            {
                image: '../images/slider/slide1.jpg'
            },
            {
                image: '../images/slider/slide2.jpg'
            },
            {
                image: '../images/slider/slide3.jpg'
            },
        ];
    }])


