let mass1=78;
let height=1.69;
let mass2=92;
let height2=1.95;
let Bmi1=mass1/height**2/(height*height);
let BMI2=mass2/height2**2/(height2*height2)
let HigherBMI=(Bmi1>BMI2);
console.log(HigherBMI);
if(HigherBMI==true)
console.log("John");
else
console.log("Mark");