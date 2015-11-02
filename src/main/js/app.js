/**
 * Created by szhao on 9/16/2015.
 */
var heibanApp = angular.module('heibanApp', []);
heibanApp.controller('courseCtrl', function ($scope, $http) {

    function init() {
        $http.get('../resources/courseTest.json')
            .success(function(data) {
                $scope.courses = data;
                console.log(data);
            });
    }

    init();
});