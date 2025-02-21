// Array Type

// Creating array of numbers
let num: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log(num);

// Multidimension Array
let numbers: number[][] = [
  [1, 2, 3],
  [3, 4, 5],
];
console.log(numbers);

// object

let students: { name: String; age: number } = {
  name: "Radha",
  age: 33,
};

console.log(students.name);

// function

function UserInfo(): { name: String; age: number } {
  return {
    name: "Krishna",
    age: 36,
  };
}
console.log(UserInfo());

function Greet(name: String) {
  console.log(`Radhe Radhe ${name}`);
}

Greet("Jai Prakash");

// Type Alias

type page = {
  home: string;
  totalPage: number;
};

function website(page: page) {
  return `There will be ${page.totalPage} page which are ${page.home}`;
}

console.log(website({ home: "home + About + Product", totalPage: 3 }));

// optional property

type CityInfo = {
  male: number;
  female: number;
  children?: number;
};

function InformationOfCity(cityInfo: CityInfo) {
  return `Total Number of Male : ${cityInfo.male} \nTotal number of Female : ${cityInfo.female} \nTotal Number of Children : ${cityInfo.children}`;
}

console.log(InformationOfCity({ male: 1234, female: 933, children: 34 }));
console.log(InformationOfCity({ male: 36, female: 9 }));

// Readonly property
type userInfo = {
  name: string;
  age: number;
  readonly thought: string;
};
const user1: userInfo = {
  name: "jai Prakash",
  age: 22,
  thought: "I Love My India",
};

console.log(`Name : ${user1.name}, Age : ${user1.age}, ${user1.thought}`);
