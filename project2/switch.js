const pencolor = "black"

switch (pencolor) {
    case "blue":
        console.log("blue")
        break;
    case "red":
        console.log("red")
        break;
    case "green":
        console.log("green")
        break;
    case "pink":
        console.log("pink")
        break;
    default: console.log("nocolor")

}

const fruit = "banana"
switch (fruit) {
    case "apple":
    case "mango":
    case "banana":
        console.log(`theis fruits is sweet we have ${fruit} fruit`);
        break;
    case "lemon":
        console.log("this is sour");
        break;
    default: console.log("no fruits");

}

const stationarItem = "notebook";
let itemtax = 0;

switch (stationarItem) {
    case "erasor":
        itemtax = 2;
        break;
    case "notebook":
        itemtax = 5;
        break;
    default:
        itemtax = 0
}
console.log(`the calculated item for ${stationarItem} is ${itemtax}`)

const fruitbowl = ["orange", "apple"]
let i = 0
switch (fruitbowl[0]) {
    case "orange":
        break;
    case "apple":
        break;
    default: console.log("no fruits")
}
console.log(`the name of the fruits is ${fruitbowl[0]} in a position of ${i + 1}`)