const numList: Array<number> = []
console.log(numList);

function identityOne<Type>(val: Type): Type{
    return val;
}

const result = identityOne(85)
console.log(result);

interface Bottle{
    brand: string
    price: number
}

function identityTwo<Bottle>(val: Bottle): Bottle{
    return val;
}

function identityThree<T>(val: T[]): T{
    const myIndex = 2
    return val[myIndex];
}

const identityFour = <T>(val: T[]): T=> {
    const myIndex = 2
    return val[myIndex];
}
