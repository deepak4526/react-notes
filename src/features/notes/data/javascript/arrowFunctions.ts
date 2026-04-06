import type { NotePageData } from "../../../../types/note";

export const arrowFunctionsNotes: NotePageData = {
  title: "Arrow Functions",
  description:
    "Arrow functions are a shorter way to write functions introduced in ES6. They also behave differently with 'this', which makes them very important in React event handlers and hooks.",
  sections: [
    {
      id: "syntax",
      title: "Syntax — Regular vs Arrow Functions",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `// Regular function declaration
function greet(name) {
  return "Hello, " + name;
}

// Regular function expression
const greet = function(name) {
  return "Hello, " + name;
};

// ✅ Arrow function
const greet = (name) => {
  return "Hello, " + name;
};

// ✅ Implicit return — single expression, no braces needed
const greet = (name) => "Hello, " + name;

// ✅ Single param — can drop parentheses
const greet = name => "Hello, " + name;

// ✅ No params — empty parens required
const sayHi = () => "Hi!";`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "If the function body is a single expression, you can drop the {} and return keyword. This is called implicit return.",
        },
      ],
    },
    {
      id: "implicit-return",
      title: "Implicit Return — Including Objects",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `// Returning a value
const double = n => n * 2;
double(5); // 10

// ❌ Returning an object — this looks like a function body!
const getUser = () => { name: "Deepak" }; // undefined!

// ✅ Wrap object in parentheses to return it
const getUser = () => ({ name: "Deepak", age: 25 });
getUser(); // { name: "Deepak", age: 25 }

// Very common in React with .map()
const users = [{ id: 1, name: "Deepak" }, { id: 2, name: "Raj" }];
const names = users.map(user => user.name);
// ["Deepak", "Raj"]`,
        },
      ],
    },
    {
      id: "this-context",
      title: "The 'this' Difference — Most Important!",
      blocks: [
        {
          type: "text",
          text: "The biggest difference between regular functions and arrow functions is how they handle 'this'. Arrow functions do NOT have their own 'this' — they inherit it from the surrounding scope.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// Regular function — 'this' depends on HOW it is called
const obj = {
  name: "Deepak",
  greet: function() {
    console.log(this.name); // "Deepak" — this = obj
  },
  greetArrow: () => {
    console.log(this.name); // undefined — arrow has no own 'this'
  },
};

obj.greet();       // "Deepak"
obj.greetArrow();  // undefined`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// Arrow functions inherit 'this' from surrounding scope
// This makes them great for callbacks inside methods

const timer = {
  seconds: 0,

  // ❌ Regular function loses 'this' inside setTimeout
  startBad: function() {
    setInterval(function() {
      this.seconds++; // 'this' is undefined here!
    }, 1000);
  },

  // ✅ Arrow function inherits 'this' from startGood
  startGood: function() {
    setInterval(() => {
      this.seconds++; // ✅ 'this' is still the timer object
    }, 1000);
  },
};`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "In React, always use arrow functions for event handlers and callbacks inside components — they correctly inherit 'this' from the component scope.",
        },
      ],
    },
    {
      id: "in-react",
      title: "Arrow Functions in React",
      blocks: [
        {
          type: "text",
          text: "Arrow functions are used constantly in React — for component definitions, event handlers, array methods, and hooks.",
        },
        {
          type: "code",
          language: "jsx",
          code: `// 1. Functional components (arrow style — very common)
const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

// 2. Event handlers
const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return <form onSubmit={handleSubmit}>...</form>;
};

// 3. Inline in JSX
<button onClick={() => setCount(count + 1)}>Add</button>

// 4. Array methods in JSX
const items = ["React", "Vue", "Angular"];
return (
  <ul>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Avoid defining heavy functions inline in JSX (like onClick={() => heavyWork()}) — it recreates the function on every render. Move it outside and use useCallback if needed.",
        },
      ],
    },
  ],
};
