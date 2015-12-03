/**
 * Created by szhao on 11/20/2015.
 */

var iftaSelectionApp = angular.module('iftaSelectionApp', []);

iftaSelectionApp.controller('iftaSelectionCtrl', function($scope, $rootScope, iftaValidation, iftaInfo) {

    // Pass information data to the page
    $scope.ifta = iftaInfo;


    $scope.periods=[{
        quarter: "Q1 Jan-Mar"
    }, {
        quarter: "Q2 Apr-Jun"
    }, {
        quarter: "Q3 Jul-Sep"
    }, {
        quarter: "Q4 Oct-Dec"
    }];

    $scope.filingTypes=[{
        type: "Original"
    }, {
        type: "Amended"
    }];

    $scope.$watchGroup(['ifta.accountNumber', 'ifta.filingYear', "ifta.filingPeriod", "ifta.filingType"], function() {
            $scope.ifta.accountNumberError = !iftaValidation.accountNumberVal($scope.ifta.accountNumber);
            $scope.ifta.filingYearError = !iftaValidation.filingYearVal($scope.ifta.filingYear);
            $scope.ifta.filingPeriodError = !iftaValidation.filingPeriodVal($scope.ifta.filingPeriod);
            $scope.ifta.filingTypeError = !iftaValidation.filingTypeVal($scope.ifta.filingType);
            $rootScope.toFiling = !$scope.ifta.accountNumberError && !$scope.ifta.filingYearError
                && !$scope.ifta.filingPeriodError && !$scope.ifta.filingTypeError;
    }, true);
});



