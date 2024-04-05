var score = 60; //assigning two types to one variable
score = 50;
score = "45";
var raiden = { name: "raiden", id: 200 };
raiden = { username: "rd", id: 201 }; // therefore "raiden" can both act as User and Admin
function dbCall(id) {
    if (typeof id === "string") {
        id.toLowerCase(); //this property can only be applied after giving the if condition
    }
}
var data = [1, "2", "4", 3]; //this is hoe we delare a multiple type array
var pi = 3.14; // this is a literal type of assignment
