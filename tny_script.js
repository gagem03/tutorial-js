"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Gage Macdonald
   Date:   October 2nd, 2025

*/

// Display current date & time
document.getElementById("dateNow").innerHTML = "m/d/yyyy<br />h:m:s";

// Display the time left until New Years Eve Bash
document.getElementById("days").textContent = "dd";
document.getElementById("hrs").textContent = "hh";
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";

// Run the clock every second
setInterval(() =>{
   runClock();
}, 1000);

// Function to run clock
function runClock(){
   // Store the current date & time
   var currentDate = new Date();

   // Separate time and date components from date object
   var dateStr = currentDate.toLocaleDateString();
   var timeStr = currentDate.toLocaleTimeString();
   document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

   // Calculate the days left until January 1st (of next year)
   var newYear = new Date("January 1, 2025");
   var nextYear = currentDate.getFullYear() + 1;
   newYear.setFullYear(nextYear);

   // The denominator converts the difference to actual days left
   var daysLeft = (newYear - currentDate)/(1000*60*60*24);

   // Display the time left until New Years Eve Bash
   document.getElementById("days").textContent = Math.floor(daysLeft);

   // Calculate the hours left in the current day
   var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

   // Calculate the minutes left in the current day
   var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;

   // Calculate the seconds left in the current minute
   var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

   // Display the actual time left
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.floor(secsLeft);
}
