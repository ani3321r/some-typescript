"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Raiden";
greetings.toLowerCase();
console.log(greetings);
//number
var userId = 6565121.669; //we don't have to put the type inference all the time
userId.toPrecision();
//boolean
var isLoggedIn = false;
//any
var hero; // when typescript is clueless about what type it might be then it declares the type as any
function getHero() {
    return "hulk";
}
hero = getHero();
