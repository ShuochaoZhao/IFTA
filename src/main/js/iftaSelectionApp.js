/**
 * Created by szhao on 11/20/2015.
 */

var iftaSelectionApp = angular.module('iftaSelectionApp', []);

iftaSelectionApp.controller('iftaSelectionCtrl', function($scope, $rootScope) {

    $scope.ifta = {
        accountNumber: "",
        filingYear:"",
        filingPeriod: "",
        filingType: "",
/*
        // boolean
        accountNumberBoolean: false,
        filingYearBoolean: false,
        filingPeriodBoolean: false,
        filingTypeBoolean: false,*/
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

    // Validation

    // Account Number Validation
    function accountNumberVal() {
        /*var reg = new RegExp('/^(0|[1-9][0-9]*)$/');*/
        var reg = new RegExp('/^(0|[1-9][0-9]*)$/');
        if($scope.ifta.accountNumber.length === 8) {
            alert(reg.test($scope.ifta.accountNumber));
            return true;
        } else {
            return false;
        }
    }

    $scope.$watch('ifta.accountNumber', function() {
        $rootScope.accountNumber = accountNumberVal();
    }, true);
});

