"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return { name: "", email: "", isVerified: false };
}
createUser({ name: "", email: "", isVerified: false });
var myUser = {
    _id: "abc123",
    name: "abc",
    email: "abc@a.com",
    isVerified: false
};
myUser.email = "efg@e.com"; // we can modify it because it's not readonly
