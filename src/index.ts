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
    readonly city: string = 'dhaka' //you have to initialize it at some point otherwise error
    constructor(public email: string,
        public name: string,
        private userId: number) {
    }
}

let afia = new User('afia@rahman.com', 'afia rahman', 549)
console.log(afia.city);
