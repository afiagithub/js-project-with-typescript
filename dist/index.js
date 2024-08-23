"use strict";
console.log('hello, afia');
console.log('new typescript project');
// class User {
//     email: string
//     name: string
//     readonly city: string = 'dhaka' //you have to initialize it at some point otherwise error
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = 'dhaka'; //you have to initialize it at some point otherwise error
    }
}
let afia = new User('afia@rahman.com', 'afia rahman', 549);
console.log(afia.city);
