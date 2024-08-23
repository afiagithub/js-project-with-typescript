"use strict";
function ifAdmin(account) {
    if ('isAdmin' in account) {
        console.log(account.isAdmin);
        return account === null || account === void 0 ? void 0 : account.isAdmin;
    }
    else {
        return 8;
    }
}
const user1 = { name: 'halim', email: 'halim@com', isAdmin: true };
const user2 = { name: 'halim', email: 'halim@com' };
ifAdmin(user1);
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return 'Fish food';
    }
    else {
        pet;
        return 'Bird food';
    }
}
