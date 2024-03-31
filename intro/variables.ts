let greetings: string = "Hello Raiden"
greetings.toLowerCase();
console.log(greetings);

//number

let userId = 6565121.669 //we don't have to put the type inference all the time

userId.toPrecision()

//boolean
let isLoggedIn: boolean = false

//any

let hero;// when typescript is clueless about what type it might be then it declares the type as any

function getHero(){
    return "hulk";
}

hero = getHero();

export {}