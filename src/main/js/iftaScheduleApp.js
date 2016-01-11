/**
 * Created by szhao on 12/3/2015.
 */

var iftaScheduleApp = angular.module('iftaScheduleApp', []);

iftaScheduleApp.controller('iftaScheduleCtrl', function($scope) {

    $scope.idPass = function (e) {
        var id = $(e.target).data('id');
        alert(id); // I want to get 102 as the result
    };

});
