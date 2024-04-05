let score: number | string = 60 //assigning two types to one variable

score = 50
score = "45"

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let raiden : User | Admin = {name: "raiden", id: 200}

raiden = {username: "rd", id: 201}// therefore "raiden" can both act as User and Admin

function dbCall(id: number | string){
    if(typeof id === "string"){
        id.toLowerCase();//this property can only be applied after giving the if condition
    }
}

const data: (number | string)[] = [1, "2", "4", 3]//this is hoe we delare a multiple type array

let pi:3.14 = 3.14// this is a literal type of assignment