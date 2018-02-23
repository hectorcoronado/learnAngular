console.log('app.js loaded.')

// this should be the only var in the global namespace
const app = angular.module('app', [])
/**
  * we pass this angular module to the html view via the ng-app

/**
  * an angular module takes a controller for the view, which it associates via * the ng-controller custom attribute:
  * <div ng-controller='main'>
  *   // control the html/view here
  * </div>
  *
  */

// app.controller('mainController', function ($scope) {
//   $scope.name = 'Jane Doe'
//   $scope.occupation = 'coder'
//
//   $scope.getName = () => 'John Doe'
//   console.log($scope)
// })

/**
  * the last element of the optional array that we can pass as a 2nd
  * argument to 'controller' MUST be the function that controls it.
  * All the preceding elements of that array are the arguments passed
  * to that function:
  */

// app.controller('mainController', ['$scope', '$timeout', function ($scope, $timeout) {
//   $scope.name = 'hector'
//
//   $timeout(function () {
//     $scope.name = 'everybody'
//   }, 3000)
// }])

/**
 * Directive: An instruction to AngularJS to manipulate a piece of the
 * DOM.
 * This couuld be 'add a class', 'hide this', 'create this', etc...
 */

app.controller('mainController', ['$scope', '$filter', '$timeout', function ($scope, $filter, $timeout) {
  $scope.handle = 'hcoronado'
  $scope.lowerCaseHandle = function () {
    return $filter('lowercase')($scope.handle)
  }

  // $scope.$watch('handle', function (newValue, oldValue) {
  //   console.info('changed')
  //   console.log('old:', oldValue)
  //   console.log('new:', newValue)
  // })
  //
  // $timeout(function () {
  //   $scope.handle = 'newTwitterHandle'
  //   console.log('Scope changed.')
  // }, 3000)
  $scope.characters = 5

  $scope.rules = [
    { rulename: 'must be 5 characters' },
    { rulename: 'must not be used elsewhere' },
    { rulename: 'must be cool' }
  ]

  console.log($scope.rules)
}])
