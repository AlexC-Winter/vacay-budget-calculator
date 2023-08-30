var tripInfoButton = document.querySelector(".trip-info");
//console.log(tripInfoButton);
var dailyBudget = document.querySelector(".daily-budget");
//console.log(dailyBudget);

var tripInfo = function() {
    var totalBudget = Number(prompt("What is your total budget?"));
    var accommodation = Number(prompt("What are you accommodation costs?"));
    var numDays = Number(Prompt("How many days does your trip last?"));
    calculateDailyBudget(totalBudget)
    calculateDailyBudget(accommodation)
    calculateDailyBudget(numDays)
}

var calculateDailyBudget = function() {
    var daily = ((totalBudget - accommadation)/numDays).toFixed(2);
    dailyBudget.innertext(`you can spend $${daily} a day on food and fun!`)
}

tripInfoButton.addEventListener("click", function() {
    calculateDailyBudget()
})
