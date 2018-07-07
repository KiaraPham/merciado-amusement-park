'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'myApp.homepage',
    'myApp.restaurant',
    'myApp.gallery',
    'myApp.entertainment',
    'myApp.attraction',
    'myApp.event',
    'myApp.ticket',
    'myApp.contact',
    'myApp.registration',
    'myApp.map',
    'myApp.faq',
    'myApp.view2',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/homepage'});
}]);
