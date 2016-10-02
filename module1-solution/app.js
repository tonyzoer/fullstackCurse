(function () {
  'use strict'

  angular.module("LunchCheck",[]).controller("LunchCheckController",LunchCheckController);
  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope){
    $scope.FoodString;
    $scope.change=function(){
      if ($scope.FoodString==null) {
        $scope.msg="Please enter data first";
        $scope.ColorStyles={color:'black'};
      }
      else{
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
  }

})();
