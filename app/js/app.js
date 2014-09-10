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
(function() {
    var app = angular.module('comlaw', [
        'ngRoute',
        'clControllers',
        'clServices'
    ]);

    app.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
                    when('/', {
                        templateUrl: 'partials/main.html',
                        controller: 'MainCtrl'
                    }).
                    when('/lecture/:lectureId', {
                        templateUrl: 'partials/lecture-details.html',
                        controller: 'LectureCtrl'
                    }).otherwise({redirectTo: '/'});
        }]);
})();