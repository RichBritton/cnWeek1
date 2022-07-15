

let name = "richard"
let age = 27
let favDrink = "iced coffee";
//console.log(`${name}, aged ${age}, favourite drink is ${favDrink}`)



//activity 3
let date = new Date();
let birthday = new Date(Date.UTC(2022,9,13));

let timeDif = (birthday-date);
let dayDif = Math.ceil(timeDif / (1000 * 60 * 60 * 24)); 

//console.log(`days until birthday: ${dayDif}`);



//activity 4
let line1 = "   |   |   ";
let line2 = line1 + "\n" + "-".repeat(11) + "\n" + line1;
let values = ["x","o"," ","x","x"," ","o"," "," "];


console.log(line1);
console.log(` ${values[0]} | ${values[1]} | ${values[2]}`);
console.log(line2);
console.log(` ${values[3]} | ${values[4]} | ${values[5]}`);
console.log(line2);
console.log(` ${values[6]} | ${values[7]} | ${values[8]}`);
console.log(line1);

