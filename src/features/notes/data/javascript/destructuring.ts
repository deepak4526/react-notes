import type { NotePageData } from "../../../../types/note";

export const destructuringNotes: NotePageData = {
  title: "Destructuring",
  description:
    "Destructuring lets you unpack values from arrays or properties from objects into distinct variables. It is used constantly in React — especially for props, state, and hooks.",
  sections: [
    {
      id: "array-destructuring",
      title: "Array Destructuring",
      blocks: [
        {
          type: "text",
          text: "Array destructuring unpacks values by position. The names you choose for the variables can be anything.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const colors = ["red", "green", "blue"];

// ❌ Old way
const first = colors[0];
const second = colors[1];

// ✅ Destructuring
const [first, second, third] = colors;
console.log(first);  // "red"
console.log(second); // "green"
console.log(third);  // "blue"

// Skip elements with commas
const [, , last] = colors;
console.log(last); // "blue"

// Default values (if element doesn't exist)
const [a, b, c, d = "yellow"] = colors;
console.log(d); // "yellow"`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "useState returns an array — that's why you destructure it: const [count, setCount] = useState(0)",
        },
        {
          type: "code",
          language: "javascript",
          code: `// Swap variables without a temp variable
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2, 1

// Rest in array destructuring
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]`,
        },
      ],
    },
    {
      id: "object-destructuring",
      title: "Object Destructuring",
      blocks: [
        {
          type: "text",
          text: "Object destructuring unpacks properties by name. The variable names must match the property keys (unless you rename them).",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = { name: "Deepak", age: 25, city: "Mumbai" };

// ❌ Old way
const name = user.name;
const age = user.age;

// ✅ Destructuring
const { name, age, city } = user;
console.log(name); // "Deepak"
console.log(age);  // 25
console.log(city); // "Mumbai"

// Rename while destructuring
const { name: fullName, age: years } = user;
console.log(fullName); // "Deepak"
console.log(years);    // 25

// Default values
const { name, role = "user" } = user; // role defaults to "user"
console.log(role); // "user" (not in object)`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// Rest in object destructuring
const { name, ...rest } = user;
console.log(name); // "Deepak"
console.log(rest); // { age: 25, city: "Mumbai" }

// Nested object destructuring
const person = {
  name: "Deepak",
  address: { city: "Mumbai", zip: "400001" },
};

const { name, address: { city, zip } } = person;
console.log(city); // "Mumbai"
console.log(zip);  // "400001"`,
        },
      ],
    },
    {
      id: "in-functions",
      title: "Destructuring in Function Parameters",
      blocks: [
        {
          type: "text",
          text: "You can destructure directly in function parameters. This is how React props are typically received.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// ❌ Old way — receive whole object
function greet(user) {
  console.log(user.name, user.age);
}

// ✅ Destructure in parameters
function greet({ name, age }) {
  console.log(name, age);
}

greet({ name: "Deepak", age: 25 }); // "Deepak" 25

// With defaults
function greet({ name, role = "user" }) {
  console.log(\`\${name} is a \${role}\`);
}

greet({ name: "Deepak" }); // "Deepak is a user"`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "In React, always destructure props in the function parameter — it makes components cleaner and easier to read.",
        },
        {
          type: "code",
          language: "jsx",
          code: `// ❌ Messy
const Button = (props) => (
  <button className={props.variant} onClick={props.onClick}>
    {props.label}
  </button>
);

// ✅ Clean with destructuring
const Button = ({ label, onClick, variant = "primary" }) => (
  <button className={variant} onClick={onClick}>
    {label}
  </button>
);`,
        },
      ],
    },
  ],
};
