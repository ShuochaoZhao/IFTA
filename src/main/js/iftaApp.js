/*Created by szhao on 10/29/2015.*/

var iftaApp = angular.module('iftaApp', ['ngRoute', 'iftaSelectionApp']);

iftaApp.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: '../UI/iftaSelection.html',
            controller: 'iftaSelectionCtrl'
        }).
        when('/iftaFiling.html', {
            templateUrl: '../UI/iftaFiling.html',
            /*controller: 'iftFilingCtrl'*/
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
                case '/iftaFiling.html':
                    $rootScope.proId = '2';
                    break;
                default:
                    $rootScope.proId = '3';
            }
        });
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
            if(inputVal === undefined) {
                return false;
            } else {
                return true;
            }
        },

        //Filing Type Validation
        filingTypeVal: function(inputVal) {
            if(inputVal === undefined) {
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

iftaApp.controller('iftaCtrl', function($scope, $rootScope) {

    function today() {
        $scope.date = new Date();
    }
    today();

    function datePicker() {
        $("#datepicker").datepicker({
            showOn: "button",
            buttonImage: "../images/iconCalendar.png",
            buttonImageOnly: true,
            buttonText: "Select date"
        });
    }
    datePicker();

    $scope.popupWindow = function(URL) {
        window.open(URL, "hahaha", "width=300, height=300");
    }

    $scope.progresses = [{id:'1', name: 'Select Filing Period' },
        {id:'2', name: 'Enter Information' },
        {id:'3', name:'Review and File'},
        {id:'4', name: 'Confirmation'}];
});


