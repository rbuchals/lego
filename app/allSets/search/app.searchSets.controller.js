angular.module('app.allSets').controller('SearchForSetCntl', function ($scope, $http, $location, $modal, currentContextPath) {
    'use strict';

    $scope.model = { type: 'S' };

    // Modal Start

    $scope.openModalWantedItem = function (wantedItem) {

        var wantedItemModalInstance = $modal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'allSets/wantedItem/wantedItem.html',
            controller: 'WantedItemCntl',
            resolve: {
                wantedItem: function () {
                    return wantedItem;
                },
                currentContextPath: function () {
                    return currentContextPath;
                }
            }
        });
    };

    // Modal End

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

    $scope.displaySetParts = function (setID) {
        $location.path('/allSets/searchParts').search({ set_id: setID });
    };

    $scope.markWanted = function (setID) {
        var wantedItem = $scope.searchResults.filter(function (x) { return x['set_id'] === setID; });
        $scope.openModalWantedItem(wantedItem);
    };

    var loadFromUrlParam = function () {
        if (angular.isDefined($location.search().query)) {
            $scope.model.query = $location.search().query;
            $scope.searchForLegoSet();
        }
    };

    loadFromUrlParam();

});


