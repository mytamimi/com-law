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

var ctrl = angular.module('clControllers', ['clServices']);

ctrl.controller('MainCtrl', ['$scope', 'Events', function ($scope, Events) {
        var events = Events.query(function () {
            $scope.eventOrder = 'date';
            $scope.inFuture = function (e) {
                return (new Date(e.date) > new Date());
            };

            var i = 0;
            while (i < events.length) {
                if (!$scope.inFuture(events[i])) {
                    events.splice(i, 1);
                }
                else {
                    i++;
                }
            }

            $scope.events = events;
        });
    }]);

ctrl.controller('OutlineCtrl', ['$scope', 'Lecture',
    function ($scope, Lecture) {
        $scope.lectures = Lecture.query(function () {
            var i = 0;
            while ($scope.lectures[i].done) {
                i++;
            }
            $scope.i = i;
        });

        $scope.isNext = function (l) {
            return (l === $scope.lectures[$scope.i]) && (!l.done);
        };

        $scope.isLater = function (l) {
            return (l !== $scope.lectures[$scope.i]) && (!l.done);
        };

        $scope.isDone = function (l) {
            return l.done;
        };
    }]);

ctrl.controller('LectureCtrl', ['$scope', '$routeParams', 'Lecture',
    function ($scope, $routeParams, Lecture) {
        Lecture.query(function (list) {
            $scope.pending = !(list[parseInt($routeParams.lectureId) - 1].done);
        });
        $scope.lecture = Lecture.get({lectureId: $routeParams.lectureId});
    }]);

ctrl.controller('ExercisesListCtrl', ['$scope', 'Exercise',
    function ($scope, Exercise) {
        $scope.categories = Exercise.query();
    }]);

ctrl.controller('ExerciseCtrl', ['$scope', '$routeParams', 'Exercise',
    function ($scope, $routeParams, Exercise) {
        $scope.questions = Exercise.get({categoryId: $routeParams.categoryId});
    }]);