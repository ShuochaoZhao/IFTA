/**
 * Created by szhao on 12/9/2015.
 */
var iftaFilingApp = angular.module('iftaFilingApp', []);

iftaFilingApp.controller('iftaFilingCtrl', function($scope) {
    $scope.tableRows;

    $scope.jurdctns = [
        'AB', 'AL', 'AR', 'AZ', 'BC', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'IA', 'ID', 'IL', 'IN', 'KS',
        'KY', 'LA', 'MA', 'MB', 'MD', 'ME', 'MN', 'MO', 'MS', 'MT', 'NB', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NL', 'NM',
        'NS', 'NV', 'NY', 'OH', 'OK', 'ON', 'OR', 'PA', 'PE', 'QC', 'RI', 'SC', 'SD', 'SK', 'TN', 'TX', 'UT', 'VA',
        'VT', 'WA', 'WI', 'WV', 'WY', 'Non-IFTA'
    ]

    $scope.scheduleDatas = [];

    $scope.addScheduleData = function(){
        var scheduleData = {
            D1: $scope.d1,
            taxDate: $scope.taxEndDate,
            D4: $scope.d4,
            D5: $scope.d5,
            D7: $scope.d7
        };
        $scope.scheduleDatas.push(scheduleData);
        console.log($scope.scheduleDatas);
    };

    $scope.deleteScheduleData = function(index){
        $scope.scheduleDatas.splice(index, 1);
    };

});
