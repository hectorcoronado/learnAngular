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

/**
 * nameService
 */
app.service('nameService', function () {
  var self = this

  this.name = 'John Singleton'

  this.nameLength = function () {
    return self.name.length
  }
})

/**
 * mainController
 */
app.controller('mainController', ['$location', '$log', '$scope', 'nameService', function ($location, $log, $scope, nameService) {
  $scope.blurb = 'Learn Angular'

  $scope.name = nameService.name

  $scope.$watch('name', function () {
    nameService.name = $scope.name
  })
}])

/**
 * secondController
 */
app.controller('secondController', ['$log', '$scope', function ($log, $scope) {
  $log.log('Second!!')
}])

/**
 * thirdController
 */
app.controller('thirdController', ['$log', '$routeParams', '$scope', 'nameService', function ($log, $routeParams, $scope, nameService) {
  $scope.blurb = 'Third page is wild.'

  $scope.num = $routeParams.num || 1

  $scope.name = nameService.name

  $scope.$watch('name', function () {
    nameService.name = $scope.name
  })
}])
