'use strict';

describe('service', function() {

    beforeEach(module('comlaw'));
    beforeEach(module('clServices'));
    beforeEach(module('ngResource'));

    it('should check the existence of Lecture factory', inject(function(Lecture) {
        expect(Lecture).toBeDefined();
    }));
});