// Create variables for the welcome message
const greeting = "Greetings ";
const customerName = "Iskandar";
const message = ", welcome to our store! ";
// Concatenate the three variables above to create the welcome message
const welcomeMessage = greeting + customerName + message;

// Create variables to hold details about the sign
const sign = "iCreator LLC";
let tiles = sign.length;
let subTotal = tiles * 10;
let shipping = 7;
let grandTotal = subTotal + shipping;

// Get the element that has an id of greeting
const elGreeting = document.getElementById("greeting");


// Replace the content of that element with the personalized welcome message
elGreeting.textContent = welcomeMessage;

// Get the element that has an id of userSign then update its contents
const elUserSign = document.getElementById("userSign");
elUserSign.textContent = sign;

// Get the element that has an id of tiles then update its contents
const elTiles = document.getElementById("tiles");
elTiles.textContent = tiles;

// Get the element that has an id of subTotal then update its contents
const elSubTotal = document.getElementById("subTotal");
elSubTotal.textContent = "$" + subTotal;

// Get the element that has an id of shipping
const elShipping = document.getElementById("shipping");
// Get the element that has an id of shipping then update its contents

elShipping.textContent = "$" + shipping;

// Get the element that has an id of grandTotal then update its contents
const elGrandTotal = document.getElementById("grandTotal");
elGrandTotal.textContent = "$" + grandTotal;

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML instead of textContent, but note the security issues on p228-231

In the first print run, line 33-34 repeated elSubTotal (rather than elShipping).
This was fixed in later print runs and in this code sample.
*/