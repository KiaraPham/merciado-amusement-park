'use strict';

angular.module('myApp.ticket', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/ticket', {
            templateUrl: 'ticket/ticket.html',
            controller: 'TicketCtrl'
        });
    }])

    .controller('TicketCtrl', [function() {

    }]);