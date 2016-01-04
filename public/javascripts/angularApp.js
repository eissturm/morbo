angular.module('morbo', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl:'/home.html',
        controller: 'MainCtrl',
        resolve: {
          blankPromise: ['blanks', function(blanks){
            return blanks.getAll();
          }],
          fillPromise: ['fills', function(fills){
            return fills.getAll();
          }]
        }
      });
      $urlRouterProvider.otherwise('home');
  }
])
.controller('MainCtrl', [
  '$scope',
  'blanks',
  'fills',
  function($scope, blanks, fills) {
    $scope.blanks = blanks.blanks;

    $scope.addBlank = function(){
      if(!$scope.blankBody || $scope.blankBody === '') { return; }
      blanks.create({
        body: $scope.blankBody,
        author: 'user'
      });
      $scope.blankBody = '';
    };

    $scope.fills = fills.fills;
    $scope.addFill = function(){
      if(!$scope.fillBody || $scope.fillBody === '') { return; }
      fills.create({
        body: $scope.fillBody,
        author: 'user'
      });
      $scope.fillBody = '';
    };
  }
])
.factory('blanks', ['$http', function($http){
  var o = {
    blanks: []
  }
  o.getAll = function() {
    return $http.get('/blanks').success(function(data){
      angular.copy(data, o.blanks);
    });
  }
  o.create = function(blank) {
    return $http.post('/blanks', blank).success(function(data){
      o.blanks.push(data);
    });
  }
  return o;
}])
.factory('fills', ['$http', function($http){
  var o = {
    fills: []
  }
  o.getAll = function() {
    return $http.get('/fills').success(function(data){
      angular.copy(data, o.fills);
    });
  }
  o.create = function(fill) {
    return $http.post('/fills', fill).success(function(data){
      o.fills.push(data);
    });
  }
  return o;
}]);
