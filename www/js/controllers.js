var bmi = angular.module('starter.controllers', [])

bmi.controller('AboutController', function () {

});

bmi.controller('BmiController', function() {

});

bmi.controller('BmiController', function($scope) {
  $scope.data = {};
  $scope.calculateBMI = function() {
    var person = new Person({
      weight: $scope.data.weight,
      height: $scope.data.height
    });
    person.calculate_bmi_met();
    $scope.person = person;
  };
});
