(function () {
    'use strict';
    function mdPanelDirective() {
        return {
            restrict: 'E',
            transclude: true,
            template: '<div class="md-panel" ng-transclude></div>'

        };
    }
    angular.module('umbraco').directive('mdPanel', mdPanelDirective);


}());