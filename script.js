"use strict";

var a = 5;
console.log(a);

let person = {
  name : "Jhon",
  age : 25,
  isMarried: false
};

console.log(person["name"]);

let arr = ["plum.png","orange.jpg","apple.bmp"];

console.log(arr[0]);

// let answer = confirm("Are you here?");

// console.log(answer);

// let answer = +prompt("Есть ли вам 18?", "Да");

// console.log(typeof(answer));

// console.log("arr" + "- object");
// console.log(4 + "- object");

let incr = 10,
    decr = 10;


console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2" === 2);

let isChecked = true,
    isClose = false;
console.log(isChecked || isClose);
