// dependencies are added via the 2nd (array) argument to the angular.module method:
let app = angular.module('app', [ 'ngRoute' ])

// config is a method that takes a function that injects e.g. $routeProvider
app.config(function ($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: 'pages/main.html', // physical location of view
    controller: 'mainController' // js that controls it
  })

  .when('/second', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })

  .when('/third/', { // :num enables pattern matching!
    templateUrl: 'pages/third.html',
    controller: 'thirdController'
  })

  .when('/third/:num', { // :num enables pattern matching!
    templateUrl: 'pages/third.html',
    controller: 'thirdController'
  })
})

app.controller('mainController', ['$location', '$log', '$scope', function ($location, $log, $scope) {
  $scope.name = 'Learn Angular'
  $log.log($location.path())
}])

app.controller('secondController', ['$log', '$scope', function ($log, $scope) {
  $log.log('Second!!')
}])

app.controller('thirdController', ['$log', '$routeParams', '$scope', function ($log, $routeParams, $scope) {
  $scope.name = 'Third page is wild.'

  $scope.num = $routeParams.num || 1
}])
