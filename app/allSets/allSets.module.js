angular.module('app.allSets', ['ngRoute','app.allSets.templates', 'ui.bootstrap'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider
            .when('/allSets/searchParts',   {templateUrl: 'allSets/searchParts/displaySetParts.html'})
            .when('/allSets/searchPart',    {templateUrl: 'allSets/searchPart/displayPartDetails.html'})
            .when('/allSets/search',        {templateUrl: 'allSets/search/searchForSet.html'});
    });


