import type { NotePageData } from "../../../../types/note";

export const hoistingNotes: NotePageData = {
  title: "Hoisting",
  description:
    "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code is executed. Understanding it prevents many confusing bugs.",
  sections: [
    {
      id: "what-is-hoisting",
      title: "What is Hoisting?",
      blocks: [
        {
          type: "text",
          text: "During the compilation phase, JavaScript scans and allocates memory for variable and function declarations BEFORE executing any code. This gives the impression that declarations are 'moved' to the top.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "Only DECLARATIONS are hoisted — not INITIALIZATIONS. The variable exists, but its value is undefined until the assignment line runs.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// What you write
console.log(x); // undefined (not ReferenceError!)
var x = 5;
console.log(x); // 5

// What JavaScript actually does internally
var x;          // declaration hoisted to top
console.log(x); // undefined
x = 5;          // assignment stays in place
console.log(x); // 5`,
        },
      ],
    },
    {
      id: "var-hoisting",
      title: "var — Hoisted with undefined",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `// var is hoisted to the top of its FUNCTION scope
function example() {
  console.log(name); // undefined (hoisted, but not assigned)
  var name = "Deepak";
  console.log(name); // "Deepak"
}
example();

// var ignores block scope — hoisted to function top
function blockExample() {
  if (true) {
    var x = 10; // hoisted to top of function, not just the if block
  }
  console.log(x); // 10 — accessible here!
}`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "var hoisting is a source of many bugs. Always prefer let and const which are also hoisted but NOT initialized (Temporal Dead Zone).",
        },
      ],
    },
    {
      id: "let-const-hoisting",
      title: "let & const — Temporal Dead Zone (TDZ)",
      blocks: [
        {
          type: "text",
          text: "let and const ARE hoisted, but they are NOT initialized. Accessing them before their declaration throws a ReferenceError. The period between hoisting and initialization is called the Temporal Dead Zone (TDZ).",
        },
        {
          type: "code",
          language: "javascript",
          code: `// let — Temporal Dead Zone
console.log(age); // ❌ ReferenceError: Cannot access 'age' before initialization
let age = 25;
console.log(age); // 25

// const — same TDZ behavior
console.log(PI); // ❌ ReferenceError
const PI = 3.14;

// TDZ visualized
// [Start of block] ← TDZ begins (let/const hoisted but uninitialized)
// ...
// let age = 25;   ← TDZ ends — variable is now accessible
// ...`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "The Temporal Dead Zone is actually a SAFETY FEATURE — it prevents you from accidentally using a variable before it has a value.",
        },
      ],
    },
    {
      id: "function-hoisting",
      title: "Function Declarations vs Expressions",
      blocks: [
        {
          type: "text",
          text: "Function DECLARATIONS are fully hoisted — both the name and the body. Function EXPRESSIONS (assigned to variables) are NOT fully hoisted.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// ✅ Function Declaration — fully hoisted, callable before definition
greet(); // "Hello!" — works!

function greet() {
  console.log("Hello!");
}

// ❌ Function Expression — treated like a variable (var)
sayHi(); // TypeError: sayHi is not a function

var sayHi = function() {
  console.log("Hi!");
};

// ❌ Arrow function — same as function expression
callMe(); // TypeError: callMe is not a function

var callMe = () => {
  console.log("Called!");
};`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "This is why many developers prefer function declarations for top-level functions — they can be called anywhere in the file regardless of order.",
        },
      ],
    },
    {
      id: "class-hoisting",
      title: "Class Hoisting",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `// ❌ Classes are hoisted but NOT initialized (TDZ — like let/const)
const p = new Person(); // ❌ ReferenceError

class Person {
  constructor() {
    this.name = "Deepak";
  }
}

// ✅ Must define class before using it
class Animal {
  speak() { return "..."; }
}
const a = new Animal(); // ✅ Works fine`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "Unlike function declarations, classes are NOT callable before their definition. Always define classes before instantiating them.",
        },
      ],
    },
    {
      id: "best-practices",
      title: "Best Practices to Avoid Hoisting Bugs",
      blocks: [
        {
          type: "list",
          items: [
            "Always use let / const instead of var — TDZ prevents accidental early use",
            "Declare variables at the TOP of their scope to make code intention clear",
            "Define functions before calling them (even though declarations are hoisted)",
            "Enable 'use strict' — catches undeclared variable usage",
            "Use ESLint — the no-use-before-define rule enforces this automatically",
          ],
        },
      ],
    },
  ],
};
