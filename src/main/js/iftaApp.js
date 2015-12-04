/*Created by szhao on 10/29/2015.*/

var iftaApp = angular.module('iftaApp', ['ngRoute', 'iftaSelectionApp', 'iftaFilingApp']);

iftaApp.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: '../UI/iftaSelection.html',
            controller: 'iftaSelectionCtrl'
        }).
        when('/iftaFiling', {
            templateUrl: '../UI/iftaFiling.html',
            controller: 'iftaFilingCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
})
    .run(function($rootScope, $location) {
        $rootScope.$on("$routeChangeStart", function (event, next) {
            if (next.templateUrl === '../UI/iftaFiling.html') {
                if(!$rootScope.toFiling) {
                    $location.path('../UI/iftaSelection.html');
                }
            }
        });

        $rootScope.$on("$routeChangeSuccess", function() {
            $rootScope.currURL = $location.path();
            switch($rootScope.currURL) {
                case '/':
                    $rootScope.proId = '1';
                    break;
                case '/iftaFiling':
                    $rootScope.proId = '2';
                    break;
                default:
                    $rootScope.proId = '3';
            }
        });
    });

// Information storage factory
iftaApp.factory('iftaInfo', function() {
    return {
        accountNumber: '',
        filingYear: '',
        filingPeriod: '',
        filingType: '',

        // boolean
        accountNumberError: '',
        filingYearError: '',
        filingPeriodError: '',
        filingTypeError: '',
        toFiling: false
    };
});

// Validation factory
iftaApp.factory('iftaValidation', function($http){
    return {
        // Account Number Validation
        accountNumberVal: function(inputVal) {
            /*alert("accountNumberVal is " + inputVal);*/
            if (inputVal === undefined) {
                return false;
            } else {
                if(inputVal.length === 8 && inputVal.match(/^\d+$/)) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        //Filing Year Validation
        filingYearVal: function(inputVal) {
            var d = new Date();
            if (inputVal === undefined) {
                return false;
            } else {
                if(inputVal.length === 4 && inputVal.match(/^\d+$/) && inputVal <= d.getFullYear()) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        //Filing Period Validation
        filingPeriodVal: function(inputVal) {
            if(inputVal === '') {
                return false;
            } else {
                return true;
            }
        },

        //Filing Type Validation
        filingTypeVal: function(inputVal) {
            if(inputVal === '') {
                return false;
            } else {
                return true;
            }
        }
    };
});

// Progress highlight
iftaApp.directive('iftaProgress', function() {
    return {
        restrict: 'A',
        templateUrl: 'iftaProgress.html',
        scope: {
            progress: '=iftaProgress'
        }
    };
});

iftaApp.directive('iftaAccountHead', function(iftaInfo) {
    return {
        restrict: 'A',
        templateUrl:'iftaAccountHead.html',
        transclude: true,
        scope: {
            acntHead: '=iftaAccountHead'
        },

        link: function (scope) {
            scope.acntHead = iftaInfo;
            switch(scope.acntHead.filingPeriod) {
                case 'Q1 Jan-Mar':
                    scope.acntHead.filingTime = "3/30/2014"
                    break;
                case 'Q2 Apr-Jun':
                    scope.acntHead.filingTime = "3/30/2014"
                    break;
                case 'Q3 Jul-Sep':
                    scope.acntHead.filingTime = "3/30/2014"
                    break;
                case 'Q4 Oct-Dec':
                    scope.acntHead.filingTime = "3/30/2014"
                    break;
            }
        }
    };
});


iftaApp.controller('iftaCtrl', function($scope, $rootScope) {

    function today() {
        $scope.date = new Date();
    }
    today();

    $scope.popupWindow = function(URL) {
        window.open(URL, "hahaha", "width=300, height=300");
    }

    $scope.progresses = [
        {id:'1', name: 'Select Filing Period'},
        {id:'2', name: 'Enter Information'},
        {id:'3', name:'Review and File'},
        {id:'4', name: 'Confirmation'}
    ];

/*
    $scope.acntHead =
    {accountNumber: '1234567test', filingPeriod: '2222test'};*/

});


