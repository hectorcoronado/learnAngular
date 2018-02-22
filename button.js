const app = angular.module('app', [])

app.controller('buttonController', ['$log', '$scope', function ($log, $scope) {
  $log.log('ok')

  $scope.logClick = function () {
    $log.log('clicked.')
  }
}])
