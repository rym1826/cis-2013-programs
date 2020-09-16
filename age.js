
var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("Enter your age"));
     floatDays = parseFloat(floatAge*365.25).toFixed(2);
     floatMonths = parseFloat(floatAge*12).toFixed(2);
     intWeeks = parseInt(floatDays/7).toFixed(2);
     intFortnights = parseInt(floatDays/14).toFixed(2);
     alert(" your age is " +  floatAge  + " your age in days is " +  floatDays  + " your age in months is " +  floatMonths  + " your age in weeks is " +  intWeeks  + " your age in fortnights is " +  intFortnights );