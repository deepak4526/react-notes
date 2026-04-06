import type { NotePageData } from "../../../../types/note";

export const introductionNotes: NotePageData = {
  title: "Introduction to React",
  description:
    "React is a JavaScript library for building user interfaces. Created by Meta (Facebook), it lets you build reusable UI components that automatically update when data changes.",
  sections: [
    {
      id: "what-is-react",
      title: "What is React?",
      blocks: [
        {
          type: "list",
          items: [
            "A JavaScript LIBRARY (not a framework) for building UIs",
            "Created by Facebook/Meta in 2013, open source",
            "Used by Facebook, Instagram, Airbnb, Netflix, Twitter, and thousands more",
            "Component-based — build small reusable pieces, compose them into complex UIs",
            "Declarative — describe WHAT the UI should look like, React handles HOW to update it",
          ],
        },
        {
          type: "highlight",
          variant: "info",
          text: "React is a library, not a full framework. It handles the VIEW layer only. You add routing (React Router), state management (Redux/Zustand), and data fetching (TanStack Query) separately.",
        },
      ],
    },
    {
      id: "why-react",
      title: "Why Learn React?",
      blocks: [
        {
          type: "list",
          items: [
            "#1 most used frontend library — highest job demand",
            "Huge ecosystem — Next.js, React Native, Remix, Gatsby all use React",
            "Reusable components speed up development significantly",
            "Large community — tons of tutorials, libraries, and support",
            "React Native lets you build iOS and Android apps with the same skills",
          ],
        },
      ],
    },
    {
      id: "virtual-dom",
      title: "Virtual DOM — How React is Fast",
      blocks: [
        {
          type: "text",
          text: "The Virtual DOM is the key to React's performance. Directly modifying the real DOM is slow. React keeps a virtual (in-memory) copy of the DOM and smartly calculates the minimum changes needed.",
        },
        {
          type: "code",
          language: "text",
          code: `How it works:

1. You update state (e.g., setCount(count + 1))
2. React creates a new Virtual DOM tree
3. React DIFFS the new tree vs the previous tree
4. React calculates the MINIMUM set of real DOM changes needed
5. React applies ONLY those changes to the real DOM

This is called Reconciliation.`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "You don't need to manually interact with the Virtual DOM — React handles it completely. Just focus on describing your UI and updating state.",
        },
      ],
    },
    {
      id: "vanilla-vs-react",
      title: "Vanilla JS vs React",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `// ❌ Vanilla JS — you manually update the DOM
let count = 0;
const btn = document.getElementById("btn");
const display = document.getElementById("count");

btn.addEventListener("click", () => {
  count++;
  display.textContent = count; // manually updating DOM
});`,
        },
        {
          type: "code",
          language: "jsx",
          code: `// ✅ React — just update state, DOM updates automatically
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "In React, you never touch the DOM directly. You just update STATE, and React automatically updates whatever needs to change in the UI.",
        },
      ],
    },
    {
      id: "setup",
      title: "Setting Up — Vite + React",
      blocks: [
        {
          type: "text",
          text: "Vite is the modern way to set up a React project. It is significantly faster than Create React App (CRA), which is now deprecated.",
        },
        {
          type: "code",
          language: "bash",
          code: `# Create a new React + TypeScript project with Vite
npm create vite@latest my-app -- --template react-ts

cd my-app
npm install
npm run dev   # starts dev server at http://localhost:5173`,
        },
        {
          type: "code",
          language: "text",
          code: `Project structure:
my-app/
├── src/
│   ├── App.tsx        ← Root component
│   ├── main.tsx       ← Entry point (mounts app to DOM)
│   └── index.css      ← Global styles
├── index.html         ← HTML template
├── vite.config.ts     ← Vite configuration
└── tsconfig.json      ← TypeScript configuration`,
        },
      ],
    },
  ],
};
