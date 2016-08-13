angular.module('app.mySets').controller('OwnedPartsCntl', function($scope, $http, $location, currentContextPath){
    'use strict';

    $scope.model = {};

    $scope.loadOwnedParts = function () {
        $http({
            method: 'GET',
            url: currentContextPath.get() + 'services/pieces/owned'
        }).then(function(result) {
            $scope.searchResults = result.data;
        },function(response){
            alert('dej resta kurde' + response.status);
        });
    };

    $scope.loadOwnedParts();

    $scope.displayPieceDetails = function(partId){
        $location.path('/allSets/searchPart').search({part_id: partId});
    };

});


