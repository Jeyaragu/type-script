type VariantDetails = {
    variantName: string;
    price: number;
};

type Variants = {
    // Index signature is the generic way in TS, can have any property, only condition is each property should have type string
    // This tells that variant (from car) can have any property.
    // We should have only one index signature in a object.
    [key: string]: VariantDetails; 
};

type CarDetails = {
    fuelType: string;
    acceleration: string;
    topSpeed: string
};

type CarObject = {
    name: string;
    model: String;
    colors: Array<string>;
    variants: Variants; // Assign Variants type to variants property on CarObject
    carDetails: CarDetails;
    testDrive?: boolean; // Optional Property
    readonly isManuval: "Yes" |  "No"; // Its a readonly property we cant re-assign values other than yes or no
};

let car: CarObject = {
    name: 'BWM',
    model: 'i7',
    colors: ['Blue', 'Gray'],
    isManuval: "Yes",
    variants: {
        variant1: {
            variantName: 'i7 eDrive50 M Sport',
            price: 23000000
        },
        variant2: {
            variantName: 'i7 eDrive60 M Sport',
            price: 21300000
        },
        variant3: {
            variantName: 'i7 eDrive70x M Sport',
            price: 25000000
        },
    },
    carDetails: {
        fuelType: 'Electric',
        acceleration: '3.7 to 5.5 Seconds',
        topSpeed: '250kmph'
    },
};