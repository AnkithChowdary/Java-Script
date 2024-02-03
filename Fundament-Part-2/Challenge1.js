


const calcAverage=(score1,score2,score3)=>(score1+score2+score3)/3;
const avgDolphins=calcAverage(44,23,49);
const avgKoalas=calcAverage(65,54,49);


const checkWinner=function(avgDolphins,avgKoalas){
if(avgDolphins=2*avgKoalas)
return 1;
return 2;
}
const winner=checkWinner(avgDolphins,avgKoalas);

if(winner==1)
console.log("Dolphins");
else
console.log("Koalas");


