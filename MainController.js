// Code goes here
(function () {

  var app = angular.module("githubViewer");

  var MainController = function ($scope, $interval, $location) {

    var decrementCountdwon = function () {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };

    var countdownInterval = null;
    $scope.startCountdown = function () {
      countdownInterval = $interval(decrementCountdwon, 1000, $scope.countdown);
    };

    $scope.search = function (username) {
      if (countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
      $location.path("/user/" + username);
    };

    $scope.username = 'Angular';
    $scope.countdown = 5;
    $scope.startCountdown();
  }

  app.controller('MainController', MainController);

}());