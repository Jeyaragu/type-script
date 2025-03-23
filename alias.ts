/* Declaration of types  */
type customString = string;
type customNumber = number;
type customObject = {
    'id': number,
    'name': string
};

/* Annotation - When you assign a type to the variable is called annotation */
let first_name: customString = 'name';
let studentObject: customObject = {
    id: 2,
    name: 'ragu'
};
let studentArray: customObject[] = [{
    id: 2,
    name: 'ragu'
}];

type check = string extends any ? true : false;

/*Inference - Intelligence to predict the type of the variable or declaration */