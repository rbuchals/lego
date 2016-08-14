angular.module('app.main', ['ngRoute', 'app.main.templates'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider
            .when('/', {redirectTo: '/main'})
            .when('/main', {templateUrl: 'main/main.html'})
            .otherwise({templateUrl: 'common/page-not-found/page-not-found.html'});
    });
