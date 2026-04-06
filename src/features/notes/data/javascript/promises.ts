import type { NotePageData } from "../../../../types/note";

export const promisesNotes: NotePageData = {
  title: "Promises & Async/Await",
  description:
    "JavaScript is single-threaded, so async operations (API calls, timers, file reads) use Promises. Async/await is the modern syntax to work with promises cleanly. This is essential for data fetching in React.",
  sections: [
    {
      id: "what-is-promise",
      title: "What is a Promise?",
      blocks: [
        {
          type: "text",
          text: "A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. Think of it as a placeholder for a future value.",
        },
        {
          type: "list",
          items: [
            "Pending — initial state, operation not yet completed",
            "Fulfilled — operation completed successfully (has a value)",
            "Rejected — operation failed (has an error/reason)",
          ],
        },
        {
          type: "code",
          language: "javascript",
          code: `// Creating a Promise
const fetchData = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve({ user: "Deepak", age: 25 }); // fulfilled
  } else {
    reject(new Error("Something went wrong")); // rejected
  }
});

// Consuming with .then() / .catch() / .finally()
fetchData
  .then(data  => console.log("Got:", data))    // on success
  .catch(err  => console.log("Error:", err))   // on failure
  .finally(()  => console.log("Always runs")); // always`,
        },
      ],
    },
    {
      id: "async-await",
      title: "async/await — Clean Promise Syntax",
      blocks: [
        {
          type: "text",
          text: "async/await is syntactic sugar over promises. It makes async code look like synchronous code — much easier to read and write.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "An async function ALWAYS returns a Promise. await can only be used inside an async function.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// ❌ Promise chain style
function loadUser() {
  fetch("/api/user")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

// ✅ async/await style — much cleaner
async function loadUser() {
  try {
    const res = await fetch("/api/user");  // wait for response
    const data = await res.json();         // wait for JSON
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    console.log("Done loading");
  }
}`,
        },
      ],
    },
    {
      id: "error-handling",
      title: "Error Handling in Async code",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `// try/catch is the standard way to handle errors
async function getUser(id) {
  try {
    const res = await fetch(\`/api/users/\${id}\`);

    // fetch doesn't throw for 4xx/5xx — check manually!
    if (!res.ok) {
      throw new Error(\`HTTP error: \${res.status}\`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch user:", err.message);
    return null; // or re-throw: throw err;
  }
}`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "fetch() does NOT throw an error for HTTP error codes (404, 500, etc.). Always check res.ok manually in your error handling.",
        },
      ],
    },
    {
      id: "promise-methods",
      title: "Promise.all, allSettled, race",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `// Promise.all — run multiple promises in PARALLEL
// Fails fast: if any one fails, whole thing rejects
const [users, posts] = await Promise.all([
  fetch("/api/users").then(r => r.json()),
  fetch("/api/posts").then(r => r.json()),
]);
// Both requests run at the same time — faster!

// Promise.allSettled — run all, get results of ALL (even failed)
const results = await Promise.allSettled([
  fetch("/api/users").then(r => r.json()),
  fetch("/api/broken-endpoint"), // this might fail
]);
results.forEach(result => {
  if (result.status === "fulfilled") console.log(result.value);
  if (result.status === "rejected")  console.log(result.reason);
});

// Promise.race — resolves/rejects with the FIRST settled promise
const result = await Promise.race([
  fetch("/api/data"),
  new Promise((_, reject) => setTimeout(() => reject("Timeout!"), 5000))
]);`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Use Promise.all when you need all results and can abort on any failure. Use Promise.allSettled when you want all results regardless of individual failures.",
        },
      ],
    },
    {
      id: "in-react",
      title: "Async in React — Data Fetching Pattern",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// Standard data fetching pattern in React with useEffect
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ⚠️ useEffect callback cannot be async directly
    // Define async function inside and call it
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await fetch(\`/api/users/\${userId}\`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // re-fetch when userId changes

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>Error: {error}</p>;
  return <div>{user?.name}</div>;
}`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Never make useEffect's callback function async directly. Instead, define an async function inside useEffect and call it immediately.",
        },
      ],
    },
  ],
};
