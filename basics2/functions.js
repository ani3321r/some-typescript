"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(nums) {
    return nums + 2;
}
function getUpper(value) {
    return value.toUpperCase();
}
function signup(name, email, oldUser) { } // multiple type declaration
function login(name, email, oldUser) {
    if (oldUser === void 0) { oldUser = false; }
}
addTwo(6);
getUpper("raiden");
signup("one", "one@gmail.com", false);
login("two", "two@gmail.com"); // though we have three values to be given to the function, as we declared the last value to be false there whold be no issue
var funcc = function (s) {
    return "";
}; // this is how we declare the type of arrow function
var cars = ["918 spyder", "911 tycan turbo s", "agera rs"]; // we just have to maintain type in the array
cars.map(function (car) {
    return "car is ".concat(car);
}); // typescript is smart enough to understand the type of variable "car" we don't have to define it.
function consoleErr(errmsg) {
    console.log(errmsg);
}
function handelErr(errmsg) {
    throw new Error(errmsg);
} // it does a forcefull termination of the program, i.e., it is used to mainly throw a error
