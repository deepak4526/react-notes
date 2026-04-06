import type { NotePageData } from "../../../../types/note";

export const scopeNotes: NotePageData = {
  title: "Scope & Execution Context",
  description:
    "Scope defines the accessibility of variables. Execution Context is the environment in which JavaScript code is evaluated and executed. Understanding both is essential for writing bug-free JS.",
  sections: [
    {
      id: "types-of-scope",
      title: "Types of Scope",
      blocks: [
        {
          type: "list",
          items: [
            "Global Scope — variables declared outside any function or block; accessible everywhere",
            "Function Scope — variables declared inside a function; only accessible within it",
            "Block Scope — variables declared with let/const inside {}; only accessible within that block",
            "Module Scope — variables in an ES module are scoped to that file by default",
          ],
        },
        {
          type: "code",
          language: "javascript",
          code: `const globalVar = "I'm global"; // Global scope

function example() {
  const funcVar = "I'm function-scoped"; // Function scope

  if (true) {
    const blockVar = "I'm block-scoped"; // Block scope
    var funcLevelVar = "I'm function-scoped (var)"; // ⚠️ NOT block-scoped
    console.log(blockVar);    // ✅ visible here
  }
  console.log(funcLevelVar);  // ✅ accessible due to var hoisting
  // console.log(blockVar);   // ❌ ReferenceError
}

console.log(globalVar); // ✅ accessible
// console.log(funcVar); // ❌ ReferenceError`,
        },
      ],
    },
    {
      id: "scope-chain",
      title: "Scope Chain",
      blocks: [
        {
          type: "text",
          text: "When JavaScript looks up a variable, it searches the current scope first, then moves outward through parent scopes until it finds it — or throws a ReferenceError. This is called the scope chain.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const a = "global";

function outer() {
  const b = "outer";

  function inner() {
    const c = "inner";
    console.log(c); // ✅ found in inner scope
    console.log(b); // ✅ found in outer scope (scope chain)
    console.log(a); // ✅ found in global scope (scope chain)
  }

  inner();
  // console.log(c); // ❌ ReferenceError — inner scope not accessible from outer
}

outer();`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "The scope chain only goes OUTWARD (inner → outer → global). Outer scopes cannot access inner scope variables.",
        },
      ],
    },
    {
      id: "lexical-scope",
      title: "Lexical Scope",
      blocks: [
        {
          type: "text",
          text: "JavaScript uses LEXICAL scoping (also called static scoping). The scope of a variable is determined by WHERE it is written in the source code — not where the function is called.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const name = "Deepak";

function greet() {
  console.log("Hello, " + name); // uses 'name' from where it was DEFINED
}

function runGreet() {
  const name = "Someone Else"; // different 'name' in this function's scope
  greet(); // greet still uses its OWN lexical scope
}

runGreet(); // prints: "Hello, Deepak" — NOT "Hello, Someone Else"`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "Lexical scope is the foundation of closures in JavaScript. Functions remember where they were defined, not where they're called from.",
        },
      ],
    },
    {
      id: "execution-context",
      title: "Execution Context",
      blocks: [
        {
          type: "text",
          text: "An Execution Context (EC) is the environment in which JavaScript code runs. Every time a function is called, a new EC is created and pushed onto the Call Stack.",
        },
        {
          type: "list",
          items: [
            "Global Execution Context (GEC) — created when the script first runs; only one exists",
            "Function Execution Context (FEC) — created each time a function is invoked",
            "Each EC has: Variable Environment, Scope Chain, and 'this' binding",
          ],
        },
        {
          type: "code",
          language: "javascript",
          code: `// Each function call creates a new Execution Context
function multiply(x, y) {
  return x * y; // FEC: { x: 3, y: 4 }
}

function square(n) {
  return multiply(n, n); // FEC: { n: 3 }
}

// Call Stack (LIFO):
// [Global EC]
// [square EC]   ← pushed when square(3) called
// [multiply EC] ← pushed when multiply(3,3) called
// [multiply EC] ← popped when it returns 9
// [square EC]   ← popped when it returns 9
// [Global EC]

const result = square(3); // 9`,
        },
      ],
    },
    {
      id: "call-stack",
      title: "The Call Stack",
      blocks: [
        {
          type: "text",
          text: "The Call Stack is a LIFO (Last In, First Out) data structure that tracks all active Execution Contexts. When a function is called it's pushed; when it returns it's popped.",
        },
        {
          type: "code",
          language: "javascript",
          code: `function c() { console.log("C running"); }
function b() { c(); }
function a() { b(); }

a();

// Call Stack trace:
// 1. main()  → Global EC pushed
// 2. a()     → a's EC pushed
// 3. b()     → b's EC pushed
// 4. c()     → c's EC pushed
// 5. c()     → c finishes, EC popped
// 6. b()     → b finishes, EC popped
// 7. a()     → a finishes, EC popped
// 8. main()  → script done, Global EC popped`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Stack Overflow occurs when the call stack exceeds its limit — usually caused by infinite recursion (a function that calls itself without a base case).",
        },
      ],
    },
    {
      id: "variable-shadowing",
      title: "Variable Shadowing",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `let count = 0; // outer

function increment() {
  let count = 100; // ← shadows outer 'count'
  count++;
  console.log(count); // 101 — the inner one
}

increment();
console.log(count); // 0 — outer unchanged

// Shadowing with blocks
let x = "global";
{
  let x = "block"; // shadows outer x
  console.log(x); // "block"
}
console.log(x); // "global"`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Variable shadowing is not an error — it's intentional scoping. But excessive shadowing makes code hard to follow. Use descriptive, unique variable names.",
        },
      ],
    },
  ],
};
