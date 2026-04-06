import type { NotePageData } from "../../../../types/note";

export const asyncAwaitNotes: NotePageData = {
  title: "Async / Await",
  description:
    "async/await is modern JavaScript syntax built on top of Promises that lets you write asynchronous code in a clean, synchronous-looking style — no more .then() chains.",
  sections: [
    {
      id: "the-problem",
      title: "The Problem: Callback Hell & Promise Chains",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `// ❌ Callback Hell — hard to read and maintain
getUser(id, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log(comments);
    });
  });
});

// ❌ Promise chain — better, but still verbose
getUser(id)
  .then(user => getPosts(user.id))
  .then(posts => getComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(err => console.error(err));`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "async/await solves both of these problems — it reads like synchronous code while remaining fully asynchronous.",
        },
      ],
    },
    {
      id: "async-await-basics",
      title: "async & await — The Basics",
      blocks: [
        {
          type: "list",
          items: [
            "async: marks a function as asynchronous — it always returns a Promise",
            "await: pauses execution inside async until the Promise resolves",
            "await can ONLY be used inside async functions",
            "The code after await runs only when the Promise settles",
          ],
        },
        {
          type: "code",
          language: "javascript",
          code: `// async function always returns a Promise
async function fetchData() {
  return 42;
}
fetchData().then(val => console.log(val)); // 42

// await pauses until Promise resolves
async function loadUser() {
  const response = await fetch("https://api.example.com/user/1");
  const user = await response.json(); // wait for JSON parsing
  console.log(user.name);
}

loadUser();`,
        },
      ],
    },
    {
      id: "error-handling",
      title: "Error Handling with try / catch",
      blocks: [
        {
          type: "text",
          text: "Unlike .catch() on promises, async/await uses standard try/catch blocks — making error handling feel natural.",
        },
        {
          type: "code",
          language: "javascript",
          code: `async function loadUser(id) {
  try {
    const res = await fetch(\`https://api.example.com/users/\${id}\`);

    if (!res.ok) {
      throw new Error(\`HTTP error: \${res.status}\`);
    }

    const user = await res.json();
    console.log(user.name);
  } catch (error) {
    console.error("Failed to load user:", error.message);
  } finally {
    console.log("Always runs — good for cleanup");
  }
}`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Always wrap await calls in try/catch. An unhandled rejected Promise will crash your app in Node.js and cause silent errors in browsers.",
        },
      ],
    },
    {
      id: "parallel-execution",
      title: "Running Multiple Requests in Parallel",
      blocks: [
        {
          type: "text",
          text: "Awaiting requests sequentially wastes time. Use Promise.all() to run them in parallel.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// ❌ Sequential — slow (waits for each one)
async function slow() {
  const user    = await fetchUser();    // 1s
  const posts   = await fetchPosts();   // 1s
  const weather = await fetchWeather(); // 1s
  // Total: ~3 seconds
}

// ✅ Parallel — fast (all run simultaneously)
async function fast() {
  const [user, posts, weather] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchWeather(),
  ]);
  // Total: ~1 second (longest one)
}`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "Promise.all() fails fast — if ANY promise rejects, the whole thing rejects. Use Promise.allSettled() if you want results even when some fail.",
        },
      ],
    },
    {
      id: "promise-methods",
      title: "Useful Promise Methods",
      blocks: [
        {
          type: "list",
          items: [
            "Promise.all([...]) — resolves when ALL succeed, rejects if ANY fails",
            "Promise.allSettled([...]) — always resolves with each result/error",
            "Promise.race([...]) — resolves/rejects with the FIRST one to settle",
            "Promise.any([...]) — resolves with the FIRST success, rejects if ALL fail",
          ],
        },
        {
          type: "code",
          language: "javascript",
          code: `// Promise.allSettled — get all results regardless of failures
const results = await Promise.allSettled([
  fetchUser(),
  fetchPosts(),
  fetchWeather(),
]);

results.forEach(result => {
  if (result.status === "fulfilled") {
    console.log("Success:", result.value);
  } else {
    console.log("Failed:", result.reason);
  }
});`,
        },
      ],
    },
    {
      id: "real-world-pattern",
      title: "Real-World Pattern in React",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `// Typical async data fetching in React
function UserProfile({ userId }) {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const res  = await fetch(\`/api/users/\${userId}\`);
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>Error: {error}</p>;
  return <h1>{user?.name}</h1>;
}`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Note: The function passed to useEffect cannot itself be async. Define the async function inside and call it immediately.",
        },
      ],
    },
  ],
};
