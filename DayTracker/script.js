var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var d = new Date();
d = d.getDay();

var currDay = document.getElementById(daysOfTheWeek[d]);
currDay.className += " selected";