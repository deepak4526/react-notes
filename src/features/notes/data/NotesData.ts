import type { Note } from "../../../types/note";

export const notes: Note[] = [
  {
    id: 1,
    title: "useState",
    description: "Used to manage state in React",
    category: "Hooks",
  },
  {
    id: 2,
    title: "useEffect",
    description: "Used for side effects",
    category: "Hooks",
  },
];
export const variablesNotes = {
  title: "Variables in JavaScript",
  description:
    "Variables are used to store data values. In JavaScript, there are three ways to declare variables: var, let, and const.",

  sections: [
    {
      id: "var",
      title: "var",
      content: `
The 'var' keyword was used in older JavaScript versions before ES6.

🔹 Scope:
- Function scoped (not block scoped)
- Accessible outside blocks like if/for

🔹 Hoisting:
- Hoisted to the top
- Initialized with 'undefined'

🔹 Re-declaration:
- Allowed

🔹 Problems:
- Can lead to bugs due to scope leakage

Example:
var x = 10;
if (true) {
  var x = 20;
}
console.log(x); // 20 (overwritten)
      `,
    },
    {
      id: "let",
      title: "let",
      content: `
The 'let' keyword was introduced in ES6 and is preferred over var.

🔹 Scope:
- Block scoped
- Only accessible within the block {}

🔹 Hoisting:
- Hoisted but NOT initialized
- Cannot be used before declaration (Temporal Dead Zone)

🔹 Re-declaration:
- Not allowed in same scope

Example:
let x = 10;
if (true) {
  let x = 20;
  console.log(x); // 20
}
console.log(x); // 10
      `,
    },
    {
      id: "const",
      title: "const",
      content: `
The 'const' keyword is used for variables whose value should not change.

🔹 Scope:
- Block scoped

🔹 Hoisting:
- Same as let (Temporal Dead Zone)

🔹 Re-assignment:
- Not allowed

🔹 Important:
- Objects and arrays CAN be modified
- Only reference cannot change

Example:
const x = 10;
// x = 20; ❌ Error

const obj = { name: "John" };
obj.name = "Doe"; // ✅ Allowed
      `,
    },
  ],
};

export const closuresNotes = {
  title: "Closures in JavaScript",
  description:
    "A closure is a function that remembers and can access variables from its outer (lexical) scope even after the outer function has finished executing.",

  sections: [
    {
      id: "definition",
      title: "What is a Closure?",
      content: `
A closure is created when a function is defined inside another function and it retains access to the outer function's variables.

In simple terms:
👉 A function + its lexical scope = Closure

This means even if the outer function has finished execution, the inner function can still access its variables.

Example:
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2

Here, 'inner' remembers 'count' even after 'outer' has executed.
      `,
    },

    {
      id: "lexical-scope",
      title: "Lexical Scope (Important for Closures)",
      content: `
Closures work because of lexical scope.

👉 Lexical scope means:
Functions can access variables from where they were defined, not where they are called.

Example:
function outer() {
  let name = "Deepak";

  function inner() {
    console.log(name);
  }

  return inner;
}

const fn = outer();
fn(); // Deepak

Even though 'outer' is finished, 'inner' still accesses 'name'.
      `,
    },

    {
      id: "real-world-usage",
      title: "Real-world Usage of Closures",
      content: `
Closures are heavily used in real applications.

🔹 1. Data Privacy (Encapsulation)
function createUser() {
  let password = "12345";

  return {
    getPassword: function () {
      return password;
    },
  };
}

const user = createUser();
console.log(user.getPassword()); // 12345

👉 password is private (cannot access directly)

---

🔹 2. Counters / State Management
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const c = counter();
c(); // 1
c(); // 2

---

🔹 3. Event Handlers / Callbacks
Closures are used in:
- React hooks
- setTimeout
- Event listeners

They remember state between executions.
      `,
    },

    {
      id: "common-interview-question",
      title: "Common Interview Question",
      content: `
❓ Question:
What will be the output?

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

👉 Output:
3
3
3

❗ Why?
Because 'var' is function scoped and all closures share the same 'i'

---

✅ Fix using 'let':

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

👉 Output:
0
1
2

Because 'let' creates a new block scope for each iteration.
      `,
    },

    {
      id: "advantages",
      title: "Advantages of Closures",
      content: `
✔ Data encapsulation (private variables)
✔ State persistence
✔ Functional programming patterns
✔ Useful in async programming

Closures are the backbone of many JavaScript patterns.
      `,
    },

    {
      id: "disadvantages",
      title: "Disadvantages of Closures",
      content: `
❗ Memory usage:
Closures keep references to outer variables → may increase memory

❗ Debugging difficulty:
Can be confusing for beginners

❗ Performance:
Excessive closures can slow down apps if misused
      `,
    },

    {
      id: "summary",
      title: "Summary",
      content: `
👉 Closure = Function + Lexical Scope

👉 Key points:
- Inner function remembers outer variables
- Works even after outer function is executed
- Used in real-world patterns like:
  - React hooks
  - Callbacks
  - Private variables

Closures are one of the MOST IMPORTANT concepts in JavaScript.
      `,
    },
  ],
};
