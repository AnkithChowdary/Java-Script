const person1={
Name:'Mark Miller',
Mass:60,
height:6,
calcBMI:function(){
  const BMI=this.Mass/(this.height*this.height);
  return BMI;
}
}

const person2={
  Name:'John Smith',
  Mass:90,
  height:8,
  calcBMI:function(){
    const BMI=this.Mass/(this.height*this.height);
    return BMI;
  }
}
const bmi1=person1.calcBMI();
const bmi2=person2.calcBMI();
if(bmi1>bmi2)
console.log(person1.Name+' '+bmi1);
else
console.log(person2.Name+' '+bmi2);
