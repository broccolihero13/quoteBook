// INITILIZE CONTROLLER
// ============================================================
angular.module("quoteBook").controller("mainCtrl", function($scope, dataService) {
    // VARIABLES
    // ============================================================
    // $scope.test = "how do it know?";
    $scope.quotes = dataService.getData();
    // FUNCTIONS
    // ============================================================
    $scope.deleteMe = function(textToDelete) {
        dataService.removeData(textToDelete);
    };

    $scope.newQuote = function() {
        var newQuote = {
            text: $scope.newText,
            author: $scope.newAuthor
        };
        if (dataService.addData(newQuote)) {
            $scope.newText = '';
            $scope.newAuthor = '';
        }
    };
});
