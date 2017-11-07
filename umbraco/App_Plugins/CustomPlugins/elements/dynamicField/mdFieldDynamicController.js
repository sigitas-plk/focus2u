(function () {
    'use strict';


    function mdFieldDynamicController($scope) {

        $scope.vm = {
            add: add,
            remove: remove,
            moveUp: moveUp,
            moveDown: moveDown
        };


        //Dynamic Fields
        if (!$scope.ngModel) {
            $scope.ngModel = [];
        }

        function add(value) {
            $scope.ngModel.push(value);
            $scope.inputVal = null;
        }

        function remove(index) {
            $scope.ngModel.splice(index, 1);
        }

        function moveUp(index) {
            changeIndex($scope.ngModel, index, true);
        }

        function moveDown(index) {
            changeIndex($scope.ngModel, index, false);
        }

        function changeIndex(array, index, moveLeft) {

            var newIndex = moveLeft ? index - 1 : index + 1;
            var arrayLength = array.length - 1;

            if ((moveLeft && index === 0) || (!moveLeft && index >= arrayLength)) {
                return;
            }

            var item = array.splice(index, 1);
            return array.splice(newIndex, 0, item[0]);
        }
    }

    angular.module('umbraco').controller('mdFieldDynamicController', mdFieldDynamicController);
    mdFieldDynamicController.$inject = ['$scope'];

}());