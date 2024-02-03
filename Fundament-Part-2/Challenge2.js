

const calcTip=(bill)=>{

if(bill>=50&&bill<=300)
return bill+bill*(15/100);
return bill+bill*(20/100);
}


const tip=[calcTip(555),calcTip(100),calcTip(44),calcTip(125)];
console.log(tip);