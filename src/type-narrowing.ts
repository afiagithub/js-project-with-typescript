interface User {
    name: string
    email: string
}

interface Admin {
    name: string
    email: string
    isAdmin: boolean
}

function ifAdmin(account: User | Admin) {
    if ('isAdmin' in account) {
        console.log(account.isAdmin);

        return account?.isAdmin
    }
    else {
        return 8
    }
}

const user1 = { name: 'halim', email: 'halim@com', isAdmin: true }
const user2 = { name: 'halim', email: 'halim@com' }

ifAdmin(user1)

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

type Fish = { swim: () => void; }
type Bird = { fly: () => void; }

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return 'Fish food'
    }
    else{
        pet
        return 'Bird food'
    }
}