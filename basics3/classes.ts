class User{
    email: string
    name: string
    city: string = ""//when not included in the constructor, this is the syntax
    constructor(email:string, name: string){
        this.email = email;//here the email is refering from 2nd line
        this.name = name;//same for name
    }
}

const raiden = new User("r@r.com", "raiden");

raiden.city = "abc";//this is accessible