var message = "bottles of beer on the wall"

/* console.log(message + ' ' + 1);
console.log(message + ' ' + 2);
console.log(message + ' ' + 3);
console.log(message + ' ' + 4);
console.log(message + ' ' + 5);
console.log(message + ' ' + 6);
console.log(message + ' ' + 7);
console.log(message + ' ' + 8); */

/* var number = 99;
var message2 = 'bottles of beer, take one down pass it around'
var message3 = "bottle of beer on the wall"
var message4 = 'bottle of beer, take one down pass it around'

// Demonstrates how to use a loop
while(number >= 0){
    console.log(number + ' ' + message + ' ' + number + " " + message2 + ' ' + number + ' ' + message);
    number--;
}*/

for(var num = 99; num > 0; num--){
    console.log(num + " Bottles of beer on the wall");
    console.log(num + " bottles of beer");
    console.log("Take one down, pass it around");
    console.log((num - 1) + " bottles of beer on the wall");
    if( (num - 1) != 0 ) {
        console.log((num - 1) + " bottles of beer on the wall");
    } else{
        console.log("No more bottles of beer on the wall")
    }
}