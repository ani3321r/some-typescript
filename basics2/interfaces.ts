interface User{
    readonly db: number,
    email: string,
    Id: number,
    GId?: string,
    trial: () => string
    trial2?() : string//in these ways we define a function in an interface
    Coupon(Cname: string):number
}

interface User{
    Gtoken: string
}//we can define interfaces as many times as we want of the same class

interface Admin extends User{
    role: "admin" | "student"
}//inheritance is valid here

const user: User = {db: 10,Gtoken: "abc", email: "a@ab.com", Id: 60,
    trial: () => {
        return "raiden"
    },
    Coupon: (name: "abc") => {
        return 23
    }//we don't have to match the Cname with name, we can write anything just have to maintain the datatype
}

const ad: Admin = {db: 10,Gtoken: "abc", email: "a@ab.com",role: "admin", Id: 60,
    trial: () => {
        return "raiden"
    },
    Coupon: (name: "abc") => {
        return 23
    }
}