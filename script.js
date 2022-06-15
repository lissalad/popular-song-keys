const data = require("./songs.json");

function getKeyCounts(data) {
  let keyCount = {
    "c": 0,
    "cSharp": 0,
    "d": 0,
    "eFlat": 0,
    "e": 0,
    "f": 0,
    "fSharp": 0,
    "g": 0,
    "gSharp": 0,
    "a": 0,
    "bFlat": 0,
    "b": 0
  };

  let key;

  for(let song=0; song<data.length; song+=1) {
    key = Object.keys(keyCount)[data[song]["key"]];
    // console.log(key);
    keyCount[key] += 1;
  }

  return keyCount;
}

console.log(getKeyCounts(data));
// correct BUT kaggle's key graph uses ten columns? combines first and last two?