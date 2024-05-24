//literal method
const a=['ankith','sam','karan'];
// using new keyword
const b=new Array('ankith','sam','karan');
console.log(a);
console.log(a[0]);
console.log(a.length);             // Gives the array length
const an=new Array(99,12,13);
console.log(an);
// Array inside an array
const k=[a,'chowdary',1900-25];
k.push(54);                    //Adds to the end
k.unshift('ankith');
const popped=k.push();         //Removes last element
console.log(popped);
console.log(k);
console.log(k.indexOf(54));
console.log(k.indexOf('ankith'));   //returns index
                                  // It is not presnt returns -1

k.shift();
console.log(k);//removes the first element
console.log(k.includes(ankith)); //Returns false 

console.log(k.includes('ankith'));
