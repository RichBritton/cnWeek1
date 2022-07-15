


//random number
var rngMax = 10;
console.log("random number between 0 and "+rngMax.toString()+": "+ Math.round(Math.random()*rngMax));


//grid log
let line1 = "   |   |   \n";
let line2 = "-".repeat(11) + "\n";
console.log((line1.repeat(3) + line2).repeat(2) + line1.repeat(3));


//display character in string
console.log("all around the world"[7].toUpperCase());