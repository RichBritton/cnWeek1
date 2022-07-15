


//activity 1
let films = ["eraserhead","green room","die hard"];
films.push("shaun of the dead","requiem for a dream");

for (let i = 0; i < films.length; i++)
{
    console.log(films[i]);
}


//activity 2
let rng = [];
for (let i = 0; i < 6; i++)
{
    rng[i] = Math.floor(Math.random()*50);
    rng[i] += 1;
}
console.log(`6 random numbers between 1 and 50: ${rng}`);


//activity 3
let nums = [];
for (let i = 9; i >= 0; i--)
{
    nums.push(i);
}
console.log(nums);



//activity 4
films = ["eraserhead","green room","die hard"];

for (let i = 0; i < films.length; i++)
{
    let returnString = (i+1).toString() + ": "+ films[i];

    if (i == 2) 
    {
        if (films[i] != "ghostbusters") returnString += ", this ain't ghostbusters";
        else returnString += ", it's ghostbusters";
    }

    console.log(returnString);
}


//activity 5
for (let i = 0; i < 6; i++)
{
    let ranNum = Math.floor(Math.random()*30) + 1;
    if (ranNum % 7 == 0) console.log(`random number ${i+1}: ${ranNum}, is divisible by 7`);
    else console.log(`random number ${i+1}: ${ranNum}, is not divisible by 7`);
}


//activity 6
bobsFollowers = ["mike","dave","becky","john"];
hannahsFollowers = ["becky","mike","nina","james"];

for (let b = 0; b < bobsFollowers.length; b++)
{
    for (let h = 0; h < hannahsFollowers.length; h++)
    {
        if (bobsFollowers[b] == hannahsFollowers[h])
        {
            console.log(`${bobsFollowers[b]} follows both hannah and bob`);
            break;
        }
    }
}