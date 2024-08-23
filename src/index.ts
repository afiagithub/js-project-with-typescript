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
    protected token = 'hjta14adef' // protected property can be used in the same class & classes that inherit this class
    readonly city: string = 'dhaka' //you have to initialize it at some point otherwise error
    constructor(public email: string,
        public name: string,
        private userId: number) { // private properties are only accessible within that class
    }

    get getToken(): string {
        return this.token
    }

    set getToken(user_email: string){ //setter or set accessor cannot have a return type annotation
        if(this.email !== user_email){
            throw new Error('Forbidden Access')
        }
        this.token = '74256kkkkiii'
    }
}

class SubUser extends User{
    isRelated: boolean = true
    changeToken(){
        this.token = 'afiaafiaafia'
    }
}

let afia = new User('afia@rahman.com', 'afia rahman', 549)
console.log(afia.city);
console.log(afia.getToken);
console.log(afia.getToken = 'afia@rahman.com');
console.log(afia.getToken);
