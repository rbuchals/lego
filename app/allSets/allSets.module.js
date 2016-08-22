'use strict';
angular.module('app.allSets', ['ngRoute','app.allSets.templates', 'ui.bootstrap'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/allSets/searchParts',   {templateUrl: 'allSets/searchParts/displaySetParts.html'})
            .when('/allSets/searchPart',    {templateUrl: 'allSets/searchPart/displayPartDetails.html'})
            .when('/allSets/search',        {templateUrl: 'allSets/search/searchForSet.html'});
    })
    .directive('legoTable', function($location, $modal, currentContextPath) {
        return {
            restrict: 'E',
            scope: {
                results: '=',
            },
            templateUrl: 'allSets/legoTable.html',
            link: function($scope) {
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

                $scope.displaySetParts = function(setID) {
                    $location.path('/allSets/searchParts').search({ set_id: setID });
                };

                $scope.markWanted = function (setID) {
                    var wantedItem = $scope.results.filter(function (x) { return x['set_id'] === setID; });
                    $scope.openModalWantedItem(wantedItem);
                };
            }
        };
    });



