"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "one",
    email: "one@one.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isVerified;
}
//createUser(); //createUser cannnot be used like this
createUser({ name: "raiden", isVerified: false }); //this is the way of creating a object
var newUser = { name: "raiden", isVerified: false, email: "raiden@gmail.com" };
createUser(newUser); // this is a probel of typescript
function createCourse() {
    return { name: "flutter", price: 500 };
}
