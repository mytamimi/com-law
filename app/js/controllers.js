/* 
 * Copyright (C) 2014 mytamimi
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


'use strict';

var ctrl = angular.module('clControllers', []);

ctrl.controller('MainCtrl', ['$scope', 'Lecture', function($scope, Lecture) {
        $scope.lectures = Lecture.query();
    }]);

ctrl.controller('LectureCtrl', ['$scope', '$routeParams', 'Lecture',
    function($scope, $routeParams, Lecture) {
        $scope.lecture = Lecture.get({lectureId: $routeParams.lectureId});
    }]);