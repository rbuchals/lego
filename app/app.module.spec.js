'use strict';
describe('\'app\' module', function () {

    var 
        $controller,
        locationProvider;

    beforeEach(function () {
        module('ng', function ($locationProvider) {
            locationProvider = $locationProvider;
            spyOn(locationProvider, 'html5Mode').and.callThrough();
        });
        module('app');
    });

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('sets the \'Hello\' message', function () {
        var $scope = {};
			$controller('AppCntl', { $scope: $scope });
			expect($scope.message).toBe('Hello');
    });

    it('sets the \'Hashbang\' mode', function () {
        expect(locationProvider.html5Mode).toHaveBeenCalledWith(false);
    });
});

