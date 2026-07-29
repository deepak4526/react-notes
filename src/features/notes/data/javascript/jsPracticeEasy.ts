import type { NotePageData } from "../../../../types/note";

export const javascriptPracticeEasy: NotePageData = {
  title: "🟢 JavaScript Practice Questions — Easy",
  description:
    "JavaScript interview questions actually practised, starting from Arrays and Objects and covering core array methods, reduce, Set, loops, functions, and basic time complexity.",

  sections: [
    {
      id: "1",
      title: "🟢 Q1 — Increase Employee Salary by 10%",
      blocks: [
        {
          type: "text",
          text: "Given an array of employees, create a new array where every employee's salary is increased by 10%.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const employees = [
  { id: 1, name: "Aman", salary: 30000 },
  { id: 2, name: "Rahul", salary: 40000 },
  { id: 3, name: "Neha", salary: 50000 },
];`,
        },

        {
          type: "title",
          text: "Your Approach",
        },
        {
          type: "text",
          text: "You identified map() as the correct method because every employee needs to be transformed and the result should contain the same number of employees.",
        },

        {
          type: "title",
          text: "Corrected Solution",
        },
        {
          type: "code",
          language: "javascript",
          code: `const updatedEmployees = employees.map((employee) => ({
  ...employee,
  salary: employee.salary * 1.1,
}));`,
        },

        {
          type: "highlight",
          variant: "tip",
          text: "Use map() when each input element should produce one transformed output element.",
        },
        {
          type: "highlight",
          variant: "info",
          text: "Time Complexity: O(n) | Space Complexity: O(n)",
        },
      ],
    },

    {
      id: "2",
      title: "🟢 Q2 — Filter Active Users",
      blocks: [
        {
          type: "text",
          text: "Given an array of users, return only users whose isActive property is true.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const users = [
  { id: 1, name: "Aman", isActive: true },
  { id: 2, name: "Rahul", isActive: false },
  { id: 3, name: "Neha", isActive: true },
];`,
        },

        {
          type: "title",
          text: "Your Approach",
        },
        {
          type: "text",
          text: "You chose filter() because the requirement is to keep only elements satisfying a condition.",
        },

        {
          type: "title",
          text: "Corrected Solution",
        },
        {
          type: "code",
          language: "javascript",
          code: `const activeUsers = users.filter((user) => user.isActive);`,
        },

        {
          type: "highlight",
          variant: "tip",
          text: "filter() answers: Which elements should remain?",
        },
        {
          type: "highlight",
          variant: "info",
          text: "Time Complexity: O(n) | Space Complexity: O(n) in the worst case.",
        },
      ],
    },

    {
      id: "3",
      title: "🟢 Q3 — Find Product by ID",
      blocks: [
        {
          type: "text",
          text: "Find the product with a particular id from an array of products.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Keyboard" },
];

const productId = 2;`,
        },

        {
          type: "title",
          text: "Your Approach",
        },
        {
          type: "text",
          text: "You selected find() because only one matching product is required.",
        },

        {
          type: "title",
          text: "Corrected Solution",
        },
        {
          type: "code",
          language: "javascript",
          code: `const product = products.find(
  (product) => product.id === productId
);`,
        },

        {
          type: "highlight",
          variant: "important",
          text: "find() returns the first matching element, while filter() always returns an array.",
        },
        {
          type: "highlight",
          variant: "info",
          text: "Time Complexity: O(n) worst case | Space Complexity: O(1)",
        },
      ],
    },

    {
      id: "4",
      title: "🟢 Q4 — Calculate Total Order Amount",
      blocks: [
        {
          type: "text",
          text: "Calculate the total amount of all orders using reduce().",
        },
        {
          type: "code",
          language: "javascript",
          code: `const orders = [
  { id: 1, amount: 500 },
  { id: 2, amount: 1200 },
  { id: 3, amount: 800 },
];`,
        },

        {
          type: "title",
          text: "Your Approach",
        },
        {
          type: "text",
          text: "You used reduce() because multiple values need to be accumulated into one final value.",
        },

        {
          type: "title",
          text: "Corrected Solution",
        },
        {
          type: "code",
          language: "javascript",
          code: `const totalAmount = orders.reduce(
  (total, order) => total + order.amount,
  0
);`,
        },

        {
          type: "highlight",
          variant: "tip",
          text: "reduce() is useful when an array needs to become one accumulated result such as a number, object, array, Map, or Set.",
        },
        {
          type: "highlight",
          variant: "info",
          text: "Time Complexity: O(n) | Space Complexity: O(1)",
        },
      ],
    },

    {
      id: "5",
      title: "🟢 Q5 — Extract User Names",
      blocks: [
        {
          type: "text",
          text: "Given an array of user objects, return an array containing only their names.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const users = [
  { id: 1, name: "Aman" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Neha" },
];`,
        },

        {
          type: "title",
          text: "Your Approach",
        },
        {
          type: "text",
          text: "You recognised that map() is appropriate because each user object is transformed into its name.",
        },

        {
          type: "title",
          text: "Corrected Solution",
        },
        {
          type: "code",
          language: "javascript",
          code: `const names = users.map((user) => user.name);`,
        },

        {
          type: "highlight",
          variant: "info",
          text: "Time Complexity: O(n) | Space Complexity: O(n)",
        },
      ],
    },

    {
      id: "6",
      title: "🟢 Q6 — Count Occurrences",
      blocks: [
        {
          type: "text",
          text: "Count how many times each value occurs in an array using reduce().",
        },
        {
          type: "code",
          language: "javascript",
          code: `const fruits = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
];`,
        },

        {
          type: "title",
          text: "Your Approach",
        },
        {
          type: "text",
          text: "You used reduce() with an object accumulator and dynamic object keys to maintain the count for each value.",
        },

        {
          type: "title",
          text: "Corrected Solution",
        },
        {
          type: "code",
          language: "javascript",
          code: `const counts = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});`,
        },

        {
          type: "title",
          text: "Alternative Using ??",
        },
        {
          type: "code",
          language: "javascript",
          code: `const counts = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] ?? 0) + 1;
  return acc;
}, {});`,
        },

        {
          type: "highlight",
          variant: "important",
          text: "Dynamic keys such as acc[fruit] allow values from the array to become object property names.",
        },
        {
          type: "highlight",
          variant: "info",
          text: "Time Complexity: O(n) | Space Complexity: O(k), where k is the number of unique values.",
        },
      ],
    },

    {
      id: "7",
      title: "🟢 Q7 — Get Unique Values Using Set",
      blocks: [
        {
          type: "text",
          text: "Remove duplicate primitive values from an array.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [1, 2, 2, 3, 4, 4, 5];`,
        },

        {
          type: "title",
          text: "Your Approach",
        },
        {
          type: "text",
          text: "You practised using Set because a Set stores unique values.",
        },

        {
          type: "title",
          text: "Solution",
        },
        {
          type: "code",
          language: "javascript",
          code: `const uniqueNumbers = [...new Set(numbers)];`,
        },

        {
          type: "highlight",
          variant: "tip",
          text: "Set is a simple and readable choice for removing duplicate primitive values.",
        },
        {
          type: "highlight",
          variant: "info",
          text: "Time Complexity: O(n) average | Space Complexity: O(n)",
        },
      ],
    },

    {
      id: "8",
      title: "🟢 Q8 — Why Set Does Not Deduplicate Objects by Content",
      blocks: [
        {
          type: "text",
          text: "We tested what happens when objects containing identical properties are passed into a Set.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = [
  { id: 1 },
  { id: 1 },
];

const set = new Set(arr);

console.log(set);`,
        },

        {
          type: "text",
          text: "The Set contains both objects even though their contents look identical.",
        },

        {
          type: "title",
          text: "Why?",
        },
        {
          type: "text",
          text: "Objects are reference values. The two object literals create two different objects in memory, so Set considers them different values.",
        },

        {
          type: "code",
          language: "javascript",
          code: `const a = { id: 1 };
const b = { id: 1 };

console.log(a === b); // false

const c = a;

console.log(a === c); // true`,
        },

        {
          type: "highlight",
          variant: "important",
          text: "Set can remove duplicate object references, but it does not perform deep comparison of object contents.",
        },
      ],
    },

    {
      id: "9",
      title: "🟢 Q9 — Correct Set Constructor Usage",
      blocks: [
        {
          type: "text",
          text: "We encountered an error while trying to create a Set by passing multiple objects directly to the constructor.",
        },

        {
          type: "title",
          text: "Attempt",
        },
        {
          type: "code",
          language: "javascript",
          code: `const set = new Set({ id: 1 }, { id: 1 });`,
        },

        {
          type: "text",
          text: "This throws a TypeError because the Set constructor expects one iterable argument, not multiple individual values.",
        },

        {
          type: "title",
          text: "Corrected Solution",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = [
  { id: 1 },
  { id: 1 },
];

const set = new Set(arr);`,
        },

        {
          type: "highlight",
          variant: "important",
          text: "new Set() accepts an iterable such as an Array, String, Map, or another Set.",
        },
      ],
    },

    {
      id: "10",
      title: "🟢 Q10 — for...of vs for...in",
      blocks: [
        {
          type: "text",
          text: "We compared for...of and for...in and when each loop should be used.",
        },

        {
          type: "code",
          language: "javascript",
          code: `const arr = ["JavaScript", "React", "TypeScript"];

for (const value of arr) {
  console.log(value);
}`,
        },

        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Aman",
  role: "Frontend Developer",
};

for (const key in user) {
  console.log(key, user[key]);
}`,
        },

        {
          type: "list",
          items: [
            "for...of iterates over values from an iterable.",
            "for...in iterates over enumerable property keys.",
            "for...of is generally preferred when iterating over array values.",
            "for...in is commonly used when working with object keys.",
          ],
        },

        {
          type: "highlight",
          variant: "warning",
          text: "Using for...in on an array gives property/index keys rather than the values themselves.",
        },
      ],
    },

    {
      id: "11",
      title: "🟢 Q11 — Object.keys()",
      blocks: [
        {
          type: "text",
          text: "We practised extracting the keys of an object using Object.keys().",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Aman",
  age: 25,
  role: "Developer",
};

const keys = Object.keys(user);

console.log(keys);
// ["name", "age", "role"]`,
        },

        {
          type: "highlight",
          variant: "tip",
          text: "Object.keys() converts an object's own enumerable string keys into an array, which means array methods can then be used on them.",
        },
      ],
    },

    {
      id: "12",
      title: "🟢 Q12 — Reverse an Array In Place",
      blocks: [
        {
          type: "text",
          text: "Reverse an array without creating another result array by swapping values from the two ends.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = [1, 2, 3, 4, 5];

let left = 0;
let right = arr.length - 1;

while (left < right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];

  left++;
  right--;
}

console.log(arr);
// [5, 4, 3, 2, 1]`,
        },

        {
          type: "highlight",
          variant: "tip",
          text: "The two-pointer pattern is useful when processing an array from both ends.",
        },
        {
          type: "highlight",
          variant: "info",
          text: "Time Complexity: O(n) | Auxiliary Space Complexity: O(1)",
        },
      ],
    },

    {
      id: "13",
      title: "🟢 Q13 — Basic map() Implementation",
      blocks: [
        {
          type: "text",
          text: "We practised understanding map() by recreating its basic behaviour: iterate through an array, call a callback for every value, and collect the callback results.",
        },

        {
          type: "code",
          language: "javascript",
          code: `function customMap(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }

  return result;
}

const numbers = [1, 2, 3];

const doubled = customMap(numbers, (number) => number * 2);

console.log(doubled);
// [2, 4, 6]`,
        },

        {
          type: "highlight",
          variant: "important",
          text: "map() does not just loop over an array. It creates a new array from the return value of the callback for every element.",
        },
        {
          type: "highlight",
          variant: "info",
          text: "Time Complexity: O(n) | Space Complexity: O(n)",
        },
      ],
    },

    {
      id: "14",
      title: "🟢 Q14 — createCounter()",
      blocks: [
        {
          type: "text",
          text: "Create a function that returns another function. Every call to the returned function should return the current value and then increment it.",
        },

        {
          type: "code",
          language: "javascript",
          code: `function createCounter(n) {
  return function () {
    return n++;
  };
}

const counter = createCounter(10);

console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12`,
        },

        {
          type: "title",
          text: "Concept",
        },
        {
          type: "text",
          text: "The returned function continues to access n even after createCounter() has completed. This is closure.",
        },

        {
          type: "highlight",
          variant: "important",
          text: "A closure allows a function to retain access to variables from its lexical environment.",
        },
      ],
    },

    {
      id: "15",
      title: "🟢 Q15 — Basic Time Complexity: Single Loop",
      blocks: [
        {
          type: "text",
          text: "Determine the time complexity of a loop that processes every element once.",
        },
        {
          type: "code",
          language: "javascript",
          code: `for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}`,
        },

        {
          type: "text",
          text: "If the array contains n elements, the loop performs work proportional to n.",
        },

        {
          type: "highlight",
          variant: "info",
          text: "Time Complexity: O(n)",
        },
      ],
    },

    {
      id: "16",
      title: "🟢 Q16 — O(n + 1) Simplifies to O(n)",
      blocks: [
        {
          type: "text",
          text: "Determine the complexity when an algorithm performs one constant operation and then traverses n elements.",
        },
        {
          type: "code",
          language: "javascript",
          code: `console.log("Start");

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}`,
        },

        {
          type: "text",
          text: "The exact expression can be thought of as O(n + 1), but Big O ignores constant terms.",
        },

        {
          type: "highlight",
          variant: "important",
          text: "O(n + 1) simplifies to O(n). Big O describes how runtime grows as input size grows.",
        },
      ],
    },

    {
      id: "17",
      title: "🟢 Q17 — Nested Loops",
      blocks: [
        {
          type: "text",
          text: "Determine the complexity when one loop over n elements runs inside another loop over n elements.",
        },
        {
          type: "code",
          language: "javascript",
          code: `for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    console.log(arr[i], arr[j]);
  }
}`,
        },

        {
          type: "text",
          text: "For each of the n iterations of the outer loop, the inner loop performs n iterations.",
        },

        {
          type: "highlight",
          variant: "info",
          text: "n × n = n² → Time Complexity: O(n²)",
        },
      ],
    },

    {
      id: "18",
      title: "🟢 Q18 — Dominant Term: O(n² + n)",
      blocks: [
        {
          type: "text",
          text: "Determine the final Big O complexity when an algorithm contains a nested O(n²) operation followed by a separate O(n) traversal.",
        },

        {
          type: "text",
          text: "The total work is O(n² + n). As n becomes large, n² grows much faster than n.",
        },

        {
          type: "highlight",
          variant: "important",
          text: "O(n² + n) simplifies to O(n²) because Big O keeps the dominant growth term.",
        },
      ],
    },

    {
      id: "19",
      title: "🟢 Q19 — Constant Time O(1)",
      blocks: [
        {
          type: "text",
          text: "Determine the complexity of accessing an array element directly by index.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const first = arr[0];`,
        },

        {
          type: "text",
          text: "The number of operations does not increase with the size of the array.",
        },

        {
          type: "highlight",
          variant: "info",
          text: "Time Complexity: O(1)",
        },
      ],
    },

    {
      id: "20",
      title: "🟢 Q20 — Binary Search Complexity",
      blocks: [
        {
          type: "text",
          text: "We practised calculating left, right, and mid while repeatedly eliminating half of a sorted search space.",
        },

        {
          type: "code",
          language: "javascript",
          code: `let left = 0;
let right = arr.length - 1;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}`,
        },

        {
          type: "text",
          text: "Each iteration removes approximately half of the remaining search space.",
        },

        {
          type: "highlight",
          variant: "important",
          text: "Binary Search: O(log n). It requires the data/search space to be ordered appropriately.",
        },
      ],
    },

    {
      id: "21",
      title: "🧠 Easy Revision — Choosing the Right Tool",
      blocks: [
        {
          type: "list",
          items: [
            "Transform every element → map()",
            "Keep elements matching a condition → filter()",
            "Find one matching element → find()",
            "Accumulate into one result → reduce()",
            "Need unique primitive values → Set",
            "Iterate iterable values → for...of",
            "Iterate object property keys → for...in / Object.keys()",
            "Direct indexed access → typically O(1)",
            "Single full traversal → O(n)",
            "Nested n × n traversal → O(n²)",
            "Repeatedly halve a sorted search space → O(log n)",
          ],
        },

        {
          type: "highlight",
          variant: "tip",
          text: "In interviews, first identify what the result should look like. That often tells you whether map(), filter(), find(), reduce(), Set, Map, or a loop is appropriate.",
        },
      ],
    },
  ],
};
