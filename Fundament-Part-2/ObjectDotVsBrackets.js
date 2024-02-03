const ankith={
  Name:'Ankith',
  Profession:'Student',
  Friends:['Bhomraj','Shanmukh','David'],
  BirthYear:1977,
calc:function(){
  return 2055-this.BirthYear;
}

}


console.log(ankith.calc());
console.log(ankith['calc']());



