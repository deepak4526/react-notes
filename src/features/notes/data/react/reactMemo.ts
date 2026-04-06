import type { NotePageData } from "../../../../types/note";

export const reactMemoNotes: NotePageData = {
  title: "React.memo",
  description:
    "React.memo is a Higher Order Component that prevents unnecessary re-renders of functional components by memoizing the rendered output — re-rendering only when props actually change.",
  sections: [
    {
      id: "the-problem",
      title: "The Problem: Unnecessary Re-renders",
      blocks: [
        {
          type: "text",
          text: "By default, when a parent component re-renders, ALL its child components re-render too — even if their props haven't changed. This wastes performance, especially in large component trees.",
        },
        {
          type: "code",
          language: "jsx",
          code: `// ❌ Without memo — Child re-renders every time Parent does
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <Child name="Deepak" />  {/* re-renders on every count change! */}
    </div>
  );
}

function Child({ name }) {
  console.log("Child rendered!"); // logs every time Parent updates
  return <p>Hello, {name}</p>;
}`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "React.memo solves this by doing a shallow comparison of props. If the props haven't changed, the component is skipped entirely.",
        },
      ],
    },
    {
      id: "basic-usage",
      title: "Basic Usage",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `import { memo } from "react";

// ✅ Wrap component in memo — now it only re-renders if props change
const Child = memo(function Child({ name }) {
  console.log("Child rendered!");
  return <p>Hello, {name}</p>;
});

// Alternative syntax: wrap after defining
function ChildComponent({ name }) {
  return <p>Hello, {name}</p>;
}
export default memo(ChildComponent);

// Parent — Child will NOT re-render when count changes
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <Child name="Deepak" /> {/* ✅ skipped unless 'name' changes */}
    </div>
  );
}`,
        },
      ],
    },
    {
      id: "shallow-comparison",
      title: "Shallow Comparison — The Gotcha",
      blocks: [
        {
          type: "text",
          text: "memo uses SHALLOW comparison. Primitive props (strings, numbers, booleans) compare by value. Objects and arrays compare by REFERENCE — so a new object/array created on each render will always be treated as changed.",
        },
        {
          type: "code",
          language: "jsx",
          code: `const List = memo(function List({ items }) {
  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;
});

function Parent() {
  const [count, setCount] = useState(0);

  // ❌ New array reference every render — memo is useless here!
  const items = ["a", "b", "c"];

  // ✅ Fix: useMemo to stabilize the reference
  const stableItems = useMemo(() => ["a", "b", "c"], []);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <List items={stableItems} /> {/* ✅ memo works correctly now */}
    </div>
  );
}`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "memo + inline objects/arrays/functions in JSX = always re-renders. Pair memo with useMemo (for values) and useCallback (for functions) to fix this.",
        },
      ],
    },
    {
      id: "custom-comparison",
      title: "Custom Comparison Function",
      blocks: [
        {
          type: "text",
          text: "memo accepts a second argument — a custom comparison function — when you need more control than shallow equality.",
        },
        {
          type: "code",
          language: "jsx",
          code: `const UserCard = memo(
  function UserCard({ user }) {
    return <div>{user.name} — {user.role}</div>;
  },
  // Custom comparison: only re-render if id or role changes (ignore updatedAt)
  (prevProps, nextProps) => {
    return (
      prevProps.user.id   === nextProps.user.id &&
      prevProps.user.role === nextProps.user.role
    );
  }
);

// Returns true  → skip re-render (props "equal")
// Returns false → trigger re-render (props "changed")`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "The comparison function is the OPPOSITE of shouldComponentUpdate in class components — return true to SKIP render, false to ALLOW render.",
        },
      ],
    },
    {
      id: "when-to-use",
      title: "When to Use (and When NOT to Use) memo",
      blocks: [
        {
          type: "list",
          items: [
            "✅ Use when: component renders often but props rarely change",
            "✅ Use when: component is expensive to render (large lists, complex UI)",
            "✅ Use when: component receives the same props repeatedly from a parent that re-renders often",
            "❌ Don't use when: props change on almost every render (memo overhead with no benefit)",
            "❌ Don't use when: component is cheap to render (premature optimization)",
            "❌ Don't use on every component by default — profile first, optimize second",
          ],
        },
        {
          type: "highlight",
          variant: "important",
          text: "Don't wrap everything in memo. Use React DevTools Profiler to identify which components actually cause performance issues before optimizing.",
        },
      ],
    },
  ],
};
