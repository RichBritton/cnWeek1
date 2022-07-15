

//activity 1
let age = 27;
let country = "uk";

if (country == "uk" && age >=17) console.log("can be served");
else console.log("can not be served");



//activity 2
let topping = "pineapple";

switch(topping)
{
    case "ham":    
    case "pepperoni":    
        console.log(`I don't mind ${topping} on pizza`);
        break;

    case "pineapple":     
        console.log(`${topping} shouldn't be on pizza `);
        break;
}



//activity 3
let password = "pw";
if (password.length>= 8) console.log(password);
else console.log("password too short");

let num = 7;
if (num%3==0 || num%5==0) console.log(`${num} is divisible by 3 or 5`);
else console.log(`${num} is not divisible by 3 nor 5`);



//activity 4
num = 15;
let output = "";
if (num%3==0) output += "fizz";
if (num%5==0) output += "buzz";

if (output == "") output=num;
console.log(output);



//activity 5
num = 1221;

let numString = num.toString();
let numArray = numString.split("");
numArray.reverse();
let backwardNum = numArray.join("");


if (backwardNum == numString) console.log(`${num} is a palindrome`);
else console.log(`${num} is not a palindrome`);



//activity 6
let twentyFourHourTime = 17;
let placeOfWork = "starbucks";
let townOfHome = "liverpool";

let twelveHourTime=twentyFourHourTime;
let amOrPm = "am";
if (twelveHourTime >= 12) 
{
    amOrPm="pm";
    twelveHourTime-=12;
}
if (twelveHourTime==0) hourOfDay=12;

output = `it's ${twelveHourTime} ${amOrPm}, `;
if (twentyFourHourTime >= 18 || twentyFourHourTime <= 7) output += `i'm at home in ${townOfHome}`;
if (twentyFourHourTime==8) output += `i'm commuting to ${placeOfWork}`;
if (twentyFourHourTime==17) output += `i'm commuting back home to ${townOfHome}`;
if (twentyFourHourTime >= 9 && twentyFourHourTime <= 16) output +=`i'm currently working in ${placeOfWork}`;

console.log(output);


//activity 7
let characters = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

for (let i = characters.length; i > 0; i--)
{
    let x = characters[i];

    if (x=="a"||x=="e"||x=="i"||x=="o"||x=="u")
    {
        console.log(`the index of the last vowel is ${i}`);
        break;
    }
}

//activity 8
let word = "yearly"
if (word[0] == word[word.length-1]) console.log(`the first and last letters in ${word} are the same`);
else console.log(`the first and last letters in ${word} are not the same`);

//activity 9
let num1 = 3;
let num2 = 4;
let sum = num1+num2;

if (sum%2==0) console.log(`${num1} + ${num2} = ${sum}, the result is even`);
else console.log(`${num1} + ${num2} = ${sum}, the result is odd, multiplying them together results in ${num1*num2}`);