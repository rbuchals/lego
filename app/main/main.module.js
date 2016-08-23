'use strict';
angular.module('app.main', ['ngRoute', 'app.main.templates'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {redirectTo: '/main'})
            .when('/main', {templateUrl: 'main/main.html'})
            .when('/allSets/search', {templateUrl: 'allSets/search/searchForSet.html'})
            .otherwise({templateUrl: 'common/page-not-found/page-not-found.html'});
    });
