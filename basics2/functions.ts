function addTwo(nums: number): number{// this is how we declare the types in a function
    return nums + 2;
}

function getUpper(value: string){
    return value.toUpperCase();
}

function signup(name: string, email: string, oldUser: boolean){}// multiple type declaration

function login(name: string, email: string, oldUser: boolean = false) {}

addTwo(6)
getUpper("raiden");
signup("one", "one@gmail.com", false);
login("two", "two@gmail.com");// though we have three values to be given to the function, as we declared the last value to be false there whold be no issue

const funcc = (s: string):string => {
    return ""
}// this is how we declare the type of arrow function

const cars = ["918 spyder", "911 tycan turbo s", "agera rs"]// we just have to maintain type in the array

cars.map(car => {
    return `car is ${car}`;
})// typescript is smart enough to understand the type of variable "car" we don't have to define it.

function consoleErr(errmsg: string): void{
    console.log(errmsg);    
}

function handelErr(errmsg: string): never{
    throw new Error(errmsg);
}// it does a forcefull termination of the program, i.e., it is used to mainly throw a error

export{}