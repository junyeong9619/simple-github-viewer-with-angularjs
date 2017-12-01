(function () {

  var app = angular.module("githubViewer");

  var RepoController = function ($scope, github, $routeParams) {

    $scope.username = $routeParams.username;
    $scope.reponame = $routeParams.reponame;

    var onRepoComplete = function (data) {
      $scope.repo = data;
    };

    var onError = function (reason) {
      $scope.error = reason;
    };

    github.getRepo($scope.username, $scope.reponame).then(onRepoComplete, onError);

  };

  app.controller("RepoController", RepoController);

}());