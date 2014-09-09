'use strict';

var comLawApp = angular.module('comLawApp', [
    'ngRoute',
    'comLawControllers',
    'comLawServices'
]);

comLawApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/main', {
            templateURL: 'partials/main.html',
            controller: 'MainCtrl'
        }).otherwise({redirectTo: '/main'});
    }]);