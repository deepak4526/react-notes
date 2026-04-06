import type { NotePageData } from "../../../../types/note";

export const arrayMethodsNotes: NotePageData = {
  title: "Array Methods",
  description:
    "JavaScript array methods are the backbone of React development. map(), filter(), and reduce() are used in almost every React component. Mastering these is non-negotiable.",
  sections: [
    {
      id: "map",
      title: "map() — Transform Each Element",
      blocks: [
        {
          type: "text",
          text: "map() creates a NEW array by applying a function to every element. The original array is NOT changed. This is the most-used array method in React.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [1, 2, 3, 4, 5];

// Double every number
const doubled = numbers.map(n => n * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]
console.log(numbers);  // [1, 2, 3, 4, 5] ← original unchanged

// Extract a property from objects
const users = [
  { id: 1, name: "Deepak", age: 25 },
  { id: 2, name: "Raj",    age: 28 },
];

const names = users.map(user => user.name);
console.log(names); // ["Deepak", "Raj"]

// Transform objects
const withRole = users.map(user => ({ ...user, role: "admin" }));`,
        },
        {
          type: "code",
          language: "jsx",
          code: `// In React — render a list
const users = [{ id: 1, name: "Deepak" }, { id: 2, name: "Raj" }];

return (
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);`,
        },
      ],
    },
    {
      id: "filter",
      title: "filter() — Keep Matching Elements",
      blocks: [
        {
          type: "text",
          text: "filter() creates a new array with only the elements that pass a test (return true). Original array is unchanged.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [1, 2, 3, 4, 5, 6];

// Keep only even numbers
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6]

// Filter objects
const users = [
  { name: "Deepak", active: true  },
  { name: "Raj",    active: false },
  { name: "Priya",  active: true  },
];

const activeUsers = users.filter(user => user.active);
// [{ name: "Deepak" }, { name: "Priya" }]`,
        },
        {
          type: "code",
          language: "jsx",
          code: `// In React — delete an item from state
const [todos, setTodos] = useState([
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build a project" },
]);

const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
  // Creates new array without the deleted item
};`,
        },
      ],
    },
    {
      id: "reduce",
      title: "reduce() — Accumulate to a Single Value",
      blocks: [
        {
          type: "text",
          text: "reduce() processes each element and accumulates a result. It can produce numbers, strings, objects, or arrays.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [1, 2, 3, 4, 5];

// Sum all numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// How it works step by step:
// acc=0, curr=1 → 1
// acc=1, curr=2 → 3
// acc=3, curr=3 → 6
// acc=6, curr=4 → 10
// acc=10, curr=5 → 15

// Count occurrences
const fruits = ["apple", "mango", "apple", "banana", "mango", "apple"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
// { apple: 3, mango: 2, banana: 1 }

// Group items by category
const items = [
  { name: "JS Book", type: "book" },
  { name: "React Course", type: "course" },
  { name: "Node Book", type: "book" },
];
const grouped = items.reduce((acc, item) => {
  acc[item.type] = [...(acc[item.type] || []), item];
  return acc;
}, {});`,
        },
      ],
    },
    {
      id: "find-findindex",
      title: "find() & findIndex()",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const users = [
  { id: 1, name: "Deepak" },
  { id: 2, name: "Raj" },
  { id: 3, name: "Priya" },
];

// find() — returns the FIRST matching element (or undefined)
const found = users.find(u => u.id === 2);
console.log(found); // { id: 2, name: "Raj" }

// findIndex() — returns the INDEX of first match (or -1)
const index = users.findIndex(u => u.id === 2);
console.log(index); // 1

// Update an item in state using findIndex
const updateUser = (id, newName) => {
  const idx = users.findIndex(u => u.id === id);
  const updated = [...users];
  updated[idx] = { ...updated[idx], name: newName };
  setUsers(updated);
};`,
        },
      ],
    },
    {
      id: "some-every-includes",
      title: "some(), every(), includes()",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [1, 2, 3, 4, 5];

// some() — true if AT LEAST ONE element passes the test
numbers.some(n => n > 4);  // true (5 > 4)
numbers.some(n => n > 10); // false

// every() — true only if ALL elements pass the test
numbers.every(n => n > 0); // true
numbers.every(n => n > 2); // false (1 and 2 fail)

// includes() — check if a value exists
numbers.includes(3);  // true
numbers.includes(99); // false

const fruits = ["apple", "mango", "banana"];
fruits.includes("mango"); // true`,
        },
      ],
    },
    {
      id: "other-methods",
      title: "forEach(), sort(), slice()",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `// forEach() — loop without returning anything
[1, 2, 3].forEach(n => console.log(n)); // 1, 2, 3
// (use map if you need a new array)

// sort() — sorts IN PLACE, mutates original!
const nums = [3, 1, 4, 1, 5];
const sorted = [...nums].sort((a, b) => a - b); // ascending
// [1, 1, 3, 4, 5]

const desc = [...nums].sort((a, b) => b - a); // descending
// [5, 4, 3, 1, 1]

// slice() — extract part of array (non-mutating)
const arr = [1, 2, 3, 4, 5];
arr.slice(1, 3);  // [2, 3] (start inclusive, end exclusive)
arr.slice(-2);    // [4, 5] (last 2 elements)`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "sort() mutates the original array. Always sort a copy: [...arr].sort() — especially important in React where you must not mutate state.",
        },
      ],
    },
  ],
};
