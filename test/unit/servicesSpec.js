'use strict';

describe('service', function () {

    beforeEach(module('comlaw'));
    beforeEach(module('clServices'));
    beforeEach(module('ngResource'));

    it('should check the existence of Lecture factory', inject(function (Lecture) {
        expect(Lecture).toBeDefined();
    }));

    it('should check the existence of Events factory', inject(function (Events) {
        expect(Events).toBeDefined();
    }));
    
    it('should check the existence of Events factory', inject(function (Events) {
        expect(Exercises).toBeDefined();
    }));
});