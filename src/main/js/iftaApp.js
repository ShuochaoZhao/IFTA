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
        $("#datepicker").datepicker({
            showOn: "button",
            buttonImage: "../images/iconCalendar.png",
            buttonImageOnly: true,
            buttonText: "Select date"
        });
    }
    datePicker();

    function helpWindow() {
        var popupWindow = window.open('../UI/iftaFiling.html');
    }
});


/*
angular.module('originalModule').service('popupService', function(someOtherDataService) {

    var popupWindow = window.open('popupWindow.html');
    popupWindow.mySharedData = someOtherDataService.importantData;

});*/
