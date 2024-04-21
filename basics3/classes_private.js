// class User{
//     public email: string// everything that is not marked is by default public
//     name: string
//     private city: string = ""
//     constructor(email:string, name: string){
//         this.email = email;
//         this.name = name;
//         this.city = "";//here we can access it
//     }
// }
//raiden.city = "abc"; due to use of private the city is not accessible here
var User = /** @class */ (function () {
    function User(email, //or else we can just simply write everything else here
    name, Id) {
        this.email = email;
        this.name = name;
        this.Id = Id;
        this.city = ""; //if we want to initialize something readonly we have to do that here
    }
    return User;
}());
