angular.module('app', ['ngRoute',  'app.main', 'app.allSets', 'app.mySets'])
    .config(function ($locationProvider) {
        'use strict';
        $locationProvider.html5Mode(false);
    });
