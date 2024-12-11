let price = 1.87

let cid = [
['PENNY', 1.01],
['NICKEL', 2.05],
['DIME', 3.1],
['QUARTER', 4.25],
['ONE', 90],
['FIVE', 55],
['TEN', 20],
['TWENTY', 60],
['ONE HUNDRED', 100]
]

let cashFromElement = document.getElementById("cash")
let cash = cashFromElement.value

let change = cash - price
let changeDue = change

if(cash<price){
    alert("Customer does not have enough money to purchase the item")
}
else if(cash == price){
    alert("No change due - customer paid with exact cash")
}

while(changeDue == 0){
    if(changeDue>=100){
        changeDue -= 100
        cid[8][1] -= 100
    }
    else if (changeDue>20){
        changeDue -= 20
        cid[7][1] -= 20
    }
    else if (changeDue>10){
        changeDue -= 10
        cid[6][1] -= 10
    }
    else if (changeDue>5){
        changeDue -= 5
        cid[5][1] -= 5
    }
    else if (changeDue>1){
        changeDue -= 1
        cid[4][1] -= 1
    }
    else if (changeDue>0.25){
        changeDue -= 0.25
        cid[3][1] -= 0.25
    }
    else if (changeDue>0.1){
        changeDue -= 0.1
        cid[2][1] -= 0.1
    }
    else if (changeDue>0.05){
        changeDue -= 0.05
        cid[1][1] -= 0.05
    }
    else if (changeDue>0.01){
        changeDue -= 0.01
        cid[1][1] -= 0.01
    }
}
