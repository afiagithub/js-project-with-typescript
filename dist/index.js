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
        this.token = 'hjta14adef'; // protected property can be used in the same class & classes that inherit this class
        this.city = 'dhaka'; //you have to initialize it at some point otherwise error
    }
    get getToken() {
        return this.token;
    }
    set getToken(user_email) {
        if (this.email !== user_email) {
            throw new Error('Forbidden Access');
        }
        this.token = '74256kkkkiii';
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isRelated = true;
    }
    changeToken() {
        this.token = 'afiaafiaafia';
    }
}
let afia = new User('afia@rahman.com', 'afia rahman', 549);
console.log(afia.city);
console.log(afia.getToken);
console.log(afia.getToken = 'afia@rahman.com');
console.log(afia.getToken);
