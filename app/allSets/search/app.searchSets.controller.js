'use strict';
angular.module('app.allSets').controller('SearchForSetCntl', function ($scope, $http, $location) {

    $scope.model = { type: 'S' };

    $scope.searchForLegoSet = function () {
        $http({
            method: 'GET',
            url: 'https://rebrickable.com/api/search',
            params: {
                key: 'JfDxhwY7Cn',
                format: 'json',
                type: $scope.model.type,
                query: $scope.model.query
            }
        }).then(function (result) {
            $scope.searchResults = result.data.results;

        }, function (response) {
            alert('Error during connection:' + response.status);
        });
    };

    var loadFromUrlParam = function () {
        if (angular.isDefined($location.search().query)) {
            $scope.model.query = $location.search().query;
            $scope.searchForLegoSet();
        }
    };

    loadFromUrlParam();

});
