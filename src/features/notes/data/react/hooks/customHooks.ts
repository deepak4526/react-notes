import type { NotePageData } from "../../../../../types/note";

export const customHooksNotes: NotePageData = {
  title: "Custom Hooks",
  description:
    "Custom hooks let you extract and reuse stateful logic between components. A custom hook is just a function that starts with 'use' and can call other hooks inside.",
  sections: [
    {
      id: "what-are-custom-hooks",
      title: "What Are Custom Hooks?",
      blocks: [
        {
          type: "list",
          items: [
            "A function whose name starts with 'use' (required — React enforces this)",
            "Can call other hooks (useState, useEffect, useRef, etc.)",
            "NOT a component — returns data/functions, not JSX",
            "Allows sharing stateful logic between components — not the state itself",
            "Each component that uses a custom hook has its own isolated state",
          ],
        },
        {
          type: "highlight",
          variant: "important",
          text: "The naming convention (starts with 'use') is mandatory. React uses it to apply the Rules of Hooks linting. Without 'use', hooks inside won't be checked.",
        },
      ],
    },
    {
      id: "usefetch",
      title: "useFetch — Data Fetching Hook",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// hooks/useFetch.ts
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        const json = await res.json();
        if (!ignore) setData(json);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchData();
    return () => { ignore = true; };
  }, [url]);

  return { data, loading, error };
}

// Usage in ANY component — no repeated fetch logic!
function UserPage({ userId }) {
  const { data: user, loading, error } = useFetch(\`/api/users/\${userId}\`);

  if (loading) return <Spinner />;
  if (error)   return <p>Error: {error}</p>;
  return <h1>{user?.name}</h1>;
}

function PostPage({ postId }) {
  const { data: post, loading } = useFetch(\`/api/posts/\${postId}\`);
  // Same hook, completely separate state
}`,
        },
      ],
    },
    {
      id: "uselocalstorage",
      title: "useLocalStorage — Persisted State",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// hooks/useLocalStorage.ts
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}

// Works exactly like useState but persists to localStorage!
function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Current: {theme}
    </button>
  );
}`,
        },
      ],
    },
    {
      id: "usetoggle-usedebounce",
      title: "useToggle & useDebounce",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// useToggle — simple boolean flip
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  return [value, toggle];
}

// Usage
function Modal() {
  const [isOpen, toggleModal] = useToggle(false);
  return (
    <>
      <button onClick={toggleModal}>Open Modal</button>
      {isOpen && <div className="modal">Modal Content</div>}
    </>
  );
}

// useDebounce — delay state update (good for search inputs)
function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer); // clear on value change
  }, [value, delay]);

  return debouncedValue;
}

// Usage — don't send API request on every keystroke!
function Search() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) fetchResults(debouncedQuery); // only fires 500ms after typing stops
  }, [debouncedQuery]);

  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}`,
        },
      ],
    },
  ],
};
