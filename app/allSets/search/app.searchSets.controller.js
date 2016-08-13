angular.module('app.allSets').controller('SearchForSetCntl', function($scope, $http, $location, currentContextPath){
    'use strict';

    $scope.model = {type: 'S'};

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
        }).then(function(result) {
            $scope.searchResults = result.data.results;

        });
    };

        $scope.markSetAsWanted = function (data) {
            $http({
                method: 'POST',
                url: currentContextPath.get() + 'services/sets/wanted/add',
                data: {
                    setNumber: data[0].set_id,
                    wanted: true
                }
            });
        };

    $scope.displaySetParts = function(setID){
        $location.path('/allSets/searchParts').search({set_id: setID});
    };

    $scope.markOwned = function(setID){
        $location.path('/allSets/searchParts').search({set_id: setID});
    };

    $scope.markWanted = function(setID){
        var wantedItem = $scope.searchResults.filter(function(x) { return x['set_id'] === setID;} );
        $scope.markSetAsWanted(wantedItem);
    };

    var loadFromUrlParam = function () {
        if (angular.isDefined($location.search().query)) {
            $scope.model.query = $location.search().query;
            $scope.searchForLegoSet();
        }
    };

    loadFromUrlParam();

});


