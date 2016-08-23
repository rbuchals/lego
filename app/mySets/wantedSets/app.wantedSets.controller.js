angular.module('app.mySets').controller('WantedSetsCntl', function($scope, $http, $location, currentContextPath){
    'use strict';

    $scope.model = {};

    $scope.loadWantedSets = function () {
        $http({
            method: 'GET',
            url: currentContextPath.get() + 'services/sets/wanted'
        }).then(function(result) {
            $scope.searchResults = result.data;
        },function(response){
            alert('Error during connection:' + response.status);
        });
    };

    $scope.loadWantedSets();

    $scope.displaySetDetails = function(setID){
        $location.path('/allSets/search').search({query: setID});
    };

});


