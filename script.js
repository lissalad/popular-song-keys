const data = require("./songs.json");

function getKeyCounts(data) {
  let keyCounts = {
    "c": 0,
    "g": 0,
    "d": 0,
    "a": 0,
    "e": 0,
    "b": 0,
    "f#": 0,
    "db": 0,
    "ab": 0,
    "eb": 0,
    "bb": 0,
    "f": 0,
  };
  
  let key;
  const keySignatures = ["c", "db", "d", "eb", "e", "f", "f#", "g", "ab", "a", "bb", "b"];

  for(let song=0; song<data.length; song+=1) {
    key = data[song]["key"];
    // console.log(key);
    keyCounts[keySignatures[key]] += 1;
  }

  // for(let k=0; k<orderedCounts.length; k+=1) {
  //   key = Object.keys(keyCount)[data[song]["key"]];
    
  // }

return keyCounts;


}

console.log(getKeyCounts(data));
// correct BUT kaggle's key graph uses ten columns? combines first and last two?