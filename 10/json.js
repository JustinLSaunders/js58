var myJSON = '{"hello": "world", "name": "Glen", "foods": [ {"name": "pizza"}, {"name": "fries"} ]}';

var parsedJSON = JSON.parse(myJSON);
console.log(parsedJSON);
console.log(typeof myJSON);
console.log(typeof parsedJSON);
console.log(parsedJSON.foods[1].name )

console.log("All Keys: ", Object.keys(parsedJSON));

var myJSON2 = '{"address1", "address2", "city", "rooms": [{"bedroom", "kitchen", "bathroom"}]}';