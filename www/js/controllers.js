angular.module('starter.controllers', [])

.controller('RandomCtrl', function($scope, $http) {
  $scope.randomImg = false;
  $scope.randomGiph = false;
  var randompage =  Math.round(Math.random() * 10) + 1;
  function getRandomImg() {
    $http({
      method: 'GET',
      url: 'https://api.imgur.com/3/gallery/random/random/' + randompage + '.json' ,
      headers: {'Authorization': 'Client-ID d4d2ce46c0d75b6'}
    })
    .success(function(res) {
      $scope.randomimg = res.data;
      console.log($scope.randomimg);
    })
    $scope.randomImg = true;
   }

  function getRandomGiph() {
    $http({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC',
      header:{'Content-Type': 'application/json'}
    })
    .success(function(res) {
      $scope.randomgiph = res.data;
      console.log($scope.randomgiph);
    })
    $scope.randomGiph = true;
   }
   function randomfunc() {
      var randomnum =  Math.round(Math.random());
      var arr = [getRandomImg, getRandomGiph];
      arr[randomnum]()
  }
   randomfunc()
})

.controller('GiphCtrl', function($scope, $http) {
  $http({
    method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC',
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
    url: 'https://api.imgur.com/3/gallery/random/0.json',
    headers: {'Authorization': 'Client-ID d4d2ce46c0d75b6'}
  })
  .success(function(resp){
    $scope.imgurs = resp.data;
    console.log($scope.imgurs)
  })
});
