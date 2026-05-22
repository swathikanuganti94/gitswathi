const apples = 50;
const speed = 80;
const loginattempt = 5;
const text = "this is swathi"

if (apples > 50) {
    console.log("with in the range")
}
console.log("not in the range.");

if (speed > 70) {
    console.log("slow down speed")
}
console.log(`your speed is almost ${speed}`)

if (loginattempt >= 5) {
    console.log("your account is locked")
}

if (text.length > 10) {
    console.log("in the range")
}
console.log(`your text number is ${text.length}`)

const ismanager = true;
const isemployee = true;

if (ismanager && isemployee) {
    console.log("both are in same team")
}
console.log("not in same team")

if (isemployee || ismanager) {
    console.log("different roles")
}

const fruits = ["banana", "apple", "mango"]
{
    if (fruits.includes("apple"))
        console.log("in the list")
}
console.log("check the cart for shopping")

const currentScore = 70;
const highScore = 50;

if (currentScore > highScore) {
    console.log(`you crossed highscore ${highScore} in this level`)
}

const isloggedin = true;
const ismember = true;
if (isloggedin && ismember) {
    console.log("user is having subscription")
}

const newUser = "swathi";
if (newUser.length < 7) {
    console.log("user name is too short")
}