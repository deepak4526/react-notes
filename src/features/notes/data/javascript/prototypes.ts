import type { NotePageData } from "../../../../types/note";

export const prototypesNotes: NotePageData = {
  title: "Prototypes & Inheritance",
  description:
    "JavaScript uses a prototype-based inheritance model. Every object has an internal link to another object called its prototype — forming a chain that enables property and method sharing.",
  sections: [
    {
      id: "prototype-chain",
      title: "The Prototype Chain",
      blocks: [
        {
          type: "text",
          text: "Every JavaScript object has a hidden internal property [[Prototype]] (accessible via __proto__ or Object.getPrototypeOf()). When you access a property, JS looks at the object first, then walks up the prototype chain until it finds it or hits null.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const animal = {
  eat() { return "eating..."; },
};

const dog = {
  bark() { return "woof!"; },
};

// Set animal as the prototype of dog
Object.setPrototypeOf(dog, animal);

console.log(dog.bark()); // "woof!"   — found on dog
console.log(dog.eat());  // "eating..." — found on animal (prototype)

// Prototype chain: dog → animal → Object.prototype → null

// Check prototype
console.log(Object.getPrototypeOf(dog) === animal); // true`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "All objects in JavaScript ultimately inherit from Object.prototype — the top of every prototype chain.",
        },
      ],
    },
    {
      id: "constructor-functions",
      title: "Constructor Functions",
      blocks: [
        {
          type: "text",
          text: "Before ES6 classes, constructor functions were the standard way to create objects with shared methods. The 'new' keyword creates a new object, sets its prototype, calls the function, and returns the object.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// Constructor function (capitalize by convention)
function Person(name, age) {
  this.name = name; // own property (per instance)
  this.age  = age;
}

// Add shared methods to the PROTOTYPE (not each instance)
Person.prototype.greet = function() {
  return \`Hi, I'm \${this.name}\`;
};

Person.prototype.isAdult = function() {
  return this.age >= 18;
};

const p1 = new Person("Deepak", 25);
const p2 = new Person("Riya",   30);

console.log(p1.greet());   // "Hi, I'm Deepak"
console.log(p2.isAdult()); // true

// Both share ONE greet function in memory (efficient!)
console.log(p1.greet === p2.greet); // true`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Always add shared methods to Constructor.prototype — not inside the constructor body. Methods in the body create a new function copy per instance, wasting memory.",
        },
      ],
    },
    {
      id: "es6-classes",
      title: "ES6 Classes — Syntactic Sugar",
      blocks: [
        {
          type: "text",
          text: "ES6 classes are NOT a new object model — they are syntactic sugar over the prototype system. Under the hood, they work exactly like constructor functions + prototype methods.",
        },
        {
          type: "code",
          language: "javascript",
          code: `class Animal {
  constructor(name) {
    this.name = name; // own property
  }

  speak() {           // goes on Animal.prototype
    return \`\${this.name} makes a sound.\`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // MUST call super() before using 'this'
  }

  speak() { // overrides Animal.prototype.speak
    return \`\${this.name} barks!\`;
  }
}

const d = new Dog("Rex");
console.log(d.speak());                // "Rex barks!"
console.log(d instanceof Dog);         // true
console.log(d instanceof Animal);      // true (prototype chain!)

// Under the hood — same as prototype
console.log(typeof Dog);               // "function"
console.log(Dog.prototype.speak);      // [Function: speak]`,
        },
      ],
    },
    {
      id: "inheritance",
      title: "Prototypal Inheritance in Practice",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `class Shape {
  constructor(color) {
    this.color = color;
  }

  getInfo() {
    return \`Color: \${this.color}\`;
  }

  area() {
    return 0; // default
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);          // call parent constructor
    this.radius = radius;
  }

  area() {                 // override parent method
    return Math.PI * this.radius ** 2;
  }

  getInfo() {              // extend parent method
    return super.getInfo() + \`, Radius: \${this.radius}\`;
  }
}

const c = new Circle("red", 5);
console.log(c.area());    // 78.53...
console.log(c.getInfo()); // "Color: red, Radius: 5"`,
        },
      ],
    },
    {
      id: "static-members",
      title: "Static Methods & Properties",
      blocks: [
        {
          type: "text",
          text: "Static members belong to the CLASS itself — not to instances. They are called on the class directly and cannot be called on individual objects.",
        },
        {
          type: "code",
          language: "javascript",
          code: `class MathUtils {
  static PI = 3.14159;

  static add(a, b)      { return a + b; }
  static multiply(a, b) { return a * b; }
}

// Call on the class — no new keyword needed
console.log(MathUtils.PI);           // 3.14159
console.log(MathUtils.add(3, 4));    // 7

// ❌ Cannot call on instance
const m = new MathUtils();
// m.add(1, 2); // TypeError: m.add is not a function`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "Static methods are great for utility/helper functions that don't need access to instance state — like Math.random(), Array.from(), Object.keys().",
        },
      ],
    },
    {
      id: "has-own-property",
      title: "Own vs Inherited Properties",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `class Vehicle {
  constructor(type) { this.type = type; }
  describe() { return \`I am a \${this.type}\`; }
}

const car = new Vehicle("Car");

// Own properties (set in constructor)
console.log(car.hasOwnProperty("type"));     // true
console.log(car.hasOwnProperty("describe")); // false (on prototype)

// for...in loops over ALL enumerable props (including inherited)
for (const key in car) {
  if (car.hasOwnProperty(key)) {
    console.log("Own:", key); // Only logs "type"
  }
}

// Object.keys — only own enumerable properties
console.log(Object.keys(car)); // ["type"]`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Use Object.hasOwn(obj, key) (modern) or obj.hasOwnProperty(key) to distinguish an object's own properties from inherited ones.",
        },
      ],
    },
  ],
};
