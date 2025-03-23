/* 
    String 
*/
let firstName: string = "Jeya";
var number = 9659134238;
let reasignNumber: string = number.toString();

/* 
    Number 
*/
var year: number = 2024;
const month: number = parseInt('07');

/* 
    Boolean
*/
let isActive: boolean = true;
let validateYear: boolean = year > 2023 ? true : false;

/* 
    null
*/
let role:null;
role = null;

/* 
    BigInt
*/
const bigInt1 = BigInt(100);
let bigInt2: bigint = 123n;
// console.log(typeof bigInt1)


/* 
    Symbol
*/
let id:symbol = Symbol(1234);
let str: symbol = Symbol('str_id')
const user = {
    [id]:'1',
    name: 'test'
}
// console.log(str)
/* 
    Boolean
*/
let booleanValue: boolean;
booleanValue = typeof "abc" == "string";
// console.log(booleanValue)


/* 
    Union Types
*/
type StringOrNumber = string | number;
type StringOrNumberOrUndefined = string | number | undefined;

const age = 20;
let oldage = 10 as const;
console.log(typeof oldage)
let map = new Map();
type custname = 'John' extends string ? string : 'John'
