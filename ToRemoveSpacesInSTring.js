//To Remove Spaces in a string
let a="  How are you  ";
console.log(a)
let b=a.trim();  // removes unwanted spaces
console.log(b)    // Both are same
console.log(a.trim())  // Both are same
console.log(a.lastIndexOf("How"))   // Prints last index of string
console.log(a.lastIndexOf("you"))
console.log(a.lastIndexOf("You"))  // Prints -1 because You don't exist in the string