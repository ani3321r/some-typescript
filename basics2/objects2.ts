type User = { 
    name: string;
    email: string;
    isVerified: boolean
}// custom type defination/ type aliases

function createUser(user: User): User{
    return {name: "", email: "", isVerified: false}
}

createUser({name: "", email: "", isVerified: false})

type User2 = {
    readonly _id: string;//due to "readonly" no one can manipulate this property 
    name: string;
    email: string;
    isVerified: boolean
    paymentDetails?: number//this is a optional property
}

let myUser: User2 = {
    _id: "abc123",
    name: "abc",
    email: "abc@a.com",
    isVerified: false
}

myUser.email = "efg@e.com"// we can modify it because it's not readonly
// myUser._id = "efg"// we can't modify this

type cardNumber = {
    cardNumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}// here all the three details is being concatinated


export{}