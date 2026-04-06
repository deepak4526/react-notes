import type { NotePageData } from "../../../../types/note";

export const dataTypesNotes: NotePageData = {
  title: "Data Types in JavaScript",
  description:
    "JavaScript has two categories of data types: Primitive (stored by value, immutable) and Reference (stored by reference, mutable). Understanding this difference is essential for React development.",
  sections: [
    {
      id: "primitives",
      title: "Primitive Types (7 types)",
      blocks: [
        {
          type: "text",
          text: "Primitives are the building blocks. They are immutable and compared/copied by VALUE.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// 1. String — text
const name = "Deepak";
const greeting = \`Hello, \${name}!\`; // template literal

// 2. Number — integers and floats (no separate int/float)
const age = 25;
const price = 9.99;
const invalid = NaN;      // result of bad math
const huge = Infinity;

// 3. Boolean — true or false only
const isLoggedIn = true;
const hasError = false;

// 4. Undefined — declared but no value assigned
let x;
console.log(x); // undefined

// 5. Null — intentional "no value" (you set this)
const user = null;

// 6. Symbol — unique identifier (rarely used directly)
const id = Symbol("id");

// 7. BigInt — very large integers beyond Number.MAX_SAFE_INTEGER
const bigNum = 9007199254740991n;`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "Primitives are copied by VALUE — changing the copy does NOT affect the original.",
        },
        {
          type: "code",
          language: "javascript",
          code: `let a = 10;
let b = a;   // b is a COPY of the value
b = 99;
console.log(a); // 10 ← unchanged (separate copy)`,
        },
      ],
    },
    {
      id: "reference-types",
      title: "Reference Types (Objects, Arrays, Functions)",
      blocks: [
        {
          type: "text",
          text: "Reference types store a pointer (memory address) to the data — not the data itself. This is why copying them behaves differently from primitives.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// Object — key-value pairs
const user = { name: "Deepak", age: 25 };

// Array — ordered list
const fruits = ["apple", "mango", "banana"];

// Function — callable block
function greet(name) {
  return \`Hello, \${name}\`;
}`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Reference types are copied by REFERENCE — both variables point to the SAME object in memory!",
        },
        {
          type: "code",
          language: "javascript",
          code: `const a = { x: 1 };
const b = a;       // b points to the SAME object
b.x = 99;
console.log(a.x);  // 99 ← a was changed too! (common React bug)

// ✅ Create a real copy using spread
const c = { ...a };  // new object, separate reference
c.x = 0;
console.log(a.x);    // 99 ← unchanged

// ✅ Copy an array
const arr = [1, 2, 3];
const arrCopy = [...arr]; // spread creates a new array`,
        },
      ],
    },
    {
      id: "typeof",
      title: "typeof — Checking Types",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `typeof "hello"        // "string"
typeof 42             // "number"
typeof true           // "boolean"
typeof undefined      // "undefined"
typeof Symbol()       // "symbol"
typeof 42n            // "bigint"
typeof function(){}   // "function"

typeof {}             // "object"
typeof []             // "object"  ← arrays are objects too!
typeof null           // "object"  ← famous JS bug (legacy)`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "To check if something is an array, use Array.isArray(value). To check for null, use value === null.",
        },
        {
          type: "code",
          language: "javascript",
          code: `Array.isArray([]);   // true
Array.isArray({});   // false

null === null;       // true
typeof null;         // "object" ← don't use this for null check`,
        },
      ],
    },
    {
      id: "coercion",
      title: "Type Coercion — Truthy, Falsy & Conversions",
      blocks: [
        {
          type: "text",
          text: "JavaScript automatically converts types in certain situations. Knowing truthy/falsy values is essential in React for conditional rendering.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// Falsy values (evaluate to false in conditions)
false, 0, "", null, undefined, NaN

// Truthy values (everything else)
"0", [], {}, 1, "false", -1

// Common in React conditional rendering:
const count = 0;
// ❌ Bug — 0 renders as "0" on screen!
return <div>{count && <p>Has items</p>}</div>;

// ✅ Fix — convert to boolean
return <div>{count > 0 && <p>Has items</p>}</div>;
return <div>{!!count && <p>Has items</p>}</div>;`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// Explicit type conversion (always prefer this)
String(42)         // "42"
Number("42")       // 42
Number("")         // 0
Number("abc")      // NaN
Boolean(0)         // false
Boolean("hello")   // true

// == vs === (always use ===)
"5" == 5           // true  (coerces types first)
"5" === 5          // false (no coercion — strict!)`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "Always use === (triple equals) for comparisons in JavaScript. Never use == (double equals) — it causes type coercion bugs.",
        },
      ],
    },
  ],
};
