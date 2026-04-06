import type { NotePageData } from "../../../../types/note";

export const jsxNotes: NotePageData = {
  title: "JSX — JavaScript XML",
  description:
    "JSX lets you write HTML-like syntax inside JavaScript. It looks like HTML but it's actually JavaScript. Understanding JSX rules prevents a lot of beginner errors.",
  sections: [
    {
      id: "what-is-jsx",
      title: "What is JSX?",
      blocks: [
        {
          type: "text",
          text: "JSX is a syntax extension for JavaScript. It gets compiled by Babel/TypeScript into regular JavaScript (React.createElement calls) before running in the browser.",
        },
        {
          type: "code",
          language: "jsx",
          code: `// What you write:
const element = <h1 className="title">Hello, World!</h1>;

// What it compiles to:
const element = React.createElement(
  "h1",
  { className: "title" },
  "Hello, World!"
);`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "You don't need to import React in every file since React 17 — the new JSX transform handles it automatically.",
        },
      ],
    },
    {
      id: "jsx-rules",
      title: "JSX Rules — Must Know",
      blocks: [
        {
          type: "list",
          items: [
            "Must return a SINGLE root element (wrap multiple elements in <div> or <>...</>)",
            "Use className instead of class (class is a reserved word in JS)",
            "Use htmlFor instead of for (on labels)",
            "All tags must be closed — self-closing tags must have / (<img />, <input />)",
            "Use camelCase for event and style attributes (onClick, backgroundColor)",
            "Expressions go inside curly braces { }",
          ],
        },
        {
          type: "code",
          language: "jsx",
          code: `// ❌ Multiple root elements — error!
return (
  <h1>Title</h1>
  <p>Paragraph</p>
);

// ✅ Wrap in a parent element
return (
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
);

// ✅ Use Fragment to avoid extra div
return (
  <>
    <h1>Title</h1>
    <p>Paragraph</p>
  </>
);`,
        },
        {
          type: "code",
          language: "jsx",
          code: `// HTML vs JSX differences
// HTML:       <div class="box" for="name">
// JSX:        <div className="box" htmlFor="name">

// HTML:       <img src="..." >
// JSX:        <img src="..." />   (must close!)

// HTML:       <input type="text">
// JSX:        <input type="text" />

// Inline styles — object with camelCase
<div style={{ backgroundColor: "red", fontSize: "16px" }}>
// NOT: style="background-color: red"`,
        },
      ],
    },
    {
      id: "expressions",
      title: "Expressions in JSX — { }",
      blocks: [
        {
          type: "text",
          text: "Anything inside { } is treated as a JavaScript expression. You can embed variables, function calls, ternaries, and array methods.",
        },
        {
          type: "code",
          language: "jsx",
          code: `const name = "Deepak";
const age = 25;
const isLoggedIn = true;
const items = ["React", "Vue", "Angular"];

return (
  <div>
    {/* Variable */}
    <h1>Hello, {name}!</h1>

    {/* Expression */}
    <p>Born in {2025 - age}</p>

    {/* Ternary (conditional) */}
    <p>{isLoggedIn ? "Welcome back!" : "Please log in"}</p>

    {/* Short-circuit rendering */}
    {isLoggedIn && <button>Logout</button>}

    {/* Array — render list */}
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>

    {/* Function call */}
    <p>{name.toUpperCase()}</p>
  </div>
);`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "You CANNOT use statements in JSX (if, for, while). Only expressions are allowed. Use ternary or && for conditionals, and .map() for loops.",
        },
      ],
    },
    {
      id: "comments",
      title: "Comments & Fragments",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// JSX Comments — must be inside { }
return (
  <div>
    {/* This is a JSX comment — use this, not // */}
    <h1>Hello</h1>
  </div>
);

// Fragment — avoids extra divs in DOM
import { Fragment } from "react";

// Long form
return (
  <Fragment>
    <tr><td>Name</td></tr>
    <tr><td>Age</td></tr>
  </Fragment>
);

// Short form (most common)
return (
  <>
    <tr><td>Name</td></tr>
    <tr><td>Age</td></tr>
  </>
);

// Fragment with key (only long form supports key)
return items.map(item => (
  <Fragment key={item.id}>
    <dt>{item.label}</dt>
    <dd>{item.value}</dd>
  </Fragment>
));`,
        },
      ],
    },
  ],
};
