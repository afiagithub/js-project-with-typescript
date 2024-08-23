"use strict";
const numList = [];
console.log(numList);
function identityOne(val) {
    return val;
}
const result = identityOne(85);
console.log(result);
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    const myIndex = 2;
    return val[myIndex];
}
const identityFour = (val) => {
    const myIndex = 2;
    return val[myIndex];
};
