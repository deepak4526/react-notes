import type { NotePageData } from "../../../../types/note";

export const modulesNotes: NotePageData = {
  title: "Modules — import & export",
  description:
    "ES6 modules let you split your code into separate files and share code between them. Every React file you write uses modules — understanding them is essential.",
  sections: [
    {
      id: "named-exports",
      title: "Named Exports",
      blocks: [
        {
          type: "text",
          text: "Named exports allow you to export multiple things from a single file. The import must use the exact same name inside curly braces {}.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// math.js — named exports
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Can also export at bottom
const subtract = (a, b) => a - b;
export { subtract };`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// main.js — importing named exports
import { add, multiply, PI } from "./math.js";

console.log(PI);          // 3.14159
console.log(add(2, 3));   // 5

// Import with alias (rename)
import { multiply as mult } from "./math.js";
mult(3, 4); // 12

// Import everything as a namespace object
import * as Math from "./math.js";
Math.add(1, 2); // 3
Math.PI;        // 3.14159`,
        },
      ],
    },
    {
      id: "default-exports",
      title: "Default Exports",
      blocks: [
        {
          type: "text",
          text: "Each file can have ONE default export. When importing a default export, you can name it anything you want — no curly braces needed.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// Button.js — default export
const Button = ({ label }) => <button>{label}</button>;

export default Button;

// Or inline:
export default function Button({ label }) {
  return <button>{label}</button>;
}`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// App.js — importing default export
import Button from "./Button";     // named whatever you want
import Btn from "./Button";        // also valid — same component
import MyButton from "./Button";   // also valid

// Mixing default and named imports
import React, { useState, useEffect } from "react";
//     ↑ default             ↑ named exports`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Convention: Use default export for the main thing a file provides (a component, a class, a function). Use named exports for utilities, helpers, and constants.",
        },
      ],
    },
    {
      id: "re-exporting",
      title: "Re-exporting — index.ts Pattern",
      blocks: [
        {
          type: "text",
          text: "The index.ts (barrel) pattern groups multiple exports together so consumers can import from one clean path.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// components/Button.tsx
export default function Button() { ... }

// components/Input.tsx
export default function Input() { ... }

// components/index.ts — barrel file
export { default as Button } from "./Button";
export { default as Input } from "./Input";

// App.tsx — clean single import
import { Button, Input } from "./components";
// instead of:
// import Button from "./components/Button";
// import Input from "./components/Input";`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "This is the exact pattern used in your notes project data files — every topic exports from its file, and index.ts re-exports everything.",
        },
      ],
    },
    {
      id: "in-react",
      title: "Modules in React Projects",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// 1. React itself
import React from "react";              // default
import { useState, useEffect } from "react"; // named

// 2. React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 3. Your own components
import Navbar from "../components/Navbar";
import { Button, Input } from "../components";

// 4. Types (TypeScript)
import type { NotePageData } from "../types/note";

// 5. Styles (CSS modules)
import styles from "./Button.module.css";

// 6. Assets
import logo from "../assets/logo.svg";
import data from "../data/notes.json";`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Use 'import type' (TypeScript) for importing only types — this ensures they are erased at runtime and don't increase bundle size.",
        },
      ],
    },
  ],
};
