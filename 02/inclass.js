var age = 37;
var school = "You cannot do much... but got to school";
var drive = "You can drive"
var vote = "You can vote";
var drink = "You can drink alcohol";
var rent = "You can rent a car";
var pres = "You can run for president";
var ss = "You can run for president";

if (age < 16) {
  console.log(school);
} else if ((age >= 16) && (age < 18)) {
  console.log(drive)
} else if ((age >= 18) && (age < 21)) {
  console.log(drive + " & " + vote);
} else if ((age >= 21) && (age < 25)) {
  console.log(drive + " & " + vote + " & " + drink);
} else if ((age >= 25) && (age < 35)) {
  console.log(drive + " & " + vote + " & " + drink + " & " + rent);
} else if ((age >= 35) && (age < 62)) {
  console.log(drive + " & " + vote + " & " + drink + " & " + rent + " & " + pres);
} else if (age >= 62) {
  console.log(drive + " & " + vote + " & " + drink + " & " + rent + " & " + pres + " & " + ss);
}