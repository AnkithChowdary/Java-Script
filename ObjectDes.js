const ankithDetails={
Name:'Ankith',
Year:2005,
PhoneNum:8019836715,
Friends:['Bhomraj','David','Karan'],
 ageCal:function (){
    return 2024-this.Year;
 }
};

//We can store to single entities
const {Name:YoName,
  Age:A,
  PhoneNum:Num,
  Friends:bestFriends}=ankithDetails;
console.log(YoName);
console.log(bestFriends);
// Giving default value to array
const {Friends=[],Name:N}=ankithDetails;
console.log(Friends,N);

//Mutating Variables
let a=11;
let b=4;
// const obj={a:54,a:4};
// ({a:4,b:7}=obj);
console.log(a,b);
