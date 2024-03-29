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

var svc = angular.module('clServices', ['ngResource']);

svc.factory('Lecture', ['$resource',
    function ($resource) {
        return $resource('d/lecture/:lectureId.json', {}, {
            query: {method: 'GET', params: {lectureId: 'all'}, isArray: true}
        });
    }]);

svc.factory('Events', ['$resource',
    function ($resource) {
        return $resource('d/events.json', {}, {
            query: {method: 'GET', isArray: true}
        });
    }]);

svc.factory('Exercises', ['$resource',
    function ($resource) {
        return $resource('d/exercise/:categoryId.json', {}, {
            query: {method: 'GET', params: {categoryId: 'categories'}, isArray: true}
        });
    }]);
