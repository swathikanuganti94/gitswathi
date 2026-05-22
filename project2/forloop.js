const pentray = ["pen", "pencil", "sharpner", "marker", "eraser"]

for (let i = 0; i < pentray.length; i++) {
    console.log(`ppentray item ${[i + 1]} - ${pentray[i]}`)

    if (pentray[i] == "marker") {
        break;
    }
}

const fruits = ["mango", "rotten mango", "apple", "rotten orange"]

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].includes("rotten")) {
        //console.log("skip the rotten fruits")
        continue;
    }
    console.log(`${fruits[i]}`)
}

const pens = ["blue pen", "red pen", "green pen"]

for (let i = 0; i < pens.length; i++) {
    if (pens[i].includes("red pen")) {
        continue;
    }
    console.log(`total pens ${pens[i]} ${[i]}`)
}

const penbox = ["blue pen", "red pen", "green pen"]

for (let i = 0; i < penbox.length; i++) {
    console.log(`total pens ${penbox[i]} ${i}`)
    if (penbox[i] == "red pen") {

        break;
    }
}


const inbox = ["letter1", "letter2", "letter3"];
if (inbox.length === 0) {
    console.log("items not available")
} else {
    console.log("items are available")
    for (let i = 0; i < inbox.length; i++)
        console.log(`items available ${inbox[1]}`)
}

let prices = [20, 50, 60, 90];
console.log("old prices", prices)

for (let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] + 10;
}
console.log("new prices:", prices)

const frcount = ["apple", "mango", "orange", "mango", "orange", "mango"]
let mangocount = 0;
for (let i = 0; i < frcount.length; i++) {
    if (frcount[i] == "mango") {
        mangocount++
    }
} console.log(`fruit name ${mangocount}`)

const itemcost = [10, 20, 30, 40];
let totalcost = 0;
for (let i = 0; i < itemcost.length; i++) {
    totalcost = totalcost + itemcost[i]

} console.log(`totalcose ${totalcost}`)

const container = ["sharp", "sharp", "broken", "sharp", "broken"]
let brokencount = 0
for (let i = 0; i < container.length; i++) {
    if (container[i] == "broken") {
        brokencount++;
    }

} console.log(`we have total ${brokencount} of tems`)

const totalmarks = [90, 50, 60, 70];
let totalcount = 0

for (let i = 0; i < totalmarks.length; i++) {
    totalcount = totalcount + totalmarks[i]
} console.log(`your totalcount is ${totalcount}`)

let fruitcounter = ["apple", "mango", "banana"]
for (let i = 0; i < fruitcounter.length; i++) {
    fruitcounter[i] = `${i + 1} . Fresh ${fruitcounter[i]}`
} console.log(fruitcounter)

const stationarycost = [40, 10, 30, 100, 200]
let totalbill = 0;
for (let i = 0; i < stationarycost.length; i++) {
    if (stationarycost[i] > 40) {
        totalbill = totalbill + stationarycost[i]
    }
} console.log(totalbill)

const ingredient = ["Apple", "mango"]

if (ingredient.length == 0) {
    console.log("no items found")
} else {
    console.log("items found")

    for (let i = 0; i < ingredient.length; i++) {

        console.log(`${i + 1}${ingredient[i]}`)
    }
}

