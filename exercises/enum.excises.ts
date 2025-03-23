// Practice Questions
//* 1. Create an array numbers that only accepts numbers and another array strings that only accepts strings.
const strArr: string[] = ['a', 'b', 'c']
const numArr: number[] = [1, 2, 3]

//* 2. Create a tuple person that holds a string (name) and a number (age).
const tupleExc: [string, number] = ['Rag', 2]

//* 3. Create a readonly array colors that holds strings and a readonly tuple point that holds two numbers (x, y). Attempt to modify their elements and observe the TypeScript error.
let readOnlyColor: Readonly<string[]> = ['White', 'Blue'];
let point: Readonly<[number, number]> = [1, 2]
//* 4. Create an enum called StatusEnum that should 3 properties Active, Inactive, Pending
enum statusEnum {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive',
    PENDING = 'Pending'
}

//* 5. Create an object as const called Status with the same structure as an StatusEnum
const statusConstEnum = {
    ACTIVE: 'Active',
    INACTIVE: 'Inactive',
    PENDING: 'Pending'
} as const;