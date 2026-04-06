import type { NotePageData } from "../../../../../types/note";

export const useRefNotes: NotePageData = {
  title: "useRef Hook",
  description:
    "useRef serves two purposes: accessing DOM elements directly, and persisting values across renders without triggering re-renders. Unlike state, changing a ref does NOT cause a re-render.",
  sections: [
    {
      id: "dom-access",
      title: "DOM Access with useRef",
      blocks: [
        {
          type: "text",
          text: "The most common use of useRef is accessing a DOM element directly — focusing an input, scrolling, measuring size, or integrating third-party libraries.",
        },
        {
          type: "code",
          language: "jsx",
          code: `import { useRef } from "react";

function SearchInput() {
  const inputRef = useRef(null); // ref starts as null

  const focusInput = () => {
    inputRef.current.focus(); // directly call DOM method
  };

  const clearInput = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div>
      {/* Attach ref to a DOM element */}
      <input ref={inputRef} type="text" placeholder="Search..." />
      <button onClick={focusInput}>Focus</button>
      <button onClick={clearInput}>Clear</button>
    </div>
  );
}

// Auto-focus on mount
function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus(); // focus on mount
  }, []);

  return <input ref={inputRef} />;
}`,
        },
      ],
    },
    {
      id: "persist-values",
      title: "Persisting Values Without Re-render",
      blocks: [
        {
          type: "text",
          text: "useRef can store any mutable value that persists across renders but should NOT trigger a re-render when changed — like timer IDs, previous values, or counters.",
        },
        {
          type: "code",
          language: "jsx",
          code: `function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const timerIdRef = useRef(null); // store timer ID without re-rendering

  const start = () => {
    setIsRunning(true);
    timerIdRef.current = setInterval(() => {
      console.log("tick");
    }, 1000);
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(timerIdRef.current); // use stored timer ID
  };

  return (
    <>
      <button onClick={start} disabled={isRunning}>Start</button>
      <button onClick={stop}  disabled={!isRunning}>Stop</button>
    </>
  );
}`,
        },
        {
          type: "code",
          language: "jsx",
          code: `// Tracking previous value of state/props
function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count; // update after render
  });

  const prevCount = prevCountRef.current;

  return (
    <p>
      Now: {count}, Before: {prevCount}
    </p>
  );
}`,
        },
      ],
    },
    {
      id: "ref-vs-state",
      title: "useRef vs useState",
      blocks: [
        {
          type: "code",
          language: "text",
          code: `                  useRef               useState
────────────────────────────────────────────────────
Triggers re-render  ❌ No               ✅ Yes
Updated via         ref.current = val   setState(val)
Read via            ref.current         the state variable
Use for             DOM, timer IDs,     UI that should
                    prev values         update on change`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Rule: If changing the value should update the UI → use useState. If changing the value should NOT update the UI → use useRef.",
        },
      ],
    },
  ],
};
