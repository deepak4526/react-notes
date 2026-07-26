import type { NotePageData } from "../../../../types/note";

export const arrayMethodsNotes: NotePageData = {
  title: "Array Methods",
  description:
    "JavaScript arrays provide built-in methods for adding, removing, searching, transforming, filtering, sorting, and combining data. Methods like map(), filter(), reduce(), find(), some(), and every() are especially important in React and JavaScript interviews.",

  sections: [
    // =========================================================
    // ARRAY BASICS
    // =========================================================
    {
      id: "array-basics",
      title: "Array — Basics",
      blocks: [
        {
          type: "text",
          text: "An array is a data structure used to store multiple values in a single variable. Each element has a numeric index, starting from 0.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Mango"
console.log(fruits[2]); // "Banana"

console.log(fruits.length); // 3

// Arrays can contain objects
const users = [
  { id: 1, name: "Deepak" },
  { id: 2, name: "Raj" },
];

// Check whether something is an array
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({}));     // false`,
        },
      ],
    },

    // =========================================================
    // PUSH
    // =========================================================
    {
      id: "push",
      title: "push() — Add Elements at the End",
      blocks: [
        {
          type: "text",
          text: "push() adds one or more elements to the END of an array. It mutates the original array and returns the new length of the array.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const fruits = ["Apple", "Mango"];

const result = fruits.push("Banana");

console.log(fruits);
// ["Apple", "Mango", "Banana"]

console.log(result);
// 3

// Add multiple values
fruits.push("Orange", "Grapes");

console.log(fruits);
// ["Apple", "Mango", "Banana", "Orange", "Grapes"]`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "push() returns the new array LENGTH, not the array. This matters when using push() inside reduce().",
        },
      ],
    },

    // =========================================================
    // POP
    // =========================================================
    {
      id: "pop",
      title: "pop() — Remove the Last Element",
      blocks: [
        {
          type: "text",
          text: "pop() removes the last element from an array. It mutates the original array and returns the removed element.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const fruits = ["Apple", "Mango", "Banana"];

const removed = fruits.pop();

console.log(removed);
// "Banana"

console.log(fruits);
// ["Apple", "Mango"]`,
        },
      ],
    },

    // =========================================================
    // UNSHIFT
    // =========================================================
    {
      id: "unshift",
      title: "unshift() — Add Elements at the Beginning",
      blocks: [
        {
          type: "text",
          text: "unshift() adds one or more elements to the BEGINNING of an array. It mutates the original array and returns the new length.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const fruits = ["Mango", "Banana"];

const length = fruits.unshift("Apple");

console.log(fruits);
// ["Apple", "Mango", "Banana"]

console.log(length);
// 3`,
        },
      ],
    },

    // =========================================================
    // SHIFT
    // =========================================================
    {
      id: "shift",
      title: "shift() — Remove the First Element",
      blocks: [
        {
          type: "text",
          text: "shift() removes the first element from an array. It mutates the original array and returns the removed element.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const fruits = ["Apple", "Mango", "Banana"];

const removed = fruits.shift();

console.log(removed);
// "Apple"

console.log(fruits);
// ["Mango", "Banana"]`,
        },
      ],
    },

    // =========================================================
    // MAP
    // =========================================================
    {
      id: "map",
      title: "map() — Transform Each Element",
      blocks: [
        {
          type: "text",
          text: "map() creates a NEW array by transforming every element. The resulting array normally has the same length as the original array. map() does not mutate the original array.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled);
// [2, 4, 6, 8]

console.log(numbers);
// [1, 2, 3, 4]`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const users = [
  { id: 1, name: "Deepak", age: 25 },
  { id: 2, name: "Raj", age: 28 },
];

// Extract one property
const names = users.map(user => user.name);

console.log(names);
// ["Deepak", "Raj"]

// Transform each object
const withRole = users.map(user => ({
  ...user,
  role: "admin",
}));

console.log(withRole);

/*
[
  { id: 1, name: "Deepak", age: 25, role: "admin" },
  { id: 2, name: "Raj", age: 28, role: "admin" }
]
*/`,
        },
        {
          type: "code",
          language: "jsx",
          code: `// Common React use: rendering lists

const users = [
  { id: 1, name: "Deepak" },
  { id: 2, name: "Raj" },
];

return (
  <ul>
    {users.map(user => (
      <li key={user.id}>
        {user.name}
      </li>
    ))}
  </ul>
);`,
        },
      ],
    },

    // =========================================================
    // FILTER
    // =========================================================
    {
      id: "filter",
      title: "filter() — Keep Matching Elements",
      blocks: [
        {
          type: "text",
          text: "filter() creates a NEW array containing only the elements for which the callback returns true. It does not mutate the original array.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [1, 2, 3, 4, 5, 6];

const evens = numbers.filter(num => num % 2 === 0);

console.log(evens);
// [2, 4, 6]`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const users = [
  { name: "Deepak", active: true },
  { name: "Raj", active: false },
  { name: "Priya", active: true },
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);

/*
[
  { name: "Deepak", active: true },
  { name: "Priya", active: true }
]
*/`,
        },
        {
          type: "code",
          language: "jsx",
          code: `// Common React use: removing an item from state

const deleteTodo = id => {
  setTodos(prevTodos =>
    prevTodos.filter(todo => todo.id !== id)
  );
};`,
        },
      ],
    },

    // =========================================================
    // REDUCE
    // =========================================================
    {
      id: "reduce",
      title: "reduce() — Build One Final Result",
      blocks: [
        {
          type: "text",
          text: "reduce() processes every element and carries an accumulator from one iteration to the next. The final result can be a number, string, array, object, or another type. Whatever the callback RETURNS becomes the accumulator for the next iteration.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum);
// 15

/*
Initial acc = 0

acc=0,  curr=1 -> return 1
acc=1,  curr=2 -> return 3
acc=3,  curr=3 -> return 6
acc=6,  curr=4 -> return 10
acc=10, curr=5 -> return 15
*/`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// Real-life example: shopping cart total

const cart = [
  { item: "Shoes", price: 2000 },
  { item: "T-Shirt", price: 500 },
  { item: "Watch", price: 3000 },
];

const total = cart.reduce((acc, product) => {
  return acc + product.price;
}, 0);

console.log(total);
// 5500`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// Build an array using reduce()

const names = cart.reduce((acc, product) => {
  acc.push(product.item);

  // IMPORTANT:
  // push() returns the new length.
  // We need to return acc, not acc.push(...)
  return acc;
}, []);

console.log(names);
// ["Shoes", "T-Shirt", "Watch"]`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// Convert an array into an object

const priceByItem = cart.reduce((acc, product) => {
  acc[product.item] = product.price;
  return acc;
}, {});

console.log(priceByItem);

/*
{
  Shoes: 2000,
  "T-Shirt": 500,
  Watch: 3000
}
*/`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// Count occurrences

const fruits = [
  "apple",
  "mango",
  "apple",
  "banana",
  "mango",
  "apple",
];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);

/*
{
  apple: 3,
  mango: 2,
  banana: 1
}
*/`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// Group data

const employees = [
  { name: "Deepak", dept: "IT" },
  { name: "Raj", dept: "HR" },
  { name: "Priya", dept: "IT" },
];

const grouped = employees.reduce((acc, employee) => {
  if (!acc[employee.dept]) {
    acc[employee.dept] = [];
  }

  acc[employee.dept].push(employee);

  return acc;
}, {});

console.log(grouped);

/*
{
  IT: [
    { name: "Deepak", dept: "IT" },
    { name: "Priya", dept: "IT" }
  ],
  HR: [
    { name: "Raj", dept: "HR" }
  ]
}
*/`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "reduce() rule: whatever you return becomes acc in the next iteration. If acc starts as [], but you return acc.join(', '), the next acc will be a string, not an array.",
        },
      ],
    },

    // =========================================================
    // FOREACH
    // =========================================================
    {
      id: "foreach",
      title: "forEach() — Execute Something for Every Element",
      blocks: [
        {
          type: "text",
          text: "forEach() executes a callback for every element. It is useful for side effects such as logging or calling another function. forEach() itself returns undefined.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const fruits = ["Apple", "Mango", "Banana"];

fruits.forEach(fruit => {
  console.log(fruit);
});

/*
Apple
Mango
Banana
*/

const result = fruits.forEach(fruit => fruit);

console.log(result);
// undefined`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "Use map() when you want to transform an array into a new array. Use forEach() when you only want to perform an action for each element.",
        },
      ],
    },

    // =========================================================
    // FIND
    // =========================================================
    {
      id: "find",
      title: "find() — Find the First Matching Element",
      blocks: [
        {
          type: "text",
          text: "find() returns the first element that passes the condition. If no element matches, it returns undefined.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const users = [
  { id: 1, name: "Deepak" },
  { id: 2, name: "Raj" },
  { id: 3, name: "Priya" },
];

const user = users.find(user => user.id === 2);

console.log(user);
// { id: 2, name: "Raj" }

const missing = users.find(user => user.id === 100);

console.log(missing);
// undefined`,
        },
      ],
    },

    // =========================================================
    // FINDINDEX
    // =========================================================
    {
      id: "findindex",
      title: "findIndex() — Find the Index of First Match",
      blocks: [
        {
          type: "text",
          text: "findIndex() returns the index of the first element that passes the condition. If nothing matches, it returns -1.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const users = [
  { id: 1, name: "Deepak" },
  { id: 2, name: "Raj" },
  { id: 3, name: "Priya" },
];

const index = users.findIndex(user => user.id === 2);

console.log(index);
// 1

console.log(users.findIndex(user => user.id === 99));
// -1`,
        },
      ],
    },

    // =========================================================
    // SOME
    // =========================================================
    {
      id: "some",
      title: "some() — Does At Least One Element Match?",
      blocks: [
        {
          type: "text",
          text: "some() returns true if at least ONE element passes the condition. It returns false if none match.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [1, 2, 3, 4, 5];

console.log(numbers.some(num => num > 4));
// true

console.log(numbers.some(num => num > 10));
// false

const users = [
  { name: "Deepak", active: false },
  { name: "Raj", active: true },
];

const hasActiveUser = users.some(user => user.active);

console.log(hasActiveUser);
// true`,
        },
      ],
    },

    // =========================================================
    // EVERY
    // =========================================================
    {
      id: "every",
      title: "every() — Do All Elements Match?",
      blocks: [
        {
          type: "text",
          text: "every() returns true only when ALL elements pass the condition. If even one element fails, it returns false.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [2, 4, 6, 8];

console.log(numbers.every(num => num % 2 === 0));
// true

console.log(numbers.every(num => num > 3));
// false`,
        },
      ],
    },

    // =========================================================
    // INCLUDES
    // =========================================================
    {
      id: "includes",
      title: "includes() — Check Whether a Value Exists",
      blocks: [
        {
          type: "text",
          text: "includes() checks whether an array contains a specific value and returns true or false.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.includes("Mango"));
// true

console.log(fruits.includes("Orange"));
// false`,
        },
      ],
    },

    // =========================================================
    // INDEXOF / LASTINDEXOF
    // =========================================================
    {
      id: "indexof-lastindexof",
      title: "indexOf() & lastIndexOf()",
      blocks: [
        {
          type: "text",
          text: "indexOf() returns the index of the first occurrence of a value. lastIndexOf() returns the index of the last occurrence. Both return -1 when the value is not found.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [1, 2, 3, 2, 5];

console.log(numbers.indexOf(2));
// 1

console.log(numbers.lastIndexOf(2));
// 3

console.log(numbers.indexOf(100));
// -1`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [1, 2, 3, 4, 5];

// 2 occurs only once
console.log(numbers.indexOf(2));
// 1

console.log(numbers.lastIndexOf(2));
// 1

// Same result because there is only one 2.`,
        },
      ],
    },

    // =========================================================
    // AT
    // =========================================================
    {
      id: "at",
      title: "at() — Access an Element by Index",
      blocks: [
        {
          type: "text",
          text: "at() returns the element at a given index. Unlike bracket notation, at() conveniently supports negative indexes.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.at(0));
// "Apple"

console.log(fruits.at(1));
// "Mango"

console.log(fruits.at(-1));
// "Banana"

console.log(fruits.at(-2));
// "Mango"`,
        },
      ],
    },

    // =========================================================
    // SLICE
    // =========================================================
    {
      id: "slice",
      title: "slice() — Copy Part of an Array",
      blocks: [
        {
          type: "text",
          text: "slice(start, end) returns a new array containing elements from start up to, but NOT including, end. It does not mutate the original array.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);

console.log(result);
// [20, 30, 40]

console.log(numbers);
// [10, 20, 30, 40, 50]

// Negative index
console.log(numbers.slice(-2));
// [40, 50]`,
        },
      ],
    },

    // =========================================================
    // SPLICE
    // =========================================================
    {
      id: "splice",
      title: "splice() — Add, Remove, or Replace Elements",
      blocks: [
        {
          type: "text",
          text: "splice(start, deleteCount, ...items) modifies the original array. It can remove, insert, or replace elements. It returns an array containing the removed elements.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = ["a", "b"];

const removed = arr.splice(1, 0, "x", "y");

console.log(removed);
// []

console.log(arr);
// ["a", "x", "y", "b"]

// start = 1
// deleteCount = 0
// insert "x" and "y"`,
        },
        {
          type: "code",
          language: "javascript",
          code: `let arr = ["a", "x", "y", "b", "f", "u"];

const removed = arr.splice(4, 5);

console.log(removed);
// ["f", "u"]

console.log(arr);
// ["a", "x", "y", "b"]

// Asked to remove 5,
// but only 2 elements existed from index 4.`,
        },
        {
          type: "code",
          language: "javascript",
          code: `let arr = ["a", "x", "y", "b"];

const removed = arr.splice(0, 1, "f", "u");

console.log(removed);
// ["a"]

console.log(arr);
// ["f", "u", "x", "y", "b"]

// Removed "a"
// Inserted "f" and "u" at index 0.`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "Memory trick: splice(where to start, how many to remove, what to insert). splice() mutates; slice() does not.",
        },
      ],
    },

    // =========================================================
    // CONCAT
    // =========================================================
    {
      id: "concat",
      title: "concat() — Combine Arrays",
      blocks: [
        {
          type: "text",
          text: "concat() combines arrays or values and returns a new array. It does not mutate the original arrays.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const frontend = ["HTML", "CSS", "JavaScript"];
const frameworks = ["React", "Next.js"];

const skills = frontend.concat(frameworks);

console.log(skills);

/*
[
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js"
]
*/`,
        },
      ],
    },

    // =========================================================
    // JOIN
    // =========================================================
    {
      id: "join",
      title: "join() — Convert Array Elements into a String",
      blocks: [
        {
          type: "text",
          text: "join(separator) combines all array elements into one string. The separator is placed BETWEEN elements, so it does not create an unwanted separator after the final element.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.join(", "));
// "Apple, Mango, Banana"

console.log(fruits.join(" - "));
// "Apple - Mango - Banana"

console.log(fruits.join(""));
// "AppleMangoBanana"`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const cart = [
  { item: "Shoes", price: 2000 },
  { item: "T-Shirt", price: 500 },
  { item: "Watch", price: 3000 },
];

const names = cart
  .map(product => product.item)
  .join(", ");

console.log(names);
// "Shoes, T-Shirt, Watch"`,
        },
      ],
    },

    // =========================================================
    // REVERSE
    // =========================================================
    {
      id: "reverse",
      title: "reverse() — Reverse an Array",
      blocks: [
        {
          type: "text",
          text: "reverse() reverses the order of elements and mutates the original array.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [1, 2, 3, 4];

numbers.reverse();

console.log(numbers);
// [4, 3, 2, 1]

// Avoid mutating the original
const original = [1, 2, 3, 4];
const reversed = [...original].reverse();

console.log(original);
// [1, 2, 3, 4]

console.log(reversed);
// [4, 3, 2, 1]`,
        },
      ],
    },

    // =========================================================
    // SORT
    // =========================================================
    {
      id: "sort",
      title: "sort() — Sort Elements",
      blocks: [
        {
          type: "text",
          text: "sort() sorts an array IN PLACE, so it mutates the original array. For numeric sorting, provide a comparator function.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [10, 2, 30, 5];

// Wrong for numeric sorting:
console.log([...numbers].sort());
// [10, 2, 30, 5]

// Ascending
const ascending = [...numbers].sort((a, b) => a - b);

console.log(ascending);
// [2, 5, 10, 30]

// Descending
const descending = [...numbers].sort((a, b) => b - a);

console.log(descending);
// [30, 10, 5, 2]`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const users = [
  { name: "A", age: 30 },
  { name: "B", age: 20 },
  { name: "C", age: 25 },
];

const byAge = [...users].sort((a, b) => a.age - b.age);

console.log(byAge);

/*
[
  { name: "B", age: 20 },
  { name: "C", age: 25 },
  { name: "A", age: 30 }
]
*/`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "sort() mutates the array. In React, avoid sorting state directly. Use [...arr].sort(...) or toSorted() where supported.",
        },
      ],
    },

    // =========================================================
    // FLAT
    // =========================================================
    {
      id: "flat",
      title: "flat() — Flatten Nested Arrays",
      blocks: [
        {
          type: "text",
          text: "flat(depth) removes nested array levels and returns a new array. The default depth is 1.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = [1, [2, 3], [4, 5]];

console.log(arr.flat());
// [1, 2, 3, 4, 5]

const deeplyNested = [
  1,
  [2, [3, [4]]]
];

console.log(deeplyNested.flat(2));
// [1, 2, 3, [4]]

console.log(deeplyNested.flat(Infinity));
// [1, 2, 3, 4]`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const cart = [
  { item: "Shoes", price: 2000 },
  { item: "T-Shirt", price: 500 },
  { item: "Watch", price: 3000 },
];

console.log(cart.flat());

/*
Same array structure because there are
no nested arrays to flatten.

[
  { item: "Shoes", price: 2000 },
  { item: "T-Shirt", price: 500 },
  { item: "Watch", price: 3000 }
]
*/`,
        },
      ],
    },

    // =========================================================
    // FLATMAP
    // =========================================================
    {
      id: "flatmap",
      title: "flatMap() — Transform and Flatten",
      blocks: [
        {
          type: "text",
          text: "flatMap() transforms every element like map(), then flattens the result by exactly one level. It is essentially map(callback).flat(1).",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [1, 2, 3];

// map() produces nested arrays
const mapped = numbers.map(num => [num, num * 2]);

console.log(mapped);

/*
[
  [1, 2],
  [2, 4],
  [3, 6]
]
*/

// flatMap() transforms + flattens
const result = numbers.flatMap(num => [num, num * 2]);

console.log(result);
// [1, 2, 2, 4, 3, 6]`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const users = [
  {
    name: "Deepak",
    skills: ["JavaScript", "React"],
  },
  {
    name: "Raj",
    skills: ["Node.js", "MongoDB"],
  },
];

// map()
const nestedSkills = users.map(user => user.skills);

console.log(nestedSkills);

/*
[
  ["JavaScript", "React"],
  ["Node.js", "MongoDB"]
]
*/

// flatMap()
const skills = users.flatMap(user => user.skills);

console.log(skills);

/*
[
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB"
]
*/`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// One element can produce zero, one, or many elements.

const numbers = [1, 2, 3, 4];

const evens = numbers.flatMap(num => {
  return num % 2 === 0 ? [num] : [];
});

console.log(evens);
// [2, 4]

/*
Internally:

1 -> []
2 -> [2]
3 -> []
4 -> [4]

After flattening:
[2, 4]
*/`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "Think of flatMap() as: for each item, return an array, then merge all those arrays into one array. It only flattens one level.",
        },
      ],
    },

    // =========================================================
    // FILL
    // =========================================================
    {
      id: "fill",
      title: "fill() — Fill Array Positions with a Value",
      blocks: [
        {
          type: "text",
          text: "fill(value, start, end) replaces elements with a value. It mutates the original array. start is inclusive and end is exclusive.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [1, 2, 3, 4, 5];

numbers.fill(0);

console.log(numbers);
// [0, 0, 0, 0, 0]

const arr = [1, 2, 3, 4, 5];

arr.fill("x", 1, 4);

console.log(arr);
// [1, "x", "x", "x", 5]`,
        },
      ],
    },

    // =========================================================
    // COPYWITHIN
    // =========================================================
    {
      id: "copywithin",
      title: "copyWithin() — Copy Elements Inside the Same Array",
      blocks: [
        {
          type: "text",
          text: "copyWithin(target, start, end) copies elements from one part of an array to another part of the SAME array. target means where to paste, start means where to copy from, and end means stop before this index. It mutates the array and does not change its length.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = [1, 2, 3, 4];

arr.copyWithin(0, 2);

console.log(arr);
// [3, 4, 3, 4]

/*
copyWithin(0, 2)

target = 0
Paste starting at index 0.

start = 2
Copy starting from index 2.

end is omitted,
so copy until the end.

Copied values:
[3, 4]

Before:
[1, 2, 3, 4]

After:
[3, 4, 3, 4]
*/`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = [1, 2, 3, 4, 5];

arr.copyWithin(0, 2, 4);

console.log(arr);
// [3, 4, 3, 4, 5]

/*
target = 0
start  = 2
end    = 4

Copy indexes 2 and 3:
[3, 4]

Paste starting at index 0.
*/`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = [1, 2, 3, 4, 5];

arr.copyWithin(-2, 0, 2);

console.log(arr);
// [1, 2, 3, 1, 2]

/*
target = -2

Array length = 5

5 + (-2) = 3

So paste starts at index 3.

Copy indexes 0 and 1:
[1, 2]
*/`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "Memory trick: copyWithin(pasteHere, copyFromHere, stopBeforeHere). It overwrites existing values; it does not insert new elements.",
        },
      ],
    },

    // =========================================================
    // ENTRIES
    // =========================================================
    {
      id: "entries",
      title: "entries() — Get Index and Value Together",
      blocks: [
        {
          type: "text",
          text: "entries() returns an iterator containing [index, value] pairs. It is commonly used with for...of when you need both the index and value.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const fruits = [
  "Apple",
  "Mango",
  "Banana",
];

for (const entry of fruits.entries()) {
  console.log(entry);
}

/*
[0, "Apple"]
[1, "Mango"]
[2, "Banana"]
*/`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const fruits = [
  "Apple",
  "Mango",
  "Banana",
];

// Array destructuring
for (const [index, fruit] of fruits.entries()) {
  console.log(index, fruit);
}

/*
0 Apple
1 Mango
2 Banana
*/`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const students = [
  "Deepak",
  "Raj",
  "Priya",
];

for (const [index, student] of students.entries()) {
  console.log(\`\${index + 1}. \${student}\`);
}

/*
1. Deepak
2. Raj
3. Priya
*/`,
        },
      ],
    },

    // =========================================================
    // KEYS / VALUES
    // =========================================================
    {
      id: "keys-values",
      title: "keys() & values()",
      blocks: [
        {
          type: "text",
          text: "keys() returns an iterator containing array indexes. values() returns an iterator containing array values.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const fruits = ["Apple", "Mango", "Banana"];

for (const index of fruits.keys()) {
  console.log(index);
}

/*
0
1
2
*/

for (const fruit of fruits.values()) {
  console.log(fruit);
}

/*
Apple
Mango
Banana
*/`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "keys() gives indexes, values() gives values, and entries() gives [index, value] pairs.",
        },
      ],
    },

    // =========================================================
    // TOSTRING
    // =========================================================
    {
      id: "tostring",
      title: "toString() — Convert Array to String",
      blocks: [
        {
          type: "text",
          text: "toString() converts an array into a comma-separated string.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const fruits = ["Apple", "Mango", "Banana"];

const result = fruits.toString();

console.log(result);
// "Apple,Mango,Banana"

// join() gives more control over separator
console.log(fruits.join(", "));
// "Apple, Mango, Banana"`,
        },
      ],
    },

    // =========================================================
    // ARRAY.ISARRAY
    // =========================================================
    {
      id: "isarray",
      title: "Array.isArray() — Check Whether a Value Is an Array",
      blocks: [
        {
          type: "text",
          text: "Array.isArray(value) returns true when the supplied value is an array and false otherwise.",
        },
        {
          type: "code",
          language: "javascript",
          code: `console.log(Array.isArray([1, 2, 3]));
// true

console.log(Array.isArray("hello"));
// false

console.log(Array.isArray({ name: "Deepak" }));
// false

console.log(Array.isArray([]));
// true`,
        },
      ],
    },

    // =========================================================
    // METHOD COMPARISON
    // =========================================================
    {
      id: "method-comparison",
      title: "Which Array Method Should I Use?",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `/*
Need to transform every item?
-> map()

Need only matching items?
-> filter()

Need one matching item?
-> find()

Need index of one matching item?
-> findIndex()

Need to check if at least one matches?
-> some()

Need to check if all match?
-> every()

Need to accumulate/build a result?
-> reduce()

Need to perform an action for every item?
-> forEach()

Need to check whether a primitive value exists?
-> includes()

Need first position of a value?
-> indexOf()

Need last position of a value?
-> lastIndexOf()

Need part of an array without mutation?
-> slice()

Need to add/remove/replace in-place?
-> splice()

Need to transform and flatten one level?
-> flatMap()

Need to flatten nested arrays?
-> flat()

Need both index and value?
-> entries()

Need to combine values into a string?
-> join()
*/`,
        },
      ],
    },

    // =========================================================
    // MUTATING VS NON-MUTATING
    // =========================================================
    {
      id: "mutation",
      title: "Mutating vs Non-Mutating Methods",
      blocks: [
        {
          type: "text",
          text: "A mutating method changes the original array. A non-mutating method leaves the original array unchanged and usually returns a new value or array. This distinction is especially important when working with React state.",
        },
        {
          type: "code",
          language: "javascript",
          code: `/*
COMMON MUTATING METHODS
-----------------------
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
fill()
copyWithin()


COMMON NON-MUTATING METHODS
---------------------------
map()
filter()
reduce()
find()
findIndex()
some()
every()
includes()
indexOf()
lastIndexOf()
slice()
concat()
join()
flat()
flatMap()
at()
entries()
keys()
values()
*/`,
        },
        {
          type: "code",
          language: "jsx",
          code: `// ❌ Avoid mutating React state

users.push(newUser);
setUsers(users);


// ✅ Create a new array

setUsers([
  ...users,
  newUser,
]);


// ❌ Avoid sorting state directly

users.sort((a, b) => a.age - b.age);


// ✅ Sort a copy

const sortedUsers = [...users].sort(
  (a, b) => a.age - b.age
);`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "For React, always pay attention to mutation. Methods such as push(), splice(), sort(), and reverse() modify the original array and should not normally be called directly on state.",
        },
      ],
    },
    // =========================================================
    // FINDLAST
    // =========================================================
    {
      id: "findlast",
      title: "findLast() — Find the Last Matching Element",
      blocks: [
        {
          type: "text",
          text: "findLast() searches the array from right to left and returns the LAST element that satisfies the condition. If nothing matches, it returns undefined.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [5, 12, 8, 130, 44];

// find() searches from left to right
const first = numbers.find(num => num > 10);
console.log(first);
// 12

// findLast() searches from right to left
const last = numbers.findLast(num => num > 10);
console.log(last);
// 44

const users = [
  { id: 1, name: "Deepak", active: true },
  { id: 2, name: "Raj", active: false },
  { id: 3, name: "Priya", active: true },
];

const lastActive = users.findLast(user => user.active);

console.log(lastActive);
// { id: 3, name: "Priya", active: true }`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "find() returns the first matching element. findLast() returns the last matching element.",
        },
      ],
    },

    // =========================================================
    // FINDLASTINDEX
    // =========================================================
    {
      id: "findlastindex",
      title: "findLastIndex() — Find Index of Last Match",
      blocks: [
        {
          type: "text",
          text: "findLastIndex() searches from right to left and returns the index of the last element that satisfies the condition. It returns -1 if nothing matches.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [5, 12, 8, 130, 44];

const index = numbers.findLastIndex(num => num > 10);

console.log(index);
// 4

console.log(numbers[index]);
// 44

const users = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: true },
];

console.log(users.findLastIndex(user => user.active));
// 2`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "findIndex() gives the index of the first match. findLastIndex() gives the index of the last match.",
        },
      ],
    },

    // =========================================================
    // REDUCERIGHT
    // =========================================================
    {
      id: "reduceright",
      title: "reduceRight() — Reduce from Right to Left",
      blocks: [
        {
          type: "text",
          text: "reduceRight() works like reduce(), but processes elements from the END of the array toward the beginning.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [1, 2, 3, 4];

const result = numbers.reduceRight((acc, curr) => {
  return acc + curr;
}, 0);

console.log(result);
// 10

/*
Order of processing:

acc = 0, curr = 4 -> 4
acc = 4, curr = 3 -> 7
acc = 7, curr = 2 -> 9
acc = 9, curr = 1 -> 10
*/`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// Direction matters when building strings

const letters = ["A", "B", "C"];

const leftToRight = letters.reduce(
  (acc, curr) => acc + curr,
  ""
);

console.log(leftToRight);
// "ABC"

const rightToLeft = letters.reduceRight(
  (acc, curr) => acc + curr,
  ""
);

console.log(rightToLeft);
// "CBA"`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "reduce() processes left → right. reduceRight() processes right → left.",
        },
      ],
    },

    // =========================================================
    // TOREVERSED
    // =========================================================
    {
      id: "toreversed",
      title: "toReversed() — Reverse Without Mutation",
      blocks: [
        {
          type: "text",
          text: "toReversed() returns a NEW reversed array without changing the original array. It is the non-mutating alternative to reverse().",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [1, 2, 3, 4];

const reversed = numbers.toReversed();

console.log(reversed);
// [4, 3, 2, 1]

console.log(numbers);
// [1, 2, 3, 4] ← unchanged`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// reverse() MUTATES

const a = [1, 2, 3];

a.reverse();

console.log(a);
// [3, 2, 1]


// toReversed() DOES NOT MUTATE

const b = [1, 2, 3];

const result = b.toReversed();

console.log(result);
// [3, 2, 1]

console.log(b);
// [1, 2, 3]`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "For React state, toReversed() is safer than reverse() because the original array remains unchanged.",
        },
      ],
    },

    // =========================================================
    // TOSORTED
    // =========================================================
    {
      id: "tosorted",
      title: "toSorted() — Sort Without Mutation",
      blocks: [
        {
          type: "text",
          text: "toSorted() returns a NEW sorted array without modifying the original array. It is the non-mutating alternative to sort().",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [30, 5, 20, 10];

const sorted = numbers.toSorted((a, b) => a - b);

console.log(sorted);
// [5, 10, 20, 30]

console.log(numbers);
// [30, 5, 20, 10] ← unchanged`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const users = [
  { name: "Deepak", age: 30 },
  { name: "Raj", age: 22 },
  { name: "Priya", age: 26 },
];

const sortedUsers = users.toSorted(
  (a, b) => a.age - b.age
);

console.log(sortedUsers);

/*
[
  { name: "Raj", age: 22 },
  { name: "Priya", age: 26 },
  { name: "Deepak", age: 30 }
]
*/

console.log(users);
// Original order remains unchanged`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "sort() mutates the original array. toSorted() returns a new sorted array, which makes it particularly useful with React state.",
        },
      ],
    },

    // =========================================================
    // TOSPLICED
    // =========================================================
    {
      id: "tospliced",
      title: "toSpliced() — Splice Without Mutation",
      blocks: [
        {
          type: "text",
          text: "toSpliced() adds, removes, or replaces elements like splice(), but returns a NEW array instead of modifying the original.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const fruits = [
  "Apple",
  "Mango",
  "Banana",
];

const result = fruits.toSpliced(
  1,
  1,
  "Orange"
);

console.log(result);
// ["Apple", "Orange", "Banana"]

console.log(fruits);
// ["Apple", "Mango", "Banana"]`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = ["a", "b", "c"];

// Insert without deleting anything
const result = arr.toSpliced(
  1,
  0,
  "x",
  "y"
);

console.log(result);
// ["a", "x", "y", "b", "c"]

console.log(arr);
// ["a", "b", "c"]`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "splice() mutates the original array. toSpliced() performs the same kind of operation while returning a new array.",
        },
      ],
    },

    // =========================================================
    // WITH
    // =========================================================
    {
      id: "with",
      title: "with() — Replace an Element Without Mutation",
      blocks: [
        {
          type: "text",
          text: "with(index, value) returns a NEW array with the value at the specified index replaced. The original array remains unchanged.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const fruits = [
  "Apple",
  "Mango",
  "Banana",
];

const updated = fruits.with(
  1,
  "Orange"
);

console.log(updated);
// ["Apple", "Orange", "Banana"]

console.log(fruits);
// ["Apple", "Mango", "Banana"]`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [10, 20, 30, 40];

// Negative indexes are supported
const result = numbers.with(-1, 100);

console.log(result);
// [10, 20, 30, 100]

console.log(numbers);
// [10, 20, 30, 40]`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "with() is similar to arr[index] = value, except with() creates a new array instead of modifying the original.",
        },
      ],
    },

    // =========================================================
    // ARRAY.FROM
    // =========================================================
    {
      id: "array-from",
      title: "Array.from() — Convert to an Array",
      blocks: [
        {
          type: "text",
          text: "Array.from() creates a new array from an iterable or array-like value, such as a string, Set, NodeList, or arguments object.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const word = "React";

const letters = Array.from(word);

console.log(letters);
// ["R", "e", "a", "c", "t"]`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = new Set([
  1,
  2,
  2,
  3,
  3,
]);

const result = Array.from(numbers);

console.log(result);
// [1, 2, 3]`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// Array.from() can also transform values

const result = Array.from(
  [1, 2, 3],
  num => num * 2
);

console.log(result);
// [2, 4, 6]`,
        },
      ],
    },

    // =========================================================
    // ARRAY.FROMASYNC
    // =========================================================
    {
      id: "array-from-async",
      title: "Array.fromAsync() — Create an Array from Async Data",
      blocks: [
        {
          type: "text",
          text: "Array.fromAsync() creates an array from an async iterable, iterable, or array-like input. Unlike Array.from(), it is asynchronous and returns a Promise.",
        },
        {
          type: "code",
          language: "javascript",
          code: `async function* getNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const numbers = await Array.fromAsync(
  getNumbers()
);

console.log(numbers);
// [1, 2, 3]`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// It can also map values while creating the array

async function* getNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const doubled = await Array.fromAsync(
  getNumbers(),
  num => num * 2
);

console.log(doubled);
// [2, 4, 6]`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "Array.from() is synchronous. Array.fromAsync() is asynchronous and returns a Promise, so you normally use await.",
        },
      ],
    },

    // =========================================================
    // ARRAY.OF
    // =========================================================
    {
      id: "array-of",
      title: "Array.of() — Create an Array from Values",
      blocks: [
        {
          type: "text",
          text: "Array.of() creates a new array containing the values passed to it. It is especially useful for understanding the difference between Array.of(5) and new Array(5).",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = Array.of(10, 20, 30);

console.log(arr);
// [10, 20, 30]

console.log(Array.of("Apple"));
// ["Apple"]`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// Important difference

const a = Array.of(5);

console.log(a);
// [5]

console.log(a.length);
// 1


const b = new Array(5);

console.log(b);
// [empty × 5]

console.log(b.length);
// 5`,
        },
      ],
    },

    // =========================================================
    // SYMBOL.ITERATOR
    // =========================================================
    {
      id: "symbol-iterator",
      title: "[Symbol.iterator]() — Array Iterator",
      blocks: [
        {
          type: "text",
          text: "Arrays are iterable. Their [Symbol.iterator]() method returns an iterator that produces array values one at a time. JavaScript uses this behavior internally with features such as for...of and the spread operator.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const fruits = [
  "Apple",
  "Mango",
  "Banana",
];

const iterator = fruits[Symbol.iterator]();

console.log(iterator.next());
// { value: "Apple", done: false }

console.log(iterator.next());
// { value: "Mango", done: false }

console.log(iterator.next());
// { value: "Banana", done: false }

console.log(iterator.next());
// { value: undefined, done: true }`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const fruits = [
  "Apple",
  "Mango",
  "Banana",
];

// for...of uses the array iterator
for (const fruit of fruits) {
  console.log(fruit);
}

/*
Apple
Mango
Banana
*/

// Spread also uses iteration
const copy = [...fruits];

console.log(copy);
// ["Apple", "Mango", "Banana"]`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "You rarely call [Symbol.iterator]() directly in everyday React code, but understanding it explains why arrays work with for...of, spread syntax, and other iterable-based JavaScript features.",
        },
      ],
    },

    // =========================================================
    // LENGTH PROPERTY
    // =========================================================
    {
      id: "length",
      title: "length — Number of Elements",
      blocks: [
        {
          type: "text",
          text: "length is a PROPERTY, not a method. It represents the array's length. Because array indexes start at 0, the last normal element is usually at index length - 1.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const fruits = [
  "Apple",
  "Mango",
  "Banana",
];

console.log(fruits.length);
// 3

console.log(fruits[fruits.length - 1]);
// "Banana"`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// Changing length can modify an array

const numbers = [1, 2, 3, 4, 5];

numbers.length = 3;

console.log(numbers);
// [1, 2, 3]

console.log(numbers.length);
// 3`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "length is not length(). Use arr.length, not arr.length(). Setting length to a smaller number removes elements from the end of the array.",
        },
      ],
    },

    // =========================================================
    // MODERN NON-MUTATING METHODS
    // =========================================================
    {
      id: "modern-non-mutating-methods",
      title: "Modern Non-Mutating Array Methods",
      blocks: [
        {
          type: "text",
          text: "Modern JavaScript provides non-mutating alternatives to several older array operations. These methods are especially useful when working with React state.",
        },
        {
          type: "code",
          language: "javascript",
          code: `/*
MUTATING             NON-MUTATING
--------------------------------------

reverse()          -> toReversed()

sort()             -> toSorted()

splice()           -> toSpliced()

arr[index] = value -> with()
*/


const numbers = [3, 1, 2];

const sorted = numbers.toSorted(
  (a, b) => a - b
);

console.log(sorted);
// [1, 2, 3]

console.log(numbers);
// [3, 1, 2]`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "For React, prefer non-mutating operations when updating state. toSorted(), toReversed(), toSpliced(), and with() make immutable updates easier to read.",
        },
      ],
    },
  ],
};
