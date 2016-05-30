var app = angular.module("countdown", [])
.controller("MainCtrl", function($scope, $interval) {
  $scope.getTime = function() {
    var oneDay = 60 * 60 * 24 * 1000;
    var oneHour = 60 * 60 * 1000;
    var oneMinute = 60 * 1000;
    var now = Date.now();
    var kickoff = new Date(2016, 8, 1).getTime() + (oneHour * 13);
    var totalSeconds = kickoff - now;

    var daysLeft = Math.floor(totalSeconds / oneDay);
    var daysRemainder = totalSeconds % oneDay;
    var hoursLeft = Math.floor(daysRemainder / oneHour);
    var hoursRemainder = daysRemainder % oneHour;
    var minutesLeft = Math.floor(hoursRemainder / oneMinute);
    var minutesRemainder = hoursRemainder % oneMinute;
    var secondsLeft = Math.floor(minutesRemainder / 1000);

    var timeLeft = {
      daysLeft: (daysLeft < 10 ? '0' + dayLefts : daysLeft),
      hoursLeft: (hoursLeft < 10 ? '0' + hoursLeft : hoursLeft),
      minutesLeft: (minutesLeft < 10 ? '0' + minutesLeft : minutesLeft),
      secondsLeft: (secondsLeft < 10 ? '0' + secondsLeft : secondsLeft)
    };

    return timeLeft;
  };
  $scope.currentTime = $scope.getTime();
  $interval(function(){
    $scope.currentTime = $scope.getTime();
    console.log($scope.currentTime);
    },
  1000);
});
