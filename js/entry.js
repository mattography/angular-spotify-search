angular.module('myApp', []).controller('MusicController', function($scope, $http) {
  $scope.$watch('search', function() {
    fetch();
  });

  $scope.search = "";
  $scope.listLimit = "10";
  $scope.selectedSongs = [];
  $scope.addItem = function(song) {
    $scope.selectedSongs.push(song);
  }
  $scope.remove = function(song) {
    _.remove($scope.selectedSongs, function(val) {
      return val === song;
    });

    $scope.selectedSongs.splice(index, 1);
  };
  $scope.IsVisible = false;
  $scope.ShowHide = function () {
      $scope.IsVisible = $scope.IsVisible ? false : true;
  }

  function fetch() {
    $http.get("https://api.spotify.com/v1/search?q=" + $scope.search + "&type=track&limit=50")
      .then(function(response) {
        console.log(response.data.tracks.items);
        $scope.isTheDataLoaded = true;
        $scope.details = response.data.tracks.items;
        mixpanel.track('Search Term', {'Song': document.getElementById("search-term").value});
      });
  }

});
