'use strict';
angular.module('app.allSets').controller('SearchForPartCntl', function($scope, $http, $location){

    $scope.model = {};

    $scope.searchForPart = function () {
        $http({
            method: 'GET',
            url: 'https://rebrickable.com/api/get_part',
            params: {
                key: 'JfDxhwY7Cn',
                format: 'json',
                part_id: $scope.model.partNumber
            }
        }).then(function(result) {
            $scope.searchResults = [result.data];
        },function(response){
            alert('Error during connection:' + response.status);
        });
    };

    var loadFromUrlParam = function () {
        if (angular.isDefined($location.search().part_id)) {
            $scope.model.partNumber = $location.search().part_id;
        }
        $scope.searchForPart();
    };

    loadFromUrlParam();

});


