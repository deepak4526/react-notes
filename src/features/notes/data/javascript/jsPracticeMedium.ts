import type { NotePageData } from "../../../../types/note";

export const javascriptPracticeMedium: NotePageData = {
  title: "🟡 JavaScript Practice Questions — Medium",
  description:
    "Medium-level JavaScript interview problems actually practised, covering reduce, grouping, merging data, nested objects, lookup optimisation, functions, and performance.",
  //   category: "JavaScript",

  sections: [
    {
      id: "1",
      title: "🟡 Q1 — Group Employees by Department",
      blocks: [
        {
          type: "text",
          text: "Group employees by their department using reduce().",
        },
        {
          type: "code",
          language: "javascript",
          code: `const employees = [
  { name: "Aman", dept: "IT" },
  { name: "Rahul", dept: "HR" },
  { name: "Neha", dept: "IT" },
];`,
        },

        {
          type: "title",
          text: "Your Approach",
        },
        {
          type: "text",
          text: "You used reduce() with the department name as a dynamic object key.",
        },

        {
          type: "title",
          text: "Corrected Solution",
        },
        {
          type: "code",
          language: "javascript",
          code: `const grouped = employees.reduce((acc, employee) => {
  if (!acc[employee.dept]) {
    acc[employee.dept] = [];
  }

  acc[employee.dept].push(employee);

  return acc;
}, {});`,
        },

        {
          type: "highlight",
          variant: "tip",
          text: "Grouping is a common reduce() pattern: determine the key, initialise the bucket, then add the current item.",
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
      title: "🟡 Q2 — Employee Salary, Count and Average",
      blocks: [
        {
          type: "text",
          text: "Calculate total salary, employee count, and average salary from an array of employees.",
        },

        {
          type: "title",
          text: "Your Approach",
        },
        {
          type: "text",
          text: "You used reduce() and maintained totalSalary, employeeCount, and averageSalary in the accumulator. We discussed that recalculating averageSalary during every iteration is unnecessary.",
        },

        {
          type: "title",
          text: "Optimised Solution",
        },
        {
          type: "code",
          language: "javascript",
          code: `const result = employees.reduce(
  (acc, employee) => {
    acc.totalSalary += employee.salary;
    acc.employeeCount++;

    return acc;
  },
  {
    totalSalary: 0,
    employeeCount: 0,
  }
);

result.averageSalary =
  result.employeeCount === 0
    ? 0
    : result.totalSalary / result.employeeCount;`,
        },

        {
          type: "highlight",
          variant: "important",
          text: "When a derived value such as average depends only on final totals, calculate it once after the traversal instead of recalculating it on every iteration.",
        },
        {
          type: "highlight",
          variant: "info",
          text: "Time Complexity: O(n) | Auxiliary Space Complexity: O(1)",
        },
      ],
    },

    {
      id: "3",
      title: "🟡 Q3 — Group Transactions Using Dynamic Keys",
      blocks: [
        {
          type: "text",
          text: "Use reduce() to aggregate transactions based on a dynamic property such as transaction type.",
        },

        {
          type: "code",
          language: "javascript",
          code: `const transactions = [
  { type: "credit", amount: 1000 },
  { type: "debit", amount: 400 },
  { type: "credit", amount: 500 },
];`,
        },

        {
          type: "title",
          text: "Solution Pattern",
        },
        {
          type: "code",
          language: "javascript",
          code: `const totals = transactions.reduce((acc, transaction) => {
  acc[transaction.type] =
    (acc[transaction.type] ?? 0) + transaction.amount;

  return acc;
}, {});`,
        },

        {
          type: "highlight",
          variant: "important",
          text: "Bracket notation allows runtime values such as transaction.type to determine which object property should be updated.",
        },
        {
          type: "highlight",
          variant: "info",
          text: "Time Complexity: O(n) | Space Complexity: O(k)",
        },
      ],
    },

    {
      id: "4",
      title: "🟡 Q4 — Merge Two Arrays by ID",
      blocks: [
        {
          type: "text",
          text: "Merge information from two arrays when objects in both arrays share the same id.",
        },

        {
          type: "title",
          text: "Your Initial Approach",
        },
        {
          type: "text",
          text: "You practised mapping through one array and using find() inside map() to locate the corresponding object from the second array.",
        },

        {
          type: "code",
          language: "javascript",
          code: `const merged = users.map((user) => {
  const details = userDetails.find(
    (detail) => detail.id === user.id
  );

  return {
    ...user,
    ...details,
  };
});`,
        },

        {
          type: "highlight",
          variant: "warning",
          text: "find() can scan the second array for every user. With n users and m details, the worst-case complexity is O(n × m).",
        },

        {
          type: "title",
          text: "Optimised Solution Using Map",
        },
        {
          type: "code",
          language: "javascript",
          code: `const detailsById = new Map(
  userDetails.map((detail) => [detail.id, detail])
);

const merged = users.map((user) => ({
  ...user,
  ...detailsById.get(user.id),
}));`,
        },

        {
          type: "highlight",
          variant: "tip",
          text: "When the same array is repeatedly searched by an identifier, build a lookup structure first.",
        },
        {
          type: "highlight",
          variant: "info",
          text: "Lookup construction: O(m) | Mapping: O(n) | Total: O(n + m), with average O(1) Map lookup.",
        },
      ],
    },

    {
      id: "5",
      title: "🟡 Q5 — Users with Their Orders",
      blocks: [
        {
          type: "text",
          text: "Attach each user's orders to that user.",
        },

        {
          type: "title",
          text: "Initial Approach",
        },
        {
          type: "code",
          language: "javascript",
          code: `const result = users.map((user) => ({
  ...user,
  orders: allOrders.filter(
    (order) => order.userId === user.id
  ),
}));`,
        },

        {
          type: "text",
          text: "For every user, filter() traverses all orders.",
        },

        {
          type: "highlight",
          variant: "warning",
          text: "If there are n users and m orders, this approach is O(n × m).",
        },

        {
          type: "title",
          text: "Optimised Approach Using Map",
        },
        {
          type: "code",
          language: "javascript",
          code: `const ordersByUser = new Map();

for (const order of allOrders) {
  if (!ordersByUser.has(order.userId)) {
    ordersByUser.set(order.userId, []);
  }

  ordersByUser.get(order.userId).push(order);
}

const result = users.map((user) => ({
  ...user,
  orders: ordersByUser.get(user.id) ?? [],
}));`,
        },

        {
          type: "highlight",
          variant: "important",
          text: "Group the orders once, then perform direct lookups instead of rescanning the orders array for every user.",
        },
        {
          type: "highlight",
          variant: "info",
          text: "Grouping: O(m) | Mapping users: O(n) | Total: O(n + m)",
        },
      ],
    },

    {
      id: "6",
      title: "🟡 Q6 — Convert Flat Keys into a Nested Object",
      blocks: [
        {
          type: "text",
          text: "Convert keys such as a_b_c into a nested object structure.",
        },

        {
          type: "code",
          language: "javascript",
          code: `const input = {
  a_b_c: 1,
  a_b_d: 2,
};`,
        },

        {
          type: "text",
          text: "Expected structure:",
        },
        {
          type: "code",
          language: "javascript",
          code: `{
  a: {
    b: {
      c: 1,
      d: 2
    }
  }
}`,
        },

        {
          type: "title",
          text: "Solution",
        },
        {
          type: "code",
          language: "javascript",
          code: `const result = {};

for (const key in input) {
  const keys = key.split("_");
  let current = result;

  keys.forEach((part, index) => {
    if (index === keys.length - 1) {
      current[part] = input[key];
    } else {
      current[part] ??= {};
      current = current[part];
    }
  });
}`,
        },

        {
          type: "highlight",
          variant: "important",
          text: "The current variable acts as a pointer to the current level of the nested object. Updating current does not replace result; it changes where the next operation occurs.",
        },
      ],
    },

    {
      id: "7",
      title: "🟡 Q7 — Find Missing Numbers in a Range",
      blocks: [
        {
          type: "text",
          text: "Given numbers from a range with some values missing, determine which numbers are absent.",
        },

        {
          type: "title",
          text: "Optimised Pattern",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [1, 2, 4, 6, 7];

const numberSet = new Set(numbers);
const missing = [];

for (let i = 1; i <= 7; i++) {
  if (!numberSet.has(i)) {
    missing.push(i);
  }
}

console.log(missing);
// [3, 5]`,
        },

        {
          type: "highlight",
          variant: "tip",
          text: "Set is useful when the main operation is repeated membership checking.",
        },
        {
          type: "highlight",
          variant: "info",
          text: "Creating Set: O(n) average | Range traversal: O(r) | Total: O(n + r)",
        },
      ],
    },

    {
      id: "8",
      title: "🟡 Q8 — once(fn)",
      blocks: [
        {
          type: "text",
          text: "Create a function wrapper that allows the provided function to execute only once.",
        },

        {
          type: "title",
          text: "Solution Pattern",
        },
        {
          type: "code",
          language: "javascript",
          code: `function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      result = fn.apply(this, args);
      called = true;
    }

    return result;
  };
}`,
        },

        {
          type: "text",
          text: "called and result remain available to the returned function because they are captured by closure.",
        },

        {
          type: "highlight",
          variant: "important",
          text: "This exercise combines closures, rest parameters, this, and function invocation control.",
        },
      ],
    },

    {
      id: "9",
      title: "🟡 Q9 — Memoization Concept",
      blocks: [
        {
          type: "text",
          text: "We discussed memoization as a way to cache previously calculated results so repeated calls with the same input can avoid performing the expensive calculation again.",
        },

        {
          type: "code",
          language: "javascript",
          code: `function memoize(fn) {
  const cache = new Map();

  return function (value) {
    if (cache.has(value)) {
      return cache.get(value);
    }

    const result = fn(value);
    cache.set(value, result);

    return result;
  };
}`,
        },

        {
          type: "highlight",
          variant: "tip",
          text: "Memoization trades additional memory for potentially faster repeated computations.",
        },
      ],
    },

    {
      id: "10",
      title: "🟡 Q10 — Simplifying Multiple Complexity Terms",
      blocks: [
        {
          type: "text",
          text: "We practised analysing algorithms with multiple independent input sizes, such as O(n × m + p).",
        },

        {
          type: "highlight",
          variant: "important",
          text: "Do not combine n, m, and p unless they represent the same input size. O(n × m + p) may need to remain O(nm + p).",
        },

        {
          type: "text",
          text: "If all terms refer to the same input size, dominant-term simplification can be applied.",
        },
      ],
    },
  ],
};
