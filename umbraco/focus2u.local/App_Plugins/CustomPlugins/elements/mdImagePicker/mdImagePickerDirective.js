(function(){
    'use strict';

    function mdImageDirective() {
        return{
            restrict: 'E',
            scope: {
                ngModel : '=',
                size: '@'
            },
            replace: true,
            controller: 'mdImagePickerController',
            templateUrl: '/App_Plugins/CustomPlugins/elements/mdImagePicker/mdlImagePickerTemplate.html'
        }
    }

    angular.module('umbraco').directive('mdImage', mdImageDirective);

}());

