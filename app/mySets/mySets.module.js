angular.module('app.mySets', ['ngRoute', 'app.mySets.templates'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider.when('/mySets/ownedSets', {templateUrl: 'mySets/ownedSets/ownedSets.html'});
        $routeProvider.when('/mySets/ownedParts', {templateUrl: 'mySets/ownedParts/ownedParts.html'});
        $routeProvider.when('/mySets/wantedSets', {templateUrl: 'mySets/wantedSets/wantedSets.html'});
    });
