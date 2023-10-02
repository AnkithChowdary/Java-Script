//To Remove Spaces in a string
let a="  How are you  ";
console.log(a)
let b=a.trim();  // removes unwanted spaces
console.log(b)    // Both are same
console.log(a.trim())  // Both are same
console.log(a.lastIndexOf("How"))   // Prints last index of string.
console.log(a.lastIndexOf("you"))
console.log(a.lastIndexOf("You"))  // Prints -1 because "You" don't exist in the string.
console.log(a.includes("are"))  // Prints true
console.log(a.includes("k"))   // Prints false "K" don't exist in the string.
console.log(a.slice(4,7))    // printts from index 4 to 6 excluding last one(7) prints w a