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

class User{
    readonly city: string = ""//if we want to initialize something readonly we have to do that here
    constructor(
        public email:string,//or else we can just simply write everything else here
        public name: string,
        private Id: string
    ){
    }
}