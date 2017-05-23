// // We have given you some starter code where we can grab the latest bitcoin trading price. Open the starter code. Based on the US Dollar amount that a user inputs, we should print out the corresponding value in bitcoin based on the last trading price.

var btcRate = 2023.98;

function convertBTC() {
  var usdValue = valueForEl("usd");
  document.getElementById("btc").value = convertToBTC(usdValue);
}

function convertToBTC(dollarAmt) {
  return dollarAmt / btcRate;
}

function valueForEl(id) {
  return document.getElementById(id).value;
}
