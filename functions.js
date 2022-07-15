


function addup(num1, num2)
{
    return num1+num2;
}

console.log(addup(10,15));



//activity 2
let orderCount=0;

function takeOrder(topping1,topping2)
{
    orderCount+=1;
    console.log(`order ${orderCount}: pizza with ${topping1} and ${topping2}`);
}

takeOrder("ham","cheese");
takeOrder("cheese","pepperoni");



//activty 3
function withdrawCash(pin, amount)
{
    if (pin == "1111")
    {
        let balance = 100;
        if (amount <= balance)
        {
            balance -=amount;
            console.log(`${amount} withdrawn, new balance: ${balance}`);
        }
        else
        {
            console.log("withdraw amount exceeds balance");
        }
    }
    else
    {
        console.log("incorrect pin");
    }
}

withdrawCash(1111,30);
