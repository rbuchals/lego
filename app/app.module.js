'use strict';
angular.module('app', ['ngRoute',  'app.main', 'app.allSets', 'ui.bootstrap'])
    .config(function ($locationProvider) {
        $locationProvider.html5Mode(false);
    })
    .controller('AppCntl', ['$scope', function($scope) {
        $scope.message = 'Hello!';
    }]);
