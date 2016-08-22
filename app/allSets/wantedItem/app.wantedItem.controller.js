angular.module('app.allSets').controller('WantedItemCntl', function ($scope, $modalInstance, $http, wantedItem, currentContextPath) {
    'use strict';

    $scope.selectedItem = wantedItem[0];
    $scope.wantedLegoItem = {
                setNumber: wantedItem[0].set_id,
                comment: "",
                wanted: true
            }
    $scope.ok = function () {
        $scope.markItemAsWanted(wantedItem);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    $scope.markItemAsWanted = function (data) {

        var formIsValid = $scope.wantedItemCntl.wantedForm && $scope.wantedItemCntl.wantedForm.$valid;
        if (formIsValid) {
            $http({
                method: 'POST',
                url: currentContextPath.get() + 'services/sets/wanted/add',
                data: $scope.wantedLegoItem
            }).then(function(result) {
                $modalInstance.close();
            },function(response){
                alert('Error during connection:' + response.status);
            });
        }
    };

    

    $scope.getErrorMessageOfField = function (field) {
      var
        errors = field && field.$error,
        fieldIsInvalid = field && field.$invalid,
        formIsSubmitted = $scope.wantedItemCntl.wantedForm && $scope.wantedItemCntl.wantedForm.$submitted,
        createErrorMessage = function (errorObject) {
          var errorCode;
          if (errorObject) {
            for (errorCode in errorObject) {
              if (errorObject.hasOwnProperty(errorCode)) {
                switch (errorCode) {
                  case 'required':
                    return 'Please provide a value';
                  case 'maxlength':
                    return 'The value is too long';
                  default:
                    return 'The value is wrong';
                }

              }
            }
          }
        };

      if (fieldIsInvalid && (field.$touched || formIsSubmitted)) {
        return createErrorMessage(errors);
      }
    };
});