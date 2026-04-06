import type { NotePageData } from "../../../../../types/note";

export const useCallbackNotes: NotePageData = {
  title: "useCallback Hook",
  description:
    "useCallback memoizes a function — it returns the same function reference between renders unless its dependencies change. Mainly used to prevent child components from re-rendering unnecessarily.",
  sections: [
    {
      id: "why-needed",
      title: "Why useCallback Exists",
      blocks: [
        {
          type: "text",
          text: "In JavaScript, every function defined inside a component is recreated on every render — it's a brand new function each time. This matters when you pass functions as props to memoized children.",
        },
        {
          type: "code",
          language: "jsx",
          code: `// Without useCallback:
function Parent() {
  const [count, setCount] = useState(0);

  // New function created on EVERY render
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Re-render Parent</button>
      {/* Child receives a NEW handleClick every render
          → Child re-renders even though nothing changed for it */}
      <ExpensiveChild onClick={handleClick} />
    </div>
  );
}`,
        },
        {
          type: "code",
          language: "jsx",
          code: `import { useCallback, memo } from "react";

// With useCallback:
function Parent() {
  const [count, setCount] = useState(0);

  // Same function reference across renders (unless deps change)
  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []); // ← empty deps = never recreated

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Re-render Parent</button>
      {/* Child gets SAME handleClick → skips re-render! */}
      <ExpensiveChild onClick={handleClick} />
    </div>
  );
}

// Must wrap child in React.memo for this to work!
const ExpensiveChild = memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
});`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "useCallback only makes sense when paired with React.memo on the child component. Without React.memo, the child re-renders anyway regardless of function reference.",
        },
      ],
    },
    {
      id: "with-dependencies",
      title: "useCallback with Dependencies",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `function SearchComponent({ onSearch }) {
  const [query, setQuery] = useState("");

  // Recreate handler when query changes (it needs fresh query value)
  const handleSearch = useCallback(() => {
    onSearch(query); // uses 'query' from closure
  }, [query, onSearch]);

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <SearchButton onClick={handleSearch} />
    </div>
  );
}`,
        },
        {
          type: "code",
          language: "jsx",
          code: `// useCallback with setState — prefer functional update to reduce deps
function Counter() {
  const [count, setCount] = useState(0);

  // ❌ Needs count in deps (recreated when count changes)
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // ✅ No count in deps (functional update always has latest value)
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []); // ← stable forever!

  return <button onClick={increment}>{count}</button>;
}`,
        },
      ],
    },
    {
      id: "vs-usememo",
      title: "useCallback vs useMemo",
      blocks: [
        {
          type: "code",
          language: "text",
          code: `                  useMemo                useCallback
─────────────────────────────────────────────────────────
Returns           A cached VALUE         A cached FUNCTION
Used for          Expensive              Stable function
                  calculations           references
Equivalent to     useMemo(() => val, []) useMemo(() => fn, [])`,
        },
        {
          type: "code",
          language: "jsx",
          code: `// useCallback is shorthand for useMemo returning a function
const fn = useCallback(() => doSomething(a, b), [a, b]);
// Same as:
const fn = useMemo(() => () => doSomething(a, b), [a, b]);`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Don't overuse useCallback. Only use it when passing a function to a React.memo child, or as a dependency in another hook's dependency array.",
        },
      ],
    },
  ],
};
