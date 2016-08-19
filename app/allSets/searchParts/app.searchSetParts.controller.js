angular.module('app.allSets').controller('SearchForSetPartsCntl', function($scope, $http, $location){
    'use strict';

    $scope.model = {};

    $scope.searchForSetParts = function () {
        $http({
            method: 'GET',
            url: 'https://rebrickable.com/api/get_set_parts',
            params: {
                key: 'JfDxhwY7Cn',
                format: 'json',
                set: $scope.model.setNumber
            }
        }).then(function(result) {
            $scope.searchResults = result.data[0].parts;
        },function(response){
            alert('Error during connection:' + response.status);
        });
    };

    $scope.displayPartDetails = function(passedPartID){
        $location.path('/allSets/searchPart').search({part_id: passedPartID});
    };

    var loadFromUrlParam = function () {
        if (angular.isDefined($location.search().set_id)) {
            $scope.model.setNumber = $location.search().set_id;
        }
        $scope.searchForSetParts();
    };

    loadFromUrlParam();

});


