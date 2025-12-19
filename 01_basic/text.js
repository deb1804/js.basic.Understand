console.log("Deb")
console.log("Debasish")
console.log("2">1);
console.log("02">1);
//this should not be y\true bcoz we comparing an string to integer
// so here it automatically convert the string to integer 
//to avoid that we need to rember for this type of error typeScript 
//was devloped it block internally conversion of datatype while comparing
console.log(null>0);
console.log(null==0);
console.log(null>=0);//wtf true  illogocal bcoz in this point taking null as 0. null sometimes converting to 0 or NaN.
//strict check '==='
console.log("2"===2);//it also check DataTypes.


