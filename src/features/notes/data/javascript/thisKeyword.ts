import type { NotePageData } from "../../../../types/note";

export const thisKeywordNotes: NotePageData = {
  title: "The 'this' Keyword",
  description:
    "'this' refers to the object that is currently executing the function. Its value depends on HOW the function is called — not where it is defined.",
  sections: [
    {
      id: "what-is-this",
      title: "What is 'this'?",
      blocks: [
        {
          type: "text",
          text: "'this' is a special keyword that refers to the context in which a function is executed. It is determined at runtime, not at the time of writing the function.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "The value of 'this' is NOT about where the function is defined — it is about HOW and WHERE it is called.",
        },
        {
          type: "list",
          items: [
            "In the global scope → 'this' is the global object (window in browser, global in Node)",
            "In a regular function → 'this' depends on how it's called",
            "In an arrow function → 'this' is inherited from the surrounding (lexical) scope",
            "In a method → 'this' refers to the object the method belongs to",
            "In a class → 'this' refers to the instance",
          ],
        },
      ],
    },
    {
      id: "global-context",
      title: "Global & Regular Function Context",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `// Global context
console.log(this); // window (in browser)

// Regular function
function greet() {
  console.log(this); // window (non-strict) | undefined (strict mode)
}
greet();

// Strict mode
"use strict";
function greetStrict() {
  console.log(this); // undefined
}
greetStrict();`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "In strict mode ('use strict'), 'this' inside a regular function is undefined — not the global object.",
        },
      ],
    },
    {
      id: "method-context",
      title: "Method Context",
      blocks: [
        {
          type: "text",
          text: "When a function is called as a method of an object, 'this' refers to that object.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
  greet() {
    console.log("Hello, " + this.name); // Hello, Deepak
  },
};

user.greet(); // 'this' = user object

// ❗ Detaching a method loses 'this'
const fn = user.greet;
fn(); // 'this' = undefined/window — name is undefined!`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "If you extract a method from an object and call it independently, 'this' is lost. This is a very common bug.",
        },
      ],
    },
    {
      id: "arrow-functions",
      title: "Arrow Functions & 'this'",
      blocks: [
        {
          type: "text",
          text: "Arrow functions do NOT have their own 'this'. They inherit 'this' from the surrounding (lexical) scope at the time they are defined.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const timer = {
  name: "Timer",
  start() {
    // ❌ Regular function — 'this' is lost inside setTimeout
    setTimeout(function () {
      console.log(this.name); // undefined
    }, 1000);

    // ✅ Arrow function — inherits 'this' from start()
    setTimeout(() => {
      console.log(this.name); // "Timer"
    }, 1000);
  },
};

timer.start();`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Arrow functions are the modern solution to the 'this' problem inside callbacks and event handlers.",
        },
      ],
    },
    {
      id: "explicit-binding",
      title: "Explicit Binding: call, apply, bind",
      blocks: [
        {
          type: "text",
          text: "You can explicitly set the value of 'this' using call(), apply(), and bind().",
        },
        {
          type: "code",
          language: "javascript",
          code: `function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const user = { name: "Deepak" };

// call — invoke immediately, pass args one by one
greet.call(user, "Hello", "!");       // Hello, Deepak!

// apply — invoke immediately, pass args as array
greet.apply(user, ["Hi", "."]);       // Hi, Deepak.

// bind — returns a NEW function with 'this' permanently bound
const boundGreet = greet.bind(user);
boundGreet("Hey", "~");               // Hey, Deepak~`,
        },
        {
          type: "list",
          items: [
            "call(thisArg, arg1, arg2) — call immediately with args",
            "apply(thisArg, [args]) — call immediately with args as array",
            "bind(thisArg) — returns a new function with 'this' fixed",
          ],
        },
      ],
    },
    {
      id: "class-context",
      title: "'this' in Classes",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `class Person {
  constructor(name) {
    this.name = name; // 'this' = new instance
  }

  greet() {
    console.log("Hi, I'm " + this.name);
  }

  // Problem: passing method as callback loses 'this'
  delayedGreet() {
    setTimeout(this.greet, 1000);     // ❌ 'this' lost

    // Fix 1: arrow function wrapper
    setTimeout(() => this.greet(), 1000); // ✅

    // Fix 2: bind in constructor
    // this.greet = this.greet.bind(this);
  }
}

const p = new Person("Deepak");
p.greet(); // Hi, I'm Deepak`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "In React class components, always bind event handlers in the constructor OR use class field arrow functions to avoid 'this' issues.",
        },
      ],
    },
    {
      id: "summary",
      title: "Quick Reference Summary",
      blocks: [
        {
          type: "list",
          items: [
            "Global scope → window / global",
            "Regular function (non-strict) → window / global",
            "Regular function (strict) → undefined",
            "Method call obj.fn() → obj",
            "Arrow function → inherits from enclosing scope (lexical this)",
            "call / apply / bind → explicitly set 'this'",
            "Class constructor / method → instance of the class",
          ],
        },
      ],
    },
  ],
};
