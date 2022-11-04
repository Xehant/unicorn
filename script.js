let myApp = angular.module("myapp", []);
myApp.controller("PasswordController", function($scope) {

    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    let mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

    $scope.password = {
        "float": "left",
        "width": "100px",
        "height": "25px",
        "margin-left": "5px"
    };

    $scope.analyze = function(value) {
        if(strongRegex.test(value)) {
            $scope.password["background-color"] = "green";
        } else if(mediumRegex.test(value)) {
            $scope.password["background-color"] = "orange";
        } else {
            $scope.password["background-color"] = "red";
        }
    };

});