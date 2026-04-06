import type { NotePageData } from "../../../../../types/note";

export const useStateNotes: NotePageData = {
  title: "useState Hook",
  description:
    "useState is the most fundamental React hook. It lets you add state to functional components — any value that changes over time and should trigger a re-render.",
  sections: [
    {
      id: "basics",
      title: "Basic Usage",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `import { useState } from "react";

function Counter() {
  // useState returns [currentValue, setterFunction]
  const [count, setCount] = useState(0); // 0 is the initial value

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "Calling the setter function (setCount) triggers a RE-RENDER of the component. React re-runs the entire component function with the new state value.",
        },
      ],
    },
    {
      id: "functional-update",
      title: "Functional Update — Safe State Updates",
      blocks: [
        {
          type: "text",
          text: "When the new state depends on the previous state, always use the functional form of the setter. This avoids stale state bugs especially in async contexts.",
        },
        {
          type: "code",
          language: "jsx",
          code: `// ❌ Direct update — can use stale state in async contexts
setCount(count + 1);

// ✅ Functional update — always uses the latest state
setCount(prev => prev + 1);

// Why it matters:
function handleTripleClick() {
  // ❌ These all read the SAME count — only increments by 1!
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);

  // ✅ Each reads the LATEST prev value — increments by 3!
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
}`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Always use the functional form (prev => prev + 1) when the new state depends on the previous state. It's safer and always correct.",
        },
      ],
    },
    {
      id: "objects-in-state",
      title: "Objects & Arrays in State",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// Updating an object in state — always spread!
const [user, setUser] = useState({ name: "Deepak", age: 25 });

// ❌ Mutating state directly (React won't re-render!)
user.age = 26;
setUser(user); // same reference — no re-render!

// ✅ Create a new object
setUser({ ...user, age: 26 }); // spread + override

// Updating an array in state — always create new array
const [items, setItems] = useState(["apple", "mango"]);

// Add item
setItems(prev => [...prev, "banana"]);

// Remove item
setItems(prev => prev.filter(item => item !== "mango"));

// Update item
setItems(prev => prev.map(item =>
  item === "apple" ? "grapes" : item
));`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "NEVER mutate state directly (user.name = 'x', arr.push()). Always create a new copy. React uses reference equality to detect changes — if the reference is the same, no re-render happens.",
        },
      ],
    },
    {
      id: "lazy-init",
      title: "Lazy Initialization",
      blocks: [
        {
          type: "text",
          text: "If computing the initial state is expensive, pass a function to useState. It runs only on the first render, not on every re-render.",
        },
        {
          type: "code",
          language: "jsx",
          code: `// ❌ This runs on EVERY render (wasteful)
const [data, setData] = useState(expensiveComputation());

// ✅ Lazy init — function runs only ONCE on mount
const [data, setData] = useState(() => expensiveComputation());

// Real example — reading from localStorage
const [theme, setTheme] = useState(
  () => localStorage.getItem("theme") ?? "light"
);`,
        },
      ],
    },
  ],
};
