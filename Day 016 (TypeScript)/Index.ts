// 1️⃣ Annotation

var Name: string = "Radha";
console.log(Name);

("data type of Name cannot be changed");
// Name = 63;
// console.log(Name); // Error

// 2️⃣ Type Inference

let productName = "Laptop";
console.log(typeof productName);
// productName = 63; // Error

// 3️⃣ Any Type

let studentName: any = "John";
console.log(typeof studentName);
studentName = 63; // no error
console.log(typeof studentName);

// 4️⃣ Function type Annotation
function Greet(UserName: String) {
  console.log(`Radhe Radhe ${UserName}`);
}

Greet("Jai prakash");

// 5️⃣ Function Return Annotation
function Add(a: number, b: number): number {
  return a + b;
}
console.log(Add(6.6, 3));
console.log(typeof Add(6.6, 3));

// 6️⃣ Void Type

const Log = (): void => {
  console.log("Hello World");
};
Log();
console.log(typeof Log());

// 8️⃣ Never Type
let x: never;
function error(): never {
  throw new Error("Error");
}
function infiniteLoop(): never {
  while (true) {}
}
console.log(infiniteLoop());
console.log(typeof infiniteLoop());

// object Annotation Example
type person = {
  name: string;
  age: number;
};

const Student1: person = {
  name: "John",
  age: 20,
};

const Student2: person = {
  name: "Jane",
  age: 20,
};

console.log(Student1, Student2);
