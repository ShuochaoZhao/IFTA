/**
 * Created by szhao on 11/20/2015.
 */

var iftaSelectionApp = angular.module('iftaSelectionApp', ['ngCookies']);

iftaSelectionApp.controller('iftaSelectionCtrl', function($scope, $rootScope, $cookies, iftaValidation) {

    $scope.showErrorVal = false;

    $scope.ifta = {
        accountNumber: "",
        filingYear:"",
        filingPeriod: "",
        filingType: "",

        // boolean
        accountNumberError: true,
        filingYearError: true,
        filingPeriodError: true,
        filingTypeError: true,
        toFiling: false
    };



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

    /*// Show error message when click
    $scope.onSubmit= function() {
        alert("I am working");
        $cookies.put('iftaAccuntNumber', $scope.ifta.accountNumber);
        $scope.ifta.accountNumber = $cookies.get('iftaAccuntNumber')
    };

    $scope.ifta.accountNumber = $cookies.get('iftaAccuntNumber');*/
});



