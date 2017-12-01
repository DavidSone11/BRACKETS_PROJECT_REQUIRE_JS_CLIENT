define([], function () {
    var mainController = function ($scope) {
     $scope.message = "RequireJs Integrated successfully";
        
    };
    mainController.$inject = ['$scope'];
    return mainController;
});

