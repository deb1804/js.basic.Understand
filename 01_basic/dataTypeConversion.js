let score=33
let score2="34abc"
let score3=null
let valueInNumber =Number(score2)//all starting datatypes should start from caps.
let valueInNumber2 =Number(score3)
console.log(typeof score);
console.log(typeof(score));
console.log(typeof score2);
console.log(typeof(score2));
console.log(typeof valueInNumber);//converts in number but actually its an String
                                  //dont rely on numbers 
console.log(valueInNumber);

console.log(typeof valueInNumber2);//converts in number but actually its an String
                                  //dont rely on numbers 
console.log(valueInNumber2);//null is coneverted to zero,undefined is converted to NaN
                            //T&F ---> 1&0 respectively ; string also NaN.
/*
  "33"-->33
  "33abc"-->NaN
  true=>. 1
*/
let isLoggedIn=""
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
/*
 in case of boolean:
 when empty String is there it bcoms False
 when String is there it bcoms True
 1=>true
*/
let num =33
let stringNum=String(num)
console.log(stringNum);
console.log(typeof stringNum);


