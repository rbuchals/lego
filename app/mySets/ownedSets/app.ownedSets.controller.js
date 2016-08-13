angular.module('app.mySets').controller('OwnedSetsCntl', function($scope, $http, $location, currentContextPath){
    'use strict';

    $scope.model = {};

    $scope.loadOwnedSets = function () {
        $http({
            method: 'GET',
            url: currentContextPath.get() + 'services/sets/owned'
        }).then(function(result) {
            $scope.searchResults = result.data;
        },function(response){
            alert('dej resta kurde' + response.status);
        });
    };

    $scope.loadOwnedSets();

    $scope.displaySetDetails = function(setID){
        $location.path('/allSets/search').search({query: setID});
    };

});


