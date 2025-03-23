type Dog = {
    name: string;
    barks: boolean;
    wags: boolean;
};
type Cat = {
    name: string;
    purrs: boolean;
};

// Union type declaration
type DogAndCatUnion = Dog | Cat;

let dog: DogAndCatUnion = {
    name: 'Karupa',
    barks: true,
    wags: true,
};
let cat: DogAndCatUnion = {
    name: 'Cat',
    purrs: true,
};

// Union Type must contain all property from any of the type. You cant have partial properties from two types.
let hybridAnimal: DogAndCatUnion = {
    name: 'Hybrid',
    barks: true,
    wags: true,
    purrs: true,
};