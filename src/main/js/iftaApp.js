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
            customerInfo: '=info'
        },
    };
});

// Progress highlight1111111
/*iftaApp.directive('activeLink', ['$location', function (location) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, current) {
            var clazz = attrs.activeLink;
            var path = current.templateUrl;
            path = path.substring(1); //hack because path does not return including hashbang
            scope.location = location;
            scope.$watch('location.path()', function (newPath) {
                if (path === newPath) {
                    element.addClass(clazz);
                } else {
                    element.removeClass(clazz);
                }
            });
        }
    };
}]);*/

iftaApp.controller('iftaCtrl', function($scope) {

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
});


