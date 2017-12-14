app.controller('ppCtrl', ($scope, $window, $http, $rootScope, $location) => {
  $scope.sent = false;
  $scope.submit = function() {
    $scope.sent = true;
    let data = {
      person1: $scope.p1,
      person2: $scope.p2,
      stadium: $scope.stadium
    };
    // console.log(data);
    $http.post('/pp', data)
        .then(
            response => {
              $scope.sent = false;
              $rootScope.safeApply(function() {
                $scope.result = response.data.data;
              });
              console.log($scope.result);
            },
            error => {
              console.log(error);
            });
  };

  $http.post('/batsmen')
      .then(
          response => {
            $scope.batsmen = response.data.data;
            // console.log($scope.batsmen);
          },
          error => {
            console.log(error);
          });

  $http.post('/bowlers')
      .then(
          response => {
            $scope.bowlers = response.data.data;
            // console.log($scope.bowlers);
          },
          error => {
            console.log(error);
          });

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