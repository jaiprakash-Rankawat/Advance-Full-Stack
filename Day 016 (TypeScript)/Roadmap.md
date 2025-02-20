# Day 16 And Day 17: Type Script Basics

1️⃣ What is Type Script
2️⃣ What is Annotation
3️⃣ What is Type Inference
4️⃣ What is any Type
5️⃣ Function type Annotation
6️⃣ Function Return Annotation
7️⃣ void Type
8️⃣ Never Type

# 1️⃣ What is Type Script

- javascript with superpowers : typescript is like a more powerful version of javascript. it lets you do everything that javascript does, but it adds some extra features to make your life easier when writing larger and more complex programs.

# 2️⃣ What is Annotation

```Typescript
let Name: string = "Radha";
console.log(Name);
```

# 3️⃣ What is Type Inference

```typescript
let productName = "Laptop";
console.log(typeof productName);
productName = 63; // Error
```

# 4️⃣ What is any Type

```typescript
let Name: any = "Radha";
console.log(Name);
```

# 5️⃣ Function type Annotation

```Typescript
function Greet(UserName: String) {
  console.log(`Radhe Radhe ${UserName}`);
}

Greet("Jai prakash");
```

# 6️⃣ Function Return Annotation

```Typescript
function Add(a: number, b: number): number {
  return a + b;
}
console.log(Add(6.6, 3));
console.log(typeof Add(6.6, 3));
```

# 7️⃣ Void in Type Script

- Void Type is used to indicate that a function does not return a value.
- Type of void is 'undefined'

```Typescript
function Log(): void {
  console.log("Hello World");
}
```

# 8️⃣ Never Type

- Never Type is used to indicate that a function will never return a value.

- Never is used for : 👇

1. A function that throws an error
2. A function that infinite loop
3. A Variable that can never have a value.

```Typescript
let x: never;
function error(): never {
  throw new Error("Error");
}
function infiniteLoop(): never {
  while (true) {}
}
console.log(infiniteLoop());
console.log(typeof infiniteLoop());
```
