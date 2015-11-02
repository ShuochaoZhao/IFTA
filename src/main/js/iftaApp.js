/**
 * Created by szhao on 10/29/2015.
 */

var iftaApp = angular.module('iftaApp', []);

iftaApp.controller('iftaCtrl', function ($scope) {

    function today() {
        $scope.date = new Date();
    }
    today();

    function datePicker() {
        $( "#datepicker" ).datepicker({
            showOn: "button",
            buttonImage: "images/calendar.gif",
            buttonImageOnly: true,
            buttonText: "Select date"
        });
    }
    datePicker();

    function helpWindow() {
        window.open("http://www.w3schools.com");
    }
});