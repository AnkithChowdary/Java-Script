// Exact reverse of dotSpreader it packs into an array

const an=['ank',9,4];
const [x,...other]=an;
console.log(other);
console.log(x);


//functions
const add=function(...number){
  let sum=0;
  for(let i=0; i<number.length;i++)
  sum+=number[i];

  console.log(sum);


}

const array=[4,6,7,2,3,4];
add(...array);


const pm = [prompt("First"), prompt("Second"), prompt("Third")];
console.log(pm);