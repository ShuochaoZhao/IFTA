/**
 * Created by szhao on 11/20/2015.
 */

var iftaSelectionApp = angular.module('iftaSelectionApp', []);

iftaSelectionApp.controller('iftaSelectionCtrl', function($scope) {
    $scope.periods=[{
        quarter: "Q1 Jan-Mar"
    }, {
        quarter: "Q2 Apr-Jun"
    }, {
        quarter: "Q3 Jul-Sep"
        }, {
        quarter: "Q4 Oct-Dec"
    }];

});
