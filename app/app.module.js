angular.module('app', ['ngRoute',  'app.main', 'app.allSets'])
    .config(function ($locationProvider) {
        'use strict';
        $locationProvider.html5Mode(false);
    })
    .controller('AppCntl', ['$scope', function($scope) {
        $scope.message = 'Hello!';
    }]);;
