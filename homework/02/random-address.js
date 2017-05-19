addressArray = [
  streets = ["Broadway", "Main Street", "Fifth Avenue", "Jefferson Avenue", "JS Way"],

  cities = ["New York", "Los Angeles", "Walla Walla", "Kalamazoo", "Albuquerque", "Detroit", "Chicago", "Minneapolis", "Orlando"],

  states = ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "FM", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MH", "MI", "MN", "MO", "MP", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "PW", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"] //includes territories and commonwealths

  ]

var streetNumber = Math.floor((Math.random() * 9999) + 1);
var street = addressArray[0][Math.floor(Math.random() * (streets.length))];
var city = addressArray[1][Math.floor(Math.random() * (cities.length))];
var state = addressArray[2][Math.floor(Math.random() * (states.length))];
var zip = Math.floor((Math.random() * 99950) + 10001);
var apt = Math.floor((Math.random() * 2) + 1);
var aptNumber = Math.floor((Math.random() * 50) + 1);

if (apt == 2) {var address = streetNumber + " " + street + ", Apt. " + aptNumber + ", " + city + ", " + state + ", " + zip;
} else if (apt == 1) {var address = streetNumber + " " + street + ", " + city + ", " + state + ", " + zip;}

console.log(address);
console.log(apt);