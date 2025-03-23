// Readonly means, can't be modified the value
let a: readonly number[] = [1, 2, 3, 4];
let b: Array<string> = ["a", "b", "c"];
let c: (string | number)[] = ["1", "b"];

// Declaring ReadOnly array.
type ReadA = Readonly<string>;
type ReadB = ReadonlyArray<string | number>;
type ReadC = Readonly<string>[];

let readA: ReadA = "a";

//Tubles - Its a type of an array which has fixed shape as well as fixed lenght
let tuble: [string, number, boolean, string?] = ["name", 10, true];

// It means, we can have n-number string at the end of an array and this is read only tuble
type ListOfStudents = readonly [number, boolean, ...string[]];
const studentsList: ListOfStudents = [2, true, "Student 1", "Student 2"];
// Ready only tuble defintion syntax
type readOnly1 = Readonly<[string, number]>;
type readOnly2 = ReadonlyArray<string | number>;
// It means, first and last element of an array should have string and number
// In middle we can have n-number of boolean values
type StringBooleanNumber = [string, ...boolean[], number];
const stringBooleanNumber: StringBooleanNumber = ["Student 1", true, true, 2];

//It means, last two element should have type of string and number
// and it can have n-number of number at starting of the array.
type NumberStringBoolean = [...number[], string, boolean];
const numberStringBoolean: NumberStringBoolean = [1, 2, 3, "Student 2", true];

// Tuble for object
let objectTuble: [{ name: string }, { disPlayName: string }] = [
  {
    name: "Jeyaragu",
  },
  {
    disPlayName: "Jeyaragu",
  },
];
