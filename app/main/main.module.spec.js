'use strict';
describe('\'app.main\' module', function () {
    var routeProvider;

    beforeEach(function () {
        module('ngRoute', function ($routeProvider) {
            routeProvider = $routeProvider;
            spyOn(routeProvider, 'when').and.callThrough();
            spyOn(routeProvider, 'otherwise').and.callThrough();
        });
        module('app.main');
    });

    // This is necessary to trigger loading the modules above; use it to inject services once they are needed
    beforeEach(inject());

    it('defines a route for the welcome dialog', function () {
        expect(routeProvider.when).toHaveBeenCalledWith('/main', { templateUrl : 'main/welcome.html' });
    });

    it('defines the default route redirecting to the welcome dialog', function () {
        expect(routeProvider.when).toHaveBeenCalledWith('/', { redirectTo : '/main' });
    });

    it('defines the default route redirecting to the welcome dialog', function () {
        expect(routeProvider.otherwise).toHaveBeenCalledWith({templateUrl: 'common/page-not-found/page-not-found.html'});
    });
});
