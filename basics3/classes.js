var User = /** @class */ (function () {
    function User(email, name) {
        this.city = ""; //when not included in the constructor, this is the syntax
        this.email = email; //here the email is refering from 2nd line
        this.name = name; //same for name
    }
    return User;
}());
var raiden = new User("r@r.com", "raiden");
raiden.city = "abc"; //this is accessible
