/**
 * Created by szhao on 10/29/2015.
 */

var iftaApp = angular.module('iftaApp', ['ngRoute']);

iftaApp.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            controller: 'iftaCtrl'
        }).
        when('/Help', {
            templateUrl: '../UI/iftaFiling.html',
            controller: 'iftaCtrl'
        }).
        when('/iftaCtrl', {
            templateUrl: '../UI/ContactUs.html',
            controller: 'iftaCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
});

iftaApp.run(function($rootScope, NextBackService){
    $rootScope.goNext = function() {
        NextBackService.goNext();
    };

    $rootScope.goBack = function() {
        NextBackService.goBack();
    };
});

iftaApp.factory('NextBackService', function($route, $location) {
    //array for keeping defined routes
    var routes = [];

    angular.forEach($route.routes, function(config, route) {
        //not to add same route twice
        if (angular.isUndefined(config.redirectTo)) {
            routes.push(route);
        }
    });

    return {
        goNext: function() {
            var nextIndex = routes.indexOf($location.path()) + 1;
            if (nextIndex === routes.length) {
                $location.path(routes[0]);
            } else {
                $location.path(routes[nextIndex]);
            }
        },
        goBack: function() {
            var backIndex = routes.indexOf($location.path()) - 1;
            if (backIndex === -1) {
                $location.path(routes[routes.length - 1]);
            } else {
                $location.path(routes[backIndex]);
            }
        }
    };

});

iftaApp.controller('iftaCtrl', function ($scope) {

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

