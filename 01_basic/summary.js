/*
  primitive of 7 types: //call by value. changes made it will be in copy 
  String,Number,Boolean,Empty,undefined,Symbol<make something unique>,BigInt

  js is Dynamic type language
  You do NOT declare the data type of a variable.

  Reference(NoN-primitive):
  Arrays, Objects, Functions
*/
const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userMail;
const id=Symbol('123')
const id2=Symbol('123')
console.table([id,id2]);
console.log(id===id2);
const bigNumber=4534859359649460n;
console.log(typeof(bigNumber));

const heros=['airbone','shaktiman','doga']
//object"
let myObj={
    name:"Dev",
    age:22
}
//function

const myfunction=function(){
  console.log("hello")
}
