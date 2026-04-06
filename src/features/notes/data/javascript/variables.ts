import type { NotePageData } from "../../../../types/note";

export const variablesNotes: NotePageData = {
  title: "Variables in JavaScript",
  description:
    "Variables are containers for storing data. In JavaScript you can declare variables using var, let, or const — each with different scoping and mutability rules.",
  sections: [
    {
      id: "var",
      title: "var — The Old Way",
      blocks: [
        {
          type: "text",
          text: "The 'var' keyword was the original way to declare variables before ES6 (2015). It has some tricky behaviors that cause bugs, which is why it is no longer recommended.",
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Avoid using var in modern JavaScript. Always use let or const instead.",
        },
        {
          type: "list",
          items: [
            "Function-scoped — NOT block-scoped (leaks out of if/for blocks)",
            "Hoisted to the top and initialized with undefined",
            "Can be re-declared in the same scope (dangerous!)",
            "Can be reassigned freely",
          ],
        },
        {
          type: "code",
          language: "javascript",
          code: `// ❌ var leaks out of blocks
var x = 10;
if (true) {
  var x = 20;  // Same variable — overwrites the outer x!
}
console.log(x); // 20 ← unexpected!

// ❌ Hoisting — var is usable before declaration
console.log(name); // undefined (no ReferenceError!)
var name = "Deepak";

// ❌ Re-declaration is allowed (silently dangerous)
var user = "Alice";
var user = "Bob"; // No error, just overwrites
console.log(user); // "Bob"`,
        },
      ],
    },
    {
      id: "let",
      title: "let — Block Scoped Variable",
      blocks: [
        {
          type: "text",
          text: "Introduced in ES6, 'let' is block-scoped and prevents re-declaration. Use it whenever you need a variable whose value will change.",
        },
        {
          type: "list",
          items: [
            "Block-scoped — only accessible inside the { } block it was declared in",
            "Hoisted but NOT initialized (Temporal Dead Zone — TDZ)",
            "Cannot be re-declared in the same scope",
            "CAN be reassigned",
          ],
        },
        {
          type: "code",
          language: "javascript",
          code: `// ✅ Block scope — no leaking
let x = 10;
if (true) {
  let x = 20;     // Completely new variable (block scoped)
  console.log(x); // 20
}
console.log(x);   // 10 ← original unchanged!

// ✅ Great for loop counters
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
// console.log(i); ❌ ReferenceError — i doesn't exist here

// ❌ Temporal Dead Zone
console.log(age); // ❌ ReferenceError — cannot access before init
let age = 25;

// ❌ Re-declaration not allowed
let city = "Mumbai";
let city = "Delhi"; // ❌ SyntaxError`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Use let for loop counters, values that change conditionally, and any variable you plan to reassign.",
        },
      ],
    },
    {
      id: "const",
      title: "const — Constant Reference",
      blocks: [
        {
          type: "text",
          text: "const is block-scoped and cannot be reassigned after declaration. It is the default choice in modern JavaScript and React — use it unless you specifically need to reassign.",
        },
        {
          type: "list",
          items: [
            "Block-scoped (same as let)",
            "Cannot be reassigned after declaration",
            "Cannot be re-declared",
            "Objects and Arrays declared with const CAN still be mutated",
          ],
        },
        {
          type: "code",
          language: "javascript",
          code: `const x = 10;
// x = 20; ❌ TypeError: Assignment to constant variable

// ✅ Objects — reference is fixed, but properties CAN change
const user = { name: "Deepak", age: 25 };
user.name = "Kumar"; // ✅ Mutating a property — allowed
user.age = 26;       // ✅ Allowed
// user = {};        // ❌ Reassigning the variable — not allowed

// ✅ Arrays — reference is fixed, but contents CAN change
const fruits = ["apple", "mango"];
fruits.push("banana"); // ✅ Allowed
fruits[0] = "grapes";  // ✅ Allowed
// fruits = [];         // ❌ Not allowed`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "const does NOT mean the value is immutable. It means the variable REFERENCE cannot change. Objects and arrays can still be modified internally.",
        },
      ],
    },
    {
      id: "comparison",
      title: "var vs let vs const — Quick Reference",
      blocks: [
        {
          type: "code",
          language: "text",
          code: `Feature            │  var          │  let          │  const
───────────────────┼───────────────┼───────────────┼──────────────
Scope              │  Function     │  Block        │  Block
Hoisting           │  ✅ undefined │  ✅ TDZ       │  ✅ TDZ
Re-declaration     │  ✅ Allowed   │  ❌ Error     │  ❌ Error
Re-assignment      │  ✅ Allowed   │  ✅ Allowed   │  ❌ Error
Use in 2025?       │  ❌ Avoid     │  ✅ Sometimes  │  ✅ Default`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Golden Rule: Always start with const → switch to let only if you need to reassign → never use var.",
        },
      ],
    },
  ],
};
