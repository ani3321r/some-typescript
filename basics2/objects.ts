const User = {
    name: "one",
    email: "one@one.com",
    isActive: true
}

function createUser({name: string, isVerified: boolean}){}

//createUser(); //createUser cannnot be used like this

createUser({name: "raiden", isVerified: false}) //this is the way of creating a object

let newUser = {name: "raiden", isVerified: false, email: "raiden@gmail.com"}

createUser(newUser)// this is a probel of typescript



function createCourse():{name: string, price: number}{
    return {name: "flutter", price: 500}
}

export{}