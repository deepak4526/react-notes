import type { NotePageData } from "../../../../types/note";

export const prototypesNotes: NotePageData = {
  title: "Prototype & Prototype Chain in JavaScript",
  description:
    "A prototype is an object from which other objects inherit properties and methods. The prototype chain is the lookup mechanism JavaScript uses when a property is not found directly on an object.",

  sections: [
    {
      id: "what-is-prototype",
      title: "What is a Prototype?",
      blocks: [
        {
          type: "text",
          text: "Every JavaScript object has an internal link to another object called its prototype.",
        },
        {
          type: "text",
          text: "When JavaScript cannot find a property or method directly on an object, it looks for it on the object's prototype.",
        },
        {
          type: "code",
          language: "text",
          code: `Object
   ↓
Prototype
   ↓
Prototype
   ↓
null`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "The sequence of objects JavaScript searches is called the Prototype Chain.",
        },
      ],
    },

    {
      id: "basic-example",
      title: "Basic Prototype Example",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const person = {
  name: "Deepak"
};

console.log(person.name);       // Deepak
console.log(person.toString()); // [object Object]`,
        },
        {
          type: "text",
          text: "We never created toString() inside person, so where did it come from?",
        },
        {
          type: "text",
          text: "JavaScript found toString() on Object.prototype.",
        },
        {
          type: "code",
          language: "text",
          code: `person
{
  name: "Deepak"
}
       ↓
Object.prototype
{
  toString()
  hasOwnProperty()
  valueOf()
  ...
}
       ↓
null`,
        },
      ],
    },

    {
      id: "checking-prototype",
      title: "Checking an Object's Prototype",
      blocks: [
        {
          type: "text",
          text: "The recommended way to get the prototype of an object is Object.getPrototypeOf().",
        },
        {
          type: "code",
          language: "javascript",
          code: `const person = {
  name: "Deepak"
};

console.log(Object.getPrototypeOf(person));

console.log(
  Object.getPrototypeOf(person) === Object.prototype
); // true`,
        },
        {
          type: "text",
          text: "For a normal object literal, the prototype is Object.prototype.",
        },
        {
          type: "highlight",
          variant: "warning",
          text: "__proto__ can access an object's prototype, but it is legacy syntax. Prefer Object.getPrototypeOf().",
        },
      ],
    },

    {
      id: "property-lookup",
      title: "How Prototype Lookup Works",
      blocks: [
        {
          type: "text",
          text: "When accessing a property, JavaScript first checks whether that property exists directly on the object.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const person = {
  name: "Deepak"
};

console.log(person.name); // Deepak`,
        },
        {
          type: "code",
          language: "text",
          code: `person
  ↓
"name" exists?
  ↓
YES
  ↓
Return "Deepak"`,
        },
        {
          type: "text",
          text: "If the property is not found directly on the object, JavaScript continues searching through its prototype chain.",
        },
        {
          type: "code",
          language: "javascript",
          code: `console.log(person.toString());`,
        },
        {
          type: "code",
          language: "text",
          code: `person
  ↓
toString exists?
  ↓
NO
  ↓
Object.prototype
  ↓
toString exists?
  ↓
YES
  ↓
Execute toString()`,
        },
      ],
    },

    {
      id: "property-not-found",
      title: "What if the Property Does Not Exist?",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const person = {
  name: "Deepak"
};

console.log(person.age); // undefined`,
        },
        {
          type: "text",
          text: "JavaScript searches the entire prototype chain. If it reaches null without finding the property, accessing that property returns undefined.",
        },
        {
          type: "code",
          language: "text",
          code: `person
  ↓
age? ❌
  ↓
Object.prototype
  ↓
age? ❌
  ↓
null
  ↓
undefined`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "JavaScript stops searching when the prototype chain reaches null.",
        },
      ],
    },

    {
      id: "prototype-chain",
      title: "The Prototype Chain",
      blocks: [
        {
          type: "text",
          text: "A prototype is itself an object, so it can have another prototype. This creates a chain of objects called the prototype chain.",
        },
        {
          type: "code",
          language: "text",
          code: `Object
   ↓
Prototype A
   ↓
Prototype B
   ↓
Object.prototype
   ↓
null`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "Property lookup travels upward through the prototype chain until the property is found or the chain reaches null.",
        },
      ],
    },

    {
      id: "object-prototype",
      title: "Object.prototype",
      blocks: [
        {
          type: "text",
          text: "Normal object literals inherit from Object.prototype.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const a = {};
const b = {};

console.log(
  Object.getPrototypeOf(a) === Object.prototype
); // true

console.log(
  Object.getPrototypeOf(b) === Object.prototype
); // true`,
        },
        {
          type: "text",
          text: "Object.prototype provides common methods that ordinary objects can inherit.",
        },
        {
          type: "list",
          items: [
            "toString()",
            "hasOwnProperty()",
            "valueOf()",
            "isPrototypeOf()",
            "propertyIsEnumerable()",
          ],
        },
        {
          type: "highlight",
          variant: "important",
          text: "Most ordinary objects eventually inherit from Object.prototype, but this is not true for every possible object.",
        },
      ],
    },

    {
      id: "null-prototype",
      title: "Objects Without Object.prototype",
      blocks: [
        {
          type: "text",
          text: "JavaScript can create an object whose prototype is directly null by using Object.create(null).",
        },
        {
          type: "code",
          language: "javascript",
          code: `const obj = Object.create(null);

console.log(Object.getPrototypeOf(obj));
// null

console.log(obj.toString);
// undefined`,
        },
        {
          type: "text",
          text: "Because this object does not inherit from Object.prototype, methods such as toString() and hasOwnProperty() are not available on it.",
        },
        {
          type: "highlight",
          variant: "tip",
          text: "This is why saying 'every object inherits from Object.prototype' is not completely accurate.",
        },
      ],
    },

    {
      id: "own-vs-inherited",
      title: "Own Properties vs Inherited Properties",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const person = {
  name: "Deepak"
};

console.log(person.hasOwnProperty("name"));
// true

console.log(person.hasOwnProperty("toString"));
// false

console.log(Object.hasOwn(person, "name"));
// true`,
        },
        {
          type: "text",
          text: "name is stored directly on person, so it is an own property. toString() is inherited from Object.prototype.",
        },
        {
          type: "highlight",
          variant: "info",
          text: "Own property = directly belongs to the object. Inherited property = found somewhere in the object's prototype chain.",
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Object.hasOwn(obj, key) is the modern way to check whether a property belongs directly to an object.",
        },
      ],
    },

    {
      id: "arrays-prototype",
      title: "Arrays and Prototypes",
      blocks: [
        {
          type: "text",
          text: "Arrays are objects. Array methods such as push(), map(), filter(), and reduce() are inherited from Array.prototype.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = [10, 20, 30];

arr.push(40);

console.log(arr);
// [10, 20, 30, 40]

console.log(
  Object.getPrototypeOf(arr) === Array.prototype
); // true`,
        },
        {
          type: "code",
          language: "text",
          code: `arr
 ↓
Array.prototype
 ↓
Object.prototype
 ↓
null`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "push() is not copied into every array. Arrays share the method through Array.prototype.",
        },
      ],
    },

    {
      id: "strings-prototype",
      title: "Strings and Prototypes",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const name = "Deepak";

console.log(name.toUpperCase());
// DEEPAK`,
        },
        {
          type: "text",
          text: "toUpperCase() is provided by String.prototype even though name is a primitive string.",
        },
        {
          type: "highlight",
          variant: "info",
          text: "When you access a method on a string primitive, JavaScript temporarily provides object-like access so methods from String.prototype can be used.",
        },
      ],
    },

    {
      id: "functions-prototype",
      title: "Functions and Prototypes",
      blocks: [
        {
          type: "text",
          text: "Functions are also objects in JavaScript and inherit common function methods from Function.prototype.",
        },
        {
          type: "code",
          language: "javascript",
          code: `function greet() {}

console.log(typeof greet.bind);
// function

console.log(
  Object.getPrototypeOf(greet) === Function.prototype
); // true`,
        },
        {
          type: "list",
          items: [
            "call() comes from Function.prototype",
            "apply() comes from Function.prototype",
            "bind() comes from Function.prototype",
          ],
        },
        {
          type: "code",
          language: "text",
          code: `greet
 ↓
Function.prototype
 ↓
Object.prototype
 ↓
null`,
        },
      ],
    },

    {
      id: "built-in-prototypes",
      title: "Common Built-in Prototypes",
      blocks: [
        {
          type: "text",
          text: "JavaScript provides prototype objects for many built-in types.",
        },
        {
          type: "list",
          items: [
            "Object.prototype",
            "Array.prototype",
            "Function.prototype",
            "String.prototype",
            "Number.prototype",
            "Boolean.prototype",
            "Date.prototype",
          ],
        },
        {
          type: "text",
          text: "Each prototype provides methods related to its type.",
        },
      ],
    },

    {
      id: "constructor-functions",
      title: "Constructor Functions",
      blocks: [
        {
          type: "text",
          text: "Constructor functions are functions used with the new keyword to create multiple objects with the same structure.",
        },
        {
          type: "code",
          language: "javascript",
          code: `function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Deepak", 25);
const p2 = new Person("Rahul", 30);

console.log(p1.name); // Deepak
console.log(p2.name); // Rahul`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Constructor function names are usually capitalized by convention, such as Person, User, or Product.",
        },
      ],
    },

    {
      id: "constructor-prototype",
      title: "Sharing Methods with Constructor.prototype",
      blocks: [
        {
          type: "text",
          text: "Methods that should be shared by every instance can be placed on the constructor's prototype.",
        },
        {
          type: "code",
          language: "javascript",
          code: `function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  return "Hello " + this.name;
};

const p1 = new Person("Deepak");
const p2 = new Person("Rahul");

console.log(p1.sayHello());
// Hello Deepak

console.log(p2.sayHello());
// Hello Rahul

console.log(p1.sayHello === p2.sayHello);
// true`,
        },
        {
          type: "text",
          text: "p1 and p2 do not contain separate copies of sayHello(). Both find the same function through Person.prototype.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "Prototype methods can be shared by all instances instead of creating a separate function property on every instance.",
        },
      ],
    },

    {
      id: "prototype-vs-object-prototype",
      title: "prototype vs [[Prototype]]",
      blocks: [
        {
          type: "text",
          text: "The prototype property of a constructor and the internal [[Prototype]] of an object are related, but they are different concepts.",
        },
        {
          type: "code",
          language: "javascript",
          code: `function Person() {}

const person = new Person();

console.log(Person.prototype);

console.log(
  Object.getPrototypeOf(person) === Person.prototype
); // true`,
        },
        {
          type: "list",
          items: [
            "Person.prototype is a property on the Person constructor function.",
            "person has an internal [[Prototype]] link.",
            "Object.getPrototypeOf(person) returns that linked prototype object.",
            "new Person() links person to Person.prototype.",
          ],
        },
        {
          type: "highlight",
          variant: "important",
          text: "Person.prototype is not the prototype of Person itself. It is the object used as the prototype of instances created with new Person().",
        },
      ],
    },

    {
      id: "how-new-works",
      title: "What Does the new Keyword Do?",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `function Person(name) {
  this.name = name;
}

const person = new Person("Deepak");`,
        },
        {
          type: "text",
          text: "When new Person('Deepak') runs, JavaScript performs several steps automatically.",
        },
        {
          type: "list",
          items: [
            "Creates a new empty object.",
            "Links the object's [[Prototype]] to Person.prototype.",
            "Calls Person with this pointing to the new object.",
            "Returns the new object unless the constructor explicitly returns another object.",
          ],
        },
        {
          type: "code",
          language: "javascript",
          code: `// Simplified mental model

const person = {};

Object.setPrototypeOf(
  person,
  Person.prototype
);

Person.call(person, "Deepak");`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "The simplified code helps explain new, but JavaScript performs the actual construction internally.",
        },
      ],
    },

    {
      id: "prototype-chain-constructor",
      title: "Prototype Chain with Constructor Functions",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  return "Hello " + this.name;
};

const person = new Person("Deepak");`,
        },
        {
          type: "code",
          language: "text",
          code: `person
{
  name: "Deepak"
}
       ↓
Person.prototype
{
  sayHello()
}
       ↓
Object.prototype
{
  toString()
  hasOwnProperty()
  valueOf()
  ...
}
       ↓
null`,
        },
        {
          type: "text",
          text: "person can access its own properties, methods from Person.prototype, and methods further up the chain from Object.prototype.",
        },
      ],
    },

    {
      id: "es6-classes",
      title: "ES6 Classes and Prototypes",
      blocks: [
        {
          type: "text",
          text: "JavaScript classes provide cleaner syntax for constructor functions and prototype-based inheritance. JavaScript still uses prototypes underneath.",
        },
        {
          type: "code",
          language: "javascript",
          code: `class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return \`Hello \${this.name}\`;
  }
}

const p1 = new Person("Deepak");
const p2 = new Person("Rahul");

console.log(p1.greet());
// Hello Deepak

console.log(
  p1.greet === p2.greet
); // true

console.log(
  Object.getPrototypeOf(p1) === Person.prototype
); // true`,
        },
        {
          type: "text",
          text: "The greet() method is stored on Person.prototype, so instances share it.",
        },
        {
          type: "highlight",
          variant: "info",
          text: "class syntax does not replace prototypes. JavaScript classes are built on top of the prototype system.",
        },
      ],
    },

    {
      id: "class-inheritance",
      title: "Inheritance with extends and super",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return \`\${this.name} makes a sound\`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    return \`\${this.name} barks\`;
  }
}

const dog = new Dog("Rex");

console.log(dog.speak());
// Rex barks

console.log(dog instanceof Dog);
// true

console.log(dog instanceof Animal);
// true`,
        },
        {
          type: "text",
          text: "extends connects the prototype chains of the child and parent classes. super() calls the parent constructor.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "Inside a derived class constructor, super() must run before accessing this.",
        },
      ],
    },

    {
      id: "method-overriding",
      title: "Method Overriding and super",
      blocks: [
        {
          type: "text",
          text: "A child class can define a method with the same name as its parent. The child method then takes priority during property lookup.",
        },
        {
          type: "code",
          language: "javascript",
          code: `class Shape {
  getInfo() {
    return "I am a shape";
  }
}

class Circle extends Shape {
  getInfo() {
    return super.getInfo() + " and a circle";
  }
}

const circle = new Circle();

console.log(circle.getInfo());
// I am a shape and a circle`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "super.method() can be used inside a child method to call the parent implementation.",
        },
      ],
    },

    {
      id: "static-members",
      title: "Static Methods & Properties",
      blocks: [
        {
          type: "text",
          text: "Static members belong to the class or constructor itself rather than its instances.",
        },
        {
          type: "code",
          language: "javascript",
          code: `class MathUtils {
  static PI = 3.14159;

  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.PI);
// 3.14159

console.log(MathUtils.add(3, 4));
// 7

const utils = new MathUtils();

console.log(utils.add);
// undefined`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "Static methods are useful when functionality belongs to the class itself and does not depend on a particular instance.",
        },
      ],
    },

    {
      id: "modifying-built-in-prototypes",
      title: "Modifying Built-in Prototypes",
      blocks: [
        {
          type: "text",
          text: "JavaScript allows you to add methods to built-in prototypes such as Array.prototype.",
        },
        {
          type: "code",
          language: "javascript",
          code: `Array.prototype.last = function () {
  return this[this.length - 1];
};

const numbers = [10, 20, 30];

console.log(numbers.last());
// 30`,
        },
        {
          type: "text",
          text: "Because numbers inherits from Array.prototype, it can access the newly added last() method.",
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Avoid modifying built-in prototypes in application code. It affects all instances globally and can cause conflicts with libraries or future JavaScript features.",
        },
      ],
    },

    {
      id: "object-set-prototype",
      title: "Object.setPrototypeOf()",
      blocks: [
        {
          type: "text",
          text: "Object.setPrototypeOf() can manually change the prototype of an existing object.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const animal = {
  eat() {
    return "Eating...";
  },
};

const dog = {
  bark() {
    return "Woof!";
  },
};

Object.setPrototypeOf(dog, animal);

console.log(dog.bark());
// Woof!

console.log(dog.eat());
// Eating...

console.log(
  Object.getPrototypeOf(dog) === animal
); // true`,
        },
        {
          type: "code",
          language: "text",
          code: `dog
 ↓
animal
 ↓
Object.prototype
 ↓
null`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Object.setPrototypeOf() is useful for learning, but repeatedly changing prototype chains at runtime should generally be avoided because it can hurt JavaScript engine optimizations.",
        },
      ],
    },

    {
      id: "instanceof",
      title: "How instanceof Uses the Prototype Chain",
      blocks: [
        {
          type: "text",
          text: "The instanceof operator checks whether a constructor's prototype appears somewhere in an object's prototype chain.",
        },
        {
          type: "code",
          language: "javascript",
          code: `class Animal {}

class Dog extends Animal {}

const dog = new Dog();

console.log(dog instanceof Dog);
// true

console.log(dog instanceof Animal);
// true

console.log(dog instanceof Object);
// true`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "dog instanceof Animal is true because Animal.prototype exists somewhere in dog's prototype chain.",
        },
      ],
    },

    {
      id: "quick-revision",
      title: "Quick Revision",
      blocks: [
        {
          type: "title",
          text: "Property Lookup",
        },
        {
          type: "code",
          language: "javascript",
          code: `const obj = {
  name: "Deepak"
};

obj.name;
obj.toString();
obj.xyz;`,
        },
        {
          type: "code",
          language: "text",
          code: `obj.name

obj
 ↓
Found
 ↓
"Deepak"


obj.toString()

obj
 ↓
Not Found
 ↓
Object.prototype
 ↓
Found


obj.xyz

obj
 ↓
Not Found
 ↓
Object.prototype
 ↓
Not Found
 ↓
null
 ↓
undefined`,
        },
        {
          type: "title",
          text: "Important Prototype Chains",
        },
        {
          type: "code",
          language: "text",
          code: `Object literal

obj
 ↓
Object.prototype
 ↓
null


Array

arr
 ↓
Array.prototype
 ↓
Object.prototype
 ↓
null


Function

fn
 ↓
Function.prototype
 ↓
Object.prototype
 ↓
null


Constructor instance

person
 ↓
Person.prototype
 ↓
Object.prototype
 ↓
null`,
        },
      ],
    },

    {
      id: "interview-questions",
      title: "Interview Questions",
      blocks: [
        {
          type: "title",
          text: "1. What is a prototype?",
        },
        {
          type: "text",
          text: "A prototype is an object that another object can use to inherit properties and methods through its internal [[Prototype]] link.",
        },

        {
          type: "title",
          text: "2. What is the prototype chain?",
        },
        {
          type: "text",
          text: "The prototype chain is the sequence of prototype objects JavaScript searches when a property is not found directly on an object.",
        },

        {
          type: "title",
          text: "3. What is prototype vs __proto__?",
        },
        {
          type: "text",
          text: "prototype is a property on constructor functions used for instances created with new. __proto__ historically exposes an object's internal prototype. Prefer Object.getPrototypeOf() for reading it.",
        },

        {
          type: "title",
          text: "4. Why can arrays use map() and push()?",
        },
        {
          type: "text",
          text: "Because arrays inherit methods such as map() and push() from Array.prototype.",
        },

        {
          type: "title",
          text: "5. Why are prototype methods useful?",
        },
        {
          type: "text",
          text: "They allow multiple instances to share methods instead of storing separate function properties on every instance.",
        },

        {
          type: "title",
          text: "6. What happens when a property is not found?",
        },
        {
          type: "text",
          text: "JavaScript continues searching upward through the prototype chain. If it reaches null without finding the property, the result is undefined.",
        },

        {
          type: "title",
          text: "7. What does new do?",
        },
        {
          type: "list",
          items: [
            "Creates a new object.",
            "Links it to Constructor.prototype.",
            "Calls the constructor with this referring to the new object.",
            "Returns the object unless another object is explicitly returned.",
          ],
        },

        {
          type: "title",
          text: "8. Are JavaScript classes different from prototypes?",
        },
        {
          type: "text",
          text: "Classes provide cleaner syntax, but JavaScript's inheritance model is still prototype-based underneath.",
        },

        {
          type: "title",
          text: "9. How does instanceof work?",
        },
        {
          type: "text",
          text: "instanceof checks whether Constructor.prototype appears somewhere in the object's prototype chain.",
        },

        {
          type: "title",
          text: "10. Should we modify Array.prototype?",
        },
        {
          type: "text",
          text: "Usually no. Modifying built-in prototypes changes behavior globally and can create compatibility problems.",
        },
      ],
    },

    {
      id: "practice",
      title: "Practice Exercises",
      blocks: [
        {
          type: "list",
          items: [
            "Create a car object with brand and model. Check whether brand is an own property.",
            "Create an array and verify that push belongs to Array.prototype.",
            "Create a Student constructor and add study() through Student.prototype.",
            "Compare the prototypes of an object, array, and function.",
            "Create two Person instances and prove they share the same prototype method.",
            "Create Animal and Dog classes and test their relationship using instanceof.",
          ],
        },
        {
          type: "code",
          language: "javascript",
          code: `// 1
const car = {
  brand: "Toyota",
  model: "Fortuner",
};

// Is "brand" an own property?


// 2
const arr = [5, 10, 15];

// Does Array.prototype own "push"?


// 3
function Student(name) {
  // Your code
}

// Add study() to Student.prototype


// 4
const obj = {};
const numbers = [];

function greet() {}

console.log(Object.getPrototypeOf(obj));
console.log(Object.getPrototypeOf(numbers));
console.log(Object.getPrototypeOf(greet));`,
        },
      ],
    },

    {
      id: "final-summary",
      title: "Final Summary",
      blocks: [
        {
          type: "list",
          items: [
            "Objects can inherit properties and methods through prototypes.",
            "JavaScript searches the prototype chain when a property is missing.",
            "The prototype chain ends at null.",
            "Array methods are inherited from Array.prototype.",
            "Function methods are inherited from Function.prototype.",
            "Constructor.prototype contains members instances can inherit.",
            "new links a newly created object's prototype to Constructor.prototype.",
            "ES6 classes still use prototypes underneath.",
            "extends creates inheritance between classes.",
            "instanceof checks the prototype chain.",
            "Object.hasOwn() checks whether a property belongs directly to an object.",
            "Avoid modifying built-in prototypes in normal application code.",
          ],
        },
        {
          type: "highlight",
          variant: "important",
          text: "Core rule: JavaScript checks the object first. If the property is missing, it moves upward through the prototype chain until it finds the property or reaches null.",
        },
      ],
    },
  ],
};
