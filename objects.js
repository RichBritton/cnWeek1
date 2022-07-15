


let day = "thursday";
let alarm = "";

const alarmObject =
{
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am",
}

if (day == "saturday" || day == "sunday") alarm = alarmObject.weekendAlarm;
else alarm = alarmObject.weekdayAlarm;

console.log(`it's ${day}, ${alarm}`);


//activity 1
const person =
{
    name:"richard",
    age:27,
    sayHi()
    {
        return(`hello my name is ${this.name}`)
    }
}

console.log(person.sayHi());

//activity 2
const pet =
{
    name:"taylor",
    type:"dog",
    age:2,
    colour:"black",

    eat()
    {
        return `${pet.name} is eating`;
    },
    drink()
    {
        return `${pet.name} is drinking`;
    }
}

console.log(pet.drink());


//activity 3
const coffeShop =
{
    branch:"starbucks",
    drinksWithPrices:[],
    foodWithPrices:[],
    drinksOrdered(yourOrder)
    {

    },
    foodOrdered()
    {

    }
}

console.log(coffeShop.drinksOrdered());