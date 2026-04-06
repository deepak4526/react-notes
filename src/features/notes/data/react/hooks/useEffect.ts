import type { NotePageData } from "../../../../../types/note";

export const useEffectNotes: NotePageData = {
  title: "useEffect Hook",
  description:
    "useEffect lets you perform side effects in your components — data fetching, subscriptions, timers, DOM manipulation. It runs after every render by default, but you can control when it runs.",
  sections: [
    {
      id: "syntax",
      title: "Syntax & Dependency Array",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `import { useEffect } from "react";

// Runs after EVERY render
useEffect(() => {
  console.log("rendered");
});

// Runs only ONCE — on mount (empty dependency array)
useEffect(() => {
  console.log("mounted");
}, []);

// Runs when 'userId' changes (and on mount)
useEffect(() => {
  console.log("userId changed:", userId);
}, [userId]);

// Runs when ANY of the deps change
useEffect(() => {
  console.log("count or name changed");
}, [count, name]);`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "The dependency array controls WHEN the effect runs. Empty [] = once on mount. [value] = whenever value changes. No array = every render.",
        },
      ],
    },
    {
      id: "cleanup",
      title: "Cleanup Function",
      blocks: [
        {
          type: "text",
          text: "Return a cleanup function from useEffect to cancel subscriptions, clear timers, or remove event listeners when the component unmounts or before the effect runs again.",
        },
        {
          type: "code",
          language: "jsx",
          code: `// Timer cleanup
useEffect(() => {
  const timer = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => clearInterval(timer); // ← cleanup
}, []);

// Event listener cleanup
useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth);
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

// Subscription cleanup
useEffect(() => {
  const subscription = someAPI.subscribe(userId, setData);

  return () => subscription.unsubscribe(); // ← cleanup
}, [userId]);`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Always clean up side effects that create timers, event listeners, or subscriptions. Failing to clean up causes memory leaks and bugs in Strict Mode.",
        },
      ],
    },
    {
      id: "data-fetching",
      title: "Data Fetching with useEffect",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ⚠️ Cannot make useEffect itself async
    // Define async function inside and call it
    let ignore = false; // handles race conditions

    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(\`/api/users/\${userId}\`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        if (!ignore) setUser(data); // only update if not cancelled
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchUser();

    return () => { ignore = true; }; // cleanup — cancel stale response
  }, [userId]); // re-fetch when userId changes

  if (loading) return <Spinner />;
  if (error)   return <p>Error: {error}</p>;
  return <div>{user?.name}</div>;
}`,
        },
      ],
    },
    {
      id: "common-mistakes",
      title: "Common useEffect Mistakes",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// ❌ Mistake 1 — Missing dependencies (stale closure)
const [count, setCount] = useState(0);

useEffect(() => {
  const id = setInterval(() => {
    setCount(count + 1); // 'count' is stale! always 0
  }, 1000);
  return () => clearInterval(id);
}, []); // missing 'count' in deps

// ✅ Fix — use functional update (no need for count in deps)
useEffect(() => {
  const id = setInterval(() => {
    setCount(prev => prev + 1); // no stale closure
  }, 1000);
  return () => clearInterval(id);
}, []);`,
        },
        {
          type: "code",
          language: "jsx",
          code: `// ❌ Mistake 2 — Infinite loop
const [data, setData] = useState([]);

useEffect(() => {
  fetch("/api/data")
    .then(r => r.json())
    .then(setData);
}, [data]); // 'data' changes → effect runs → data changes → loop!

// ✅ Fix — remove 'data' from deps (fetch independently)
useEffect(() => {
  fetch("/api/data").then(r => r.json()).then(setData);
}, []); // run once on mount`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Install the 'eslint-plugin-react-hooks' — it warns about missing or incorrect dependencies automatically.",
        },
      ],
    },
  ],
};
