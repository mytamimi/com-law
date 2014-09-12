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

var fltr = angular.module('clFilters', ['ngSanitize']);

fltr.filter('status', ['$sce', function ($sce) {
        return function (input) {
            var output = '';
            if (input) {
                output = '<span class="status done"><i class="fa fa-check-circle fa-3x"></i></span>';
            } else {
                output = '<span class="status pending"><i class="fa fa-clock-o fa-3x"></i></span>';
            }
            return $sce.trustAsHtml(output);
        };
    }]);