app.controller('ttCtrl', ($scope, $window, $http, $rootScope, $location) => {
  $scope.teams = ['chennai', 'rcb', 'dd', 'kkr', 'kxip', 'rr', 'srh'];

  $scope.sent = false;
  $scope.submit = function() {
    $scope.sent = true;
    let data = {team1: $scope.p1, team2: $scope.p2, stadium: $scope.stadium};
    //   console.log(data);
    $http.post('/tt', data)
        .then(
            response => {
              $scope.sent = false;
              // $rootScope.safeApply(function() {
              $scope.result = response.data.data;
              $scope.team1 = $scope.result.team1;
              $scope.team2 = $scope.result.team2;
              console.log($scope.team1, $scope.team2);
              // });
              // console.log($scope.result);
            },
            error => {
              console.log(error);
            });
  };


  $http.post('/stadiums')
      .then(
          response => {
            $scope.stadiums = response.data.data;
            // console.log($scope.stadiums);
          },
          error => {
            console.log(error);
          });
});