for (bottleCount = 99, nextCount = bottleCount - 1; bottleCount >= 1; bottleCount --, nextCount --) {
  if (bottleCount > 2) {
    var lyrics = (bottleCount + " bottles of beer on the wall, " + bottleCount + " bottles of beer. You take one down, pass it around. " + nextCount + " bottles of beer on the wall.");
  } else if (bottleCount == 2) {
    var lyrics = (bottleCount + " bottles of beer on the wall, " + bottleCount + " bottles of beer. You take one down, pass it around. " + nextCount + " bottle of beer on the wall.");
  } else if (bottleCount == 1) {
    var lyrics = (bottleCount + " bottle of beer on the wall, " + bottleCount + " bottle of beer. You take one down, pass it around. No bottles of beer on the wall.");
  } 
  console.log(lyrics)
}