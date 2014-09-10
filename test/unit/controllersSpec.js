'use strict';

describe('controllers', function() {
    beforeEach(module('comlaw'));
    beforeEach(module('clServices'));

    beforeEach(function() {
        this.addMatchers({
            toEqualData: function(expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    describe('MainCtrl', function() {
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('d/lectures.json')
                    .respond([{id: 100, title: "Lecture 100"},
                        {id: 200, title: "Lecture 200"},
                        {id: 300, title: "Lecture 300"},
                        {id: 350, title: "Lecture 350"},
                        {id: 450, title: "Lecture 450"}]);

            scope = $rootScope.$new();
            ctrl = $controller('MainCtrl', {$scope: scope});
        }));

        it('should create "lectures" model with 5 lectures fetched via XHR', function() {
            expect(scope.lectures).toEqualData([]);
            $httpBackend.flush();

            expect(scope.lectures).toEqualData([{id: 100, title: "Lecture 100"}, {id: 200, title: "Lecture 200"}, {id: 300, title: "Lecture 300"}, {id: 350, title: "Lecture 350"}, {id: 450, title: "Lecture 450"}]);
            expect(scope.lectures.length).toBe(5);
        });
    });
});