// return any given day's number of calories consumed
// it will accept an argument of `day` and return a number 
function inputCaloriesByDay(day) {
    if (day === 'Monday') {
      return 3500;
    } else if (day === 'Tuesday') {
      return 1500;
    } else if (day === 'Wednesday') {
        return 1800;
    } else if (day === 'Thursday') {
        return 2300;
      } else if (day === 'Friday') {
        return 2400;
      } else if (day === 'Saturday') {
        return 1500;
      } else if (day === 'Sunday') {
        return 1500;
      } else {
        return 'Please choose valid day';
      }
}
    // returns the value of total calories consumed in a week
    function getTotalCalories() {
      return inputCaloriesByDay('Monday') +
      inputCaloriesByDay('Tuesday') +
      inputCaloriesByDay('Wednesday') +
      inputCaloriesByDay('Thursday') +
      inputCaloriesByDay('Friday') +
      inputCaloriesByDay('Saturday') + 
      inputCaloriesByDay('Sunday');
    }
    
    // return value of total ideal calories consumed in a week
    function getIdealCalories() {
      var idealDailyCalories = 2000;
      return idealDailyCalories * 7;
    }
    
    // check if you ate equal to, more or less than you should have and
    // respond with what the person should do more of next week
    function calculateHealthPlan() {
      var actualCalories = getTotalCalories();
      var idealCalories = getIdealCalories();
      if (actualCalories === idealCalories) {
        return 'You ate just the right amount!';
      }
      if (actualCalories > idealCalories) {
        return 'Time to head to the gym!';
      } else {
        return 'Time for seconds!';
      }
    }
    
    console.log(calculateHealthPlan());
    