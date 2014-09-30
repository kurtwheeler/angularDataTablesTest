// Declare app level module which depends on filters, and services
angular.module('myApp', ['datatables']).controller('MyTableController', ['$scope', function ($scope) {
  $scope.columns = ["One", "Two", "Three"];
  $scope.dataToDisplay = [
    ["a", "b", "c"],
    ["e", "f", "g"]
  ];

  $scope.addColumn = function () {
    $scope.columns.push("NEW COLUMN");

    angular.forEach($scope.dataToDisplay, function(row) {
      row.push("1");
    });
    console.log($scope.columns);
    console.log($scope.dataToDisplay);
  }
}]);
