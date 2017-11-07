(function(){
    'use strict';

    function mdFieldDynamicDirective() {
        return{
            restrict: 'E',
            scope: {
                ngModel : '=',
                placeholder: '@'
            },
            replace: true,
            controller: 'mdFieldDynamicController',
            templateUrl: '/App_Plugins/CustomPlugins/elements/dynamicField/mdFieldDynamicTemplate.html'
        }
    }

    angular.module('umbraco').directive('mdFieldDynamic', mdFieldDynamicDirective);

}());

