angular.module('starter.controllers', [])

.controller('RandomCtrl', function($scope) {})

.controller('GiphCtrl', function($scope, $http) {
  $http({
    method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC',
    headers: {'Content-Type': 'application/json'}
  })
  .success(function(resp){
    $scope.giphs = resp.data;
    console.log($scope.giphs)
  })
})

.controller('ImgurCtrl', function($scope, $http) {
  $http({
    method: 'GET',
    url: 'https://api.imgur.com/3/gallery/hot/viral/0.json',
    headers: {'Content-Type': 'application/json'}
  })
  .success(function(resp){
    $scope.imgurs = resp.data;
    console.log($scope.imgurs)
  })

});
