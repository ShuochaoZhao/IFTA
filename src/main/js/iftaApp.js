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
            controller: 'iftFilingCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
})
    .run(function($rootScope, $location) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if (next.templateUrl === '../UI/iftaFiling.html') {
                alert($rootScope.accountNumber);
                if($rootScope.accountNumber != "12345678") {
                    $location.path('../UI/iftaSelection.html');
                }
            }
        });
    });

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


