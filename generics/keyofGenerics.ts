// Keyof Operator - its used in order to create union of all keys of an object
// It generates a new type which is actully a union of all the keys of an object
type Events = {
  id: number;
  name: string;
  type: "indoor" | "outdoor";
};

type UnionOfKeysOfEvents = keyof Events; // id | name | type

let idOfEvent: UnionOfKeysOfEvents = "id";

// Partial
type Persons = {
  name: string;
  age: number;
  address: string;
};

type PartialPersons = {
  [K in keyof Persons]?: Persons[K] | null;
};
let partialPerson: PartialPersons = {
  name: "Jeyaragu",
};
