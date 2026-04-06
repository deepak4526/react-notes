import type { NotePageData } from "../../../../types/note";

export const closuresNotes: NotePageData = {
  title: "Closures in JavaScript",
  description:
    "A closure is a function that remembers variables from its outer scope even after the outer function has finished executing. Closures are the foundation of React hooks.",
  sections: [
    {
      id: "what-is-closure",
      title: "What is a Closure?",
      blocks: [
        {
          type: "text",
          text: "When a function is defined inside another function, the inner function retains access to the outer function's variables — even after the outer function has returned. This combination is called a closure.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "Closure = Function + its Lexical Scope (the environment where it was created).",
        },
        {
          type: "code",
          language: "javascript",
          code: `function outer() {
  let count = 0; // outer variable

  function inner() {
    count++;           // inner accesses outer's variable
    console.log(count);
  }

  return inner; // return the inner function
}

const counter = outer(); // outer() has finished, but...
counter(); // 1  ← inner still remembers 'count'!
counter(); // 2
counter(); // 3`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "Even though outer() has finished running, inner() still has access to 'count'. This is a closure.",
        },
      ],
    },
    {
      id: "lexical-scope",
      title: "Lexical Scope — Why Closures Work",
      blocks: [
        {
          type: "text",
          text: "Closures work because of 'lexical scope' — functions can access variables from where they were DEFINED, not where they are CALLED.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const name = "Global";

function outer() {
  const name = "Deepak"; // outer's variable

  function inner() {
    console.log(name); // uses where it was DEFINED (outer)
  }

  return inner;
}

const fn = outer();
fn(); // "Deepak" ← not "Global"
      // because inner was defined inside outer`,
        },
      ],
    },
    {
      id: "real-world",
      title: "Real-World Usage of Closures",
      blocks: [
        {
          type: "text",
          text: "Closures are used everywhere in JavaScript — from counters and private data, to React hooks and event handlers.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// 1. Data Privacy (private variables)
function createUser(username) {
  let password = "secret123"; // private — can't access from outside

  return {
    getUsername: () => username,
    checkPassword: (input) => input === password,
  };
}

const user = createUser("deepak");
console.log(user.getUsername());       // "deepak"
console.log(user.checkPassword("secret123")); // true
// console.log(user.password);  ❌ undefined — it's private!`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// 2. Function Factories — create tailored functions
function multiplier(factor) {
  return (number) => number * factor; // remembers factor
}

const double = multiplier(2);
const triple = multiplier(3);

double(5); // 10
triple(5); // 15`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// 3. React Hooks use closures internally
function Counter() {
  const [count, setCount] = useState(0);

  // This handler "closes over" count and setCount
  const handleClick = () => {
    setCount(count + 1); // 'count' remembered via closure
  };

  return <button onClick={handleClick}>{count}</button>;
}`,
        },
      ],
    },
    {
      id: "interview-trap",
      title: "Classic Interview Trap — var in Loops",
      blocks: [
        {
          type: "text",
          text: "This is one of the most common JavaScript interview questions. It tests your understanding of closures and var scope.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// ❌ Using var — all closures share the same 'i'
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 3, 3, 3 ← all print 3!
  }, 1000);
}
// Why? var is function-scoped — there is only ONE 'i'
// By the time setTimeout runs, the loop is done, i = 3`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// ✅ Fix 1: Use let — creates a NEW 'i' per iteration
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 0, 1, 2 ← correct!
  }, 1000);
}

// ✅ Fix 2: Use IIFE to capture the value
for (var i = 0; i < 3; i++) {
  ((j) => {
    setTimeout(() => console.log(j), 1000); // 0, 1, 2
  })(i);
}`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "This is why let was introduced. Always use let in for loops — it creates a new binding per iteration, fixing the closure+var bug.",
        },
      ],
    },
    {
      id: "memory",
      title: "Closures & Memory — Things to Know",
      blocks: [
        {
          type: "list",
          items: [
            "Closures keep referenced variables alive in memory as long as the closure exists",
            "This is generally fine, but watch out for closures inside large loops or long-lived events",
            "In React, stale closures are a common bug — event handlers that remember old state values",
            "useCallback and useEffect dependency arrays exist specifically to manage closure freshness",
          ],
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Stale closure bug in React: an event handler captures an old value of state because it was created before a re-render. Always keep dependency arrays accurate.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// ❌ Stale closure — count is stale inside the effect
useEffect(() => {
  const timer = setInterval(() => {
    console.log(count); // always logs initial value!
  }, 1000);
  return () => clearInterval(timer);
}, []); // ← empty deps, so it captures count=0 forever

// ✅ Fix — add count to dependencies
useEffect(() => {
  const timer = setInterval(() => {
    console.log(count); // fresh value each time
  }, 1000);
  return () => clearInterval(timer);
}, [count]);`,
        },
      ],
    },
  ],
};
