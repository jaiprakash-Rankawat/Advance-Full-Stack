// Intersection Type (Act as Combination)

type UserInfo = {
  name: string;
  age: number;
};
type Physical = {
  height: number;
  weight: number;
};

type Combine = UserInfo & Physical;

const person: Combine = {
  name: "jai prakash",
  age: 22,
  height: 5.8,
  weight: 60,
};

console.log(person.name, person.age, person.height, person.weight);

// union types (Act as either this or that)

let age: number | string = 22;
console.log(age);
age = "twenty two";
console.log(age);

type infoOne = {
  variable1: string;
};
type infoTwo = {
  variable2: number;
};
type orOperator = infoOne | infoTwo;

// --------------------------------------
const mixInfo: orOperator = {
  variable1: "Radha",
}; // give no error
console.log(mixInfo.variable1);

// --------------------------------------
const mixInfo2: orOperator = {
  variable2: 22,
}; // give no error
console.log(mixInfo2.variable2);

// but we cannot choose both at same time

// --------------------------------------

let personInformation: (number | string)[] = ["Radha", 22];
console.log(personInformation);

// Literal

let subject: "React js" | "Node Js" | "Next js";
subject = "Next js";
// we can provide only three subject
// subject = "TypeScript" // Error
console.log(subject);

// Tuples

const tuples: [string, number] = ["Jai Praksh", 31];
console.log(tuples[0]);
console.log(tuples[1]);

// Enums

enum Weather {
  suny,
  rainy,
  cloudy,
  mosity,
}

console.log(`${Weather.rainy}`); // give index value

enum product {
  product1 = "Laptop",
  product2 = "Mobile",
  product3 = "Computer",
}

console.log(`${product.product1}`);
