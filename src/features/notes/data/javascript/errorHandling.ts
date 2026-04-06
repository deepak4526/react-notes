import type { NotePageData } from "../../../../types/note";

export const errorHandlingNotes: NotePageData = {
  title: "Error Handling",
  description:
    "Error handling in JavaScript lets you catch and respond to runtime errors gracefully using try/catch/finally, custom errors, and global error handlers — instead of crashing the app.",
  sections: [
    {
      id: "try-catch-finally",
      title: "try / catch / finally",
      blocks: [
        {
          type: "list",
          items: [
            "try — wraps code that might throw an error",
            "catch(err) — executes if an error is thrown; err has message, name, stack",
            "finally — always executes regardless of whether an error occurred (cleanup)",
          ],
        },
        {
          type: "code",
          language: "javascript",
          code: `try {
  const data = JSON.parse("invalid json {{{");
  console.log(data);
} catch (error) {
  console.error("Error name:",    error.name);    // SyntaxError
  console.error("Error message:", error.message); // Unexpected token i...
  console.error("Stack trace:",   error.stack);
} finally {
  console.log("This always runs"); // cleanup, close connections, etc.
}`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "catch only catches SYNCHRONOUS errors and rejected Promises (with async/await). It does NOT catch errors in setTimeout, Promises without await, or event listeners.",
        },
      ],
    },
    {
      id: "throwing-errors",
      title: "Throwing Errors Manually",
      blocks: [
        {
          type: "text",
          text: "You can throw any value, but best practice is to throw an Error object — it includes a stack trace which is invaluable for debugging.",
        },
        {
          type: "code",
          language: "javascript",
          code: `function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero"); // throw Error object
  }
  return a / b;
}

try {
  const result = divide(10, 0);
} catch (err) {
  console.error(err.message); // "Cannot divide by zero"
}

// ❌ Avoid throwing primitives
throw "something went wrong"; // no stack trace, hard to catch
throw 404;                    // not an Error object`,
        },
      ],
    },
    {
      id: "error-types",
      title: "Built-in Error Types",
      blocks: [
        {
          type: "list",
          items: [
            "Error — generic base error",
            "SyntaxError — invalid JavaScript syntax (JSON.parse, eval)",
            "TypeError — wrong type (calling undefined as function, null.property)",
            "ReferenceError — accessing undeclared variable",
            "RangeError — value out of allowed range (new Array(-1))",
            "URIError — incorrect use of encodeURI / decodeURI",
          ],
        },
        {
          type: "code",
          language: "javascript",
          code: `// You can check error types in catch
try {
  null.toString();
} catch (err) {
  if (err instanceof TypeError) {
    console.log("Type problem:", err.message);
  } else if (err instanceof ReferenceError) {
    console.log("Reference problem:", err.message);
  } else {
    throw err; // re-throw unknown errors
  }
}`,
        },
      ],
    },
    {
      id: "custom-errors",
      title: "Custom Error Classes",
      blocks: [
        {
          type: "text",
          text: "Extend the built-in Error class to create meaningful, typed errors for your application domain.",
        },
        {
          type: "code",
          language: "javascript",
          code: `class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name  = "ValidationError";
    this.field = field;
  }
}

class NotFoundError extends Error {
  constructor(resource) {
    super(\`\${resource} not found\`);
    this.name       = "NotFoundError";
    this.statusCode = 404;
  }
}

// Usage
function getUser(id) {
  if (!id)   throw new ValidationError("id", "User ID is required");
  const user = db.find(id);
  if (!user) throw new NotFoundError("User");
  return user;
}

try {
  getUser(null);
} catch (err) {
  if (err instanceof ValidationError) {
    console.log(\`Field '\${err.field}': \${err.message}\`);
  } else if (err instanceof NotFoundError) {
    console.log(\`\${err.statusCode}: \${err.message}\`);
  }
}`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Custom error classes make your catch blocks more precise and your error messages more meaningful — crucial for large applications.",
        },
      ],
    },
    {
      id: "async-errors",
      title: "Error Handling in Async Code",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `// ✅ async/await with try/catch
async function fetchData() {
  try {
    const res  = await fetch("/api/data");
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return await res.json();
  } catch (err) {
    console.error("Fetch failed:", err.message);
    return null; // return fallback instead of crashing
  }
}

// ✅ Promise .catch()
fetch("/api/data")
  .then(res => res.json())
  .catch(err => console.error(err));

// ❌ Unhandled Promise rejection — AVOID this
async function bad() {
  const res = await fetch("/bad-url"); // if this rejects, it's unhandled
}`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Every async function should have a try/catch or a .catch() handler. Unhandled promise rejections crash Node.js apps and are deprecation-warned in browsers.",
        },
      ],
    },
    {
      id: "global-handlers",
      title: "Global Error Handlers",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `// Catch uncaught synchronous errors (browser)
window.onerror = function(message, source, line, col, error) {
  console.error("Global error:", message);
  return true; // prevents default browser error
};

// Catch unhandled Promise rejections (browser)
window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);
  event.preventDefault();
});

// Node.js equivalents
process.on("uncaughtException", (err)         => console.error(err));
process.on("unhandledRejection", (reason, p)  => console.error(reason));`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Global handlers are last-resort safety nets — perfect for logging errors to a monitoring service like Sentry or DataDog.",
        },
      ],
    },
  ],
};
