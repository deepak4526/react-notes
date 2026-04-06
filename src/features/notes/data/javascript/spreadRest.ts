import type { NotePageData } from "../../../../types/note";

export const spreadRestNotes: NotePageData = {
  title: "Spread & Rest Operators",
  description:
    "Both use the same ... syntax but in opposite directions. Spread expands an array/object. Rest collects multiple values into one. Both are used constantly in React for copying state, passing props, and handling arguments.",
  sections: [
    {
      id: "spread-arrays",
      title: "Spread in Arrays",
      blocks: [
        {
          type: "text",
          text: "The spread operator (...) expands an array into individual elements. It's used to copy arrays, merge arrays, and pass array items as arguments.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const a = [1, 2, 3];
const b = [4, 5, 6];

// Copy an array (new reference)
const copy = [...a];
copy.push(99);
console.log(a); // [1, 2, 3] ← unchanged

// Merge arrays
const merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4, 5, 6]

// Add items while copying
const extended = [...a, 10, 11];
console.log(extended); // [1, 2, 3, 10, 11]

// Pass array as function arguments
Math.max(...a); // same as Math.max(1, 2, 3) → 3`,
        },
      ],
    },
    {
      id: "spread-objects",
      title: "Spread in Objects",
      blocks: [
        {
          type: "text",
          text: "Object spread copies all enumerable properties. Properties on the right override properties on the left — this is essential for updating state in React.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = { name: "Deepak", age: 25, city: "Mumbai" };

// Copy an object
const copy = { ...user };

// Merge objects (right side overrides conflicts)
const updated = { ...user, age: 26 }; // age overridden
console.log(updated);
// { name: "Deepak", age: 26, city: "Mumbai" }

const extra = { ...user, role: "admin" }; // new property added
console.log(extra);
// { name: "Deepak", age: 25, city: "Mumbai", role: "admin" }

// Merge two objects
const defaults = { theme: "light", lang: "en" };
const settings = { lang: "hi", fontSize: 16 };
const final = { ...defaults, ...settings };
// { theme: "light", lang: "hi", fontSize: 16 }`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "In React, NEVER mutate state directly. Always use spread to create a new object/array when updating state.",
        },
        {
          type: "code",
          language: "jsx",
          code: `const [user, setUser] = useState({ name: "Deepak", age: 25 });

// ❌ Wrong — direct mutation (React won't re-render!)
user.age = 26;
setUser(user);

// ✅ Correct — new object via spread
setUser({ ...user, age: 26 });`,
        },
      ],
    },
    {
      id: "rest-params",
      title: "Rest Parameters in Functions",
      blocks: [
        {
          type: "text",
          text: "The rest operator collects remaining arguments into an array. It must always be the LAST parameter.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// Collect all arguments into an array
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

sum(1, 2, 3);       // 6
sum(1, 2, 3, 4, 5); // 15

// First param is separate, rest collected
function greet(first, ...others) {
  console.log(\`Hello, \${first}!\`);
  console.log("Others:", others);
}

greet("Deepak", "Raj", "Priya");
// Hello, Deepak!
// Others: ["Raj", "Priya"]`,
        },
      ],
    },
    {
      id: "rest-destructuring",
      title: "Rest in Destructuring",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `// Rest in array destructuring
const [first, second, ...remaining] = [1, 2, 3, 4, 5];
console.log(first);     // 1
console.log(second);    // 2
console.log(remaining); // [3, 4, 5]

// Rest in object destructuring
const { name, age, ...rest } = { name: "Deepak", age: 25, city: "Mumbai", role: "admin" };
console.log(name); // "Deepak"
console.log(rest); // { city: "Mumbai", role: "admin" }`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Object rest destructuring is great for separating component-specific props from props you want to pass down: const { onClick, className, ...rest } = props;",
        },
        {
          type: "code",
          language: "jsx",
          code: `// Passing extra props down with rest
const Button = ({ label, variant, ...rest }) => (
  // 'rest' contains any other props (disabled, id, style, etc.)
  <button className={variant} {...rest}>
    {label}
  </button>
);

<Button label="Submit" variant="primary" disabled id="submit-btn" />`,
        },
      ],
    },
  ],
};
