angular.module('app.mySets', ['ngRoute', 'app.mySets.templates'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider
            .when('/mySets/wantedSets', {templateUrl: 'mySets/wantedSets/wantedSets.html'})
            .otherwise({templateUrl: 'common/page-not-found/page-not-found.html'});
    });
