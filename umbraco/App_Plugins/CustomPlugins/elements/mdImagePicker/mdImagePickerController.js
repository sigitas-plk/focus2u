(function () {
    'use strict';

    function mdImagePickerController($scope, dialogService) {
        var size = $scope.size || 200;

        $scope.vm = {
            pickAImage: pickAImage,
            deleteImage: deleteImage
        };

        function deleteImage() {
            $scope.ngModel = null;
        }

        function pickAImage() {
            dialogService.mediaPicker({
                callback: function (data) {
                    $scope.ngModel = {
                        name: data.name || '',
                        url: data.image || '',
                        thumbnail: data.image + '?width=' + size + '&mode=max&animationprocessmode=first"' || ''
                    };
                }
            });
        }
    }

    angular.module('umbraco').controller('mdImagePickerController', mdImagePickerController);
    mdImagePickerController.$inject = ['$scope', 'dialogService'];
}());