//how internally memory works.....
//stack()is use in promotive type memory 
let yt="hitesh";
let youtube=yt;
youtube="chai";
console.log(yt);
console.log(youtube);
//heap() is use in non primitive type memory
let userOne={
    name:"dev",
    grade:"a+"
}
let userTwo=userOne;
userTwo.name="sexy"
userTwo.grade="c"
console.log(userOne)
console.log(userTwo)
//both changes on modifying in user2 bcoz reference is passed in np ......

