// Enum is a special class that represent a group of constants
// Enum start with two flavors string and numeric 

// Enum - Numeric Example
// The following Numeric ENUM has a unique identifier each of the enum properties. 
// It will start with 0 and reset will auto increment
enum Direction {
    Up, // 0
    Down, //1
    Left,  //2
    Right //3
}
// Custimized Numeric ENUM 
enum Direction1 {
    Up = 1, //1
    Down, // 2
    Left, // 3
    Right // 4
}

const Direction2 = {
    Up: 0,
    Down: 1,
    Right: 2,
    Left: 3
} as const;

// String ENUM
enum Role {
    ADMIN = 'Admin',
    AUTHOR = 'Author',
    EDITOR = "Editor",
}

// This type of enum not be compiled into javascript
const enum Direction3 {
    Up,
    Down,
    Left,
    Right,
}

type Person = {
    displayName: string;
    email: string;
    role: Role;
}
// Here the Role enum acting like a type
const person: Person = {
    displayName: 'John',
    email: 'john@email.com',
    role: Role.ADMIN
}

// Compute ENUMS
enum AccessPermission {
    None = 0,
    Read = 1,
    Write = 2,
    ReadWrite = Read + Write,
    Delete = 4,
    All = ReadWrite | Delete  // Here the / is union and its Symbol act as addition.
}