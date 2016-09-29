(function () {
  'use strict'

  angular.module("LunchCheck",[]).controller("LunchCheckController",LunchCheckController);
  LunchCheckController.$inject=['$scope','$filter'];
  function LunchCheckController($scope,$filter){
    $scope.FoodString;
    $scope.change=function(){
      $scope.Foodlist=$scope.FoodString.split(/\s*,\s*/);
      $scope.amount=$scope.Foodlist.length;
      $scope.msg="Please enter data first";
      $scope.ColorStyles
      for (var i = 0; i < $scope.Foodlist.length; i++) {
        if ($scope.Foodlist[i].length==0) {
          $scope.amount--;
          }
      }
      if ($scope.amount==0) {
      $scope.msg="Please enter data first";
      $scope.ColorStyles={color:'black'};
    }
    else if ($scope.amount<=3) {
      $scope.msg="Enjoy!";
      $scope.ColorStyles={color:'green'};
    }
    else {
      $scope.msg="Too much!";
      $scope.ColorStyles={color:'red'};
      //
    }
    }
  }

})();
