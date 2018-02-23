const app = angular.module('app', [])

app.controller('buttonController', ['$http', '$log', '$scope', function ($http, $log, $scope) {
  $log.log('ok')

  $scope.logClick = function () {
    $log.log('clicked.')
  }

  // GET request, pass it url
  $http.get('/api')
    // when it gets data back, it runs sucess method with function; whatever value gets passed to the callback will be data from url:
    .success(function (response) {
      // do something w/response like:
      $scope.data = response
    })
    // if the get request fails, it'll run this error method with its own callback, and it will return a status code as well
    .error(function (error, status) {
      $log.error('Error: ', error, '. Status: ', status)
    })

  // POST request, pass it url and some data:
  $scope.postData = function () {
    let someData = $scope.someDataFromAFormOrSomething
    $http.post('/api', someData)
      .success(function (response) {
        $scope.postResponse = response
      })
      .error(function (error, status) {
        $log.error('Error: ', error, '. Status: ', status)
      })
  }
}])
