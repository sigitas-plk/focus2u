(function () {
    'use strict';
    function mdTextAreaDirective(mdTypographyDataService, $log, $compile) {
        return {
            restrict: 'E',
            scope: {
                ngModel: '='
            },
            link: function (scope, element, attr) {
                mdTypographyDataService.getStyles.then(function (value) {
                    compile(value['input']);
                }, function (error) {
                    $log.error(error);
                    compile(null);
                });
                function compile(style) {
                    var styles = style ? style : '';
                    var template = '<textarea style="' + styles + '" type="text" ng-model="ngModel"  placeholder="Write ' + attr.placeholder + ' here.."></textarea>'
                    element.prepend($compile(template)(scope));
                }
            }
        };
    }


    angular.module('umbraco').directive('mdTextArea', mdTextAreaDirective);
    mdTextAreaDirective.$inject = ['mdTypographyDataService', '$log', '$compile'];

}());
