function getTime(){
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
    daysLeft: daysLeft < 10 ? '0' + dayLefts : daysLeft,
    hoursLeft: hoursLeft < 10 ? '0' + hoursLeft : hoursLeft,
    minutesLeft: minutesLeft < 10 ? '0' + minutesLeft : minutesLeft,
    secondsLeft: secondsLeft < 10 ? '0' + secondsLeft : secondsLeft
  }

  return timeLeft;
}

var Card = React.createClass({
  getInitialState: function(){
    return (getTime())
  },
  componentDidMount: function(){
    var time = this;
    setInterval(function(){
      time.setState(getTime());
    }, 1000);
  },
  render: function(){
    return (
      <div className='col-xs-6 col-xs-offset-3 col-md-8 col-md-offset-2 timer'>
        <h2>{this.state.daysLeft} :</h2>
        <h2>{this.state.hoursLeft} :</h2>
        <h2>{this.state.minutesLeft} :</h2>
        <h2>{this.state.secondsLeft}</h2>
      </div>
    )
  }
});

React.render(
  <Card className='window'/>,
  document.getElementById('root')
);
