/**
 * Created by szhao on 12/3/2015.
 */

var iftaFilingApp = angular.module('iftaFilingApp', []);

iftaFilingApp.controller('iftaFilingCtrl', function($scope) {

    function datePicker() {
        $("#datepicker").datepicker({
            showOn: "button",
            buttonImage: "../images/iconCalendar.png",
            buttonImageOnly: true,
            buttonText: "Select date"
        });
    }
    datePicker();
});
