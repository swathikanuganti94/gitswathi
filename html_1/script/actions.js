var x = 6;

/**
 * Changes the color of the song element to blue and logs the value of x.
 */
function changeColor() {
  document.getElementById("song").style.color="blue";
  // comment. This will display the message on console.
  console.log(x); 
}

/**
 * Changes the color of the song element to orange on mouse over and logs the value of x.
 */
function changeColorOnMouseOver() {
  document.getElementById("song").style.color="orange";
  // comment. This will display the message on console.
  console.log(`value of x is ${x}`); 
}