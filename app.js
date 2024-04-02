"use strict";
let car = 'subaru';
let age = 24;
let number = [1, 2, 3, 4];
// string test
//test1: equlity (true)
console.log("Is car == 'subaru'? I pridict True.");
console.log(car == 'subaru'); // True (case-sensitive)
// test2: strict equality (false)
console.log("Is car === 'subaru'? I pridict True.");
console.log(car === 'subaru'); // False (case-sensitive)
//Test 3: Inequality (true)
console.log("Is car !='Toyota'? I predict true.");
console.log(car != 'Toyota'); //true
//Test 4: Inequality (False)
console.log("Is car !=='subaru'? I predict False.");
console.log(car !== 'subaru'); //False (case-sensitive)
// **Lowercase function**
//test 5:lowercase conversation (true) 
console.log("Is car.tolowerCase() == 'subaru'? I predict true.");
console.log(car.toLowerCase() == 'subaru');
// test 6: lowercase convertion(false)
console.log("Is car === car.tolowerCase()? I predict false.");
console.log(car === car.toLowerCase()); //false(original values remai uppercase)
//** numarical test**
//test:7 equality true
console.log("Is age == 25 ? I predict true.");
console.log(age == 25); // True
//test:8 inequality false
console.log("Is age !=30? I predict true.");
console.log(age != 30); //true
//test:9 greater then
console.log("Is age > 30? I predict false.");
console.log(age > 30); //false
//test:10 less then or equal
console.log("Is age <= 30? I predict true.");
console.log(age <= 30); //true
// ** logical operators**
//test:11 And (true)
console.log("age > 20 && age < 30? I predict.");
console.log(age > 20 && age < 30); //true
//test:12 Or (false)
console.log("age > 30 || age < 18? I predict false.");
console.log(age > 30 || age < 18); // false(neither condition met)
//**array test**
//test :13 in array(true)
console.log("Is 3 in numbers? I predict.");
console.log(3 in number); // true(checks for index existence)
//test :14 not in array(false)
console.log("Is 5 not in number? I predict true.");
console.log(5, not in number); //true(negation of "in"operator)
