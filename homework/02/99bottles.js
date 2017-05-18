for (bottleCount = 99, bottleNext = bottleCount - 1; bottleCount >= 1; bottleCount --, bottleNext --) {
  if (bottleCount > 1) {
    var lyrics = (bottleCount + " bottles of beer on the wall, " + bottleCount + " bottles of beer. You take one down, pass it around. " + bottleNext + " bottles of beer on the wall.");
    console.log(lyrics);
  } else if (bottleCount = 1) {
    var lyrics = (bottleCount + " bottle of beer on the wall, " + bottleCount + " bottle of beer. You take one down, pass it around. No bottles of beer on the wall.");
    console.log(lyrics);
  }
}