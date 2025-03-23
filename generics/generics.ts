function returnParams<Type>(params: Type): Type {
  return params;
}
const returnParams1 = <U>(params1: U): U => {
  return params1;
};

// Function call signature
const return1: <V>(params: V) => V = (param) => param;

type GetFirstElement = <W>(arr: W[]) => W;

type ObjectType = {
  myParam: <V, X>(param: V, param2: X) => V | X;
};

// Generics and Constraints
interface LengthWise {
  length: number;
}
function loggingIdentity<Type extends LengthWise>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}
loggingIdentity([1, 2, 3]);
loggingIdentity("string");
loggingIdentity({ length: 1 });
// loggingIdentity(123);

interface Numeric {
  // Index Signature
  [key: number]: string;
}
type NumericKeyOf = keyof Numeric;
const testNumeric: Numeric = {
  "1": "2",
  //"a":"2" // It will throw the error
};

type Users = {
  name: string;
  address?: string;
};

type PartialPerson = {
  [K in keyof Users]: Users[K] | null;
};
let testUser: PartialPerson = {
  name: "Ragu",
};
