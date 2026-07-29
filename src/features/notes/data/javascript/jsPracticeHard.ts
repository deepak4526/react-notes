import type { NotePageData } from "../../../../types/note";

export const javascriptPracticeHard: NotePageData = {
  title: "🔴 JavaScript Practice Questions — Hard",
  description:
    "Hard JavaScript interview problems actually practised, covering recursion, nested structures, flattening, deep transformations, binary search, and performance optimisation.",
  //   category: "JavaScript",

  sections: [
    {
      id: "1",
      title: "🔴 Q1 — Flatten Nested Comments",
      blocks: [
        {
          type: "text",
          text: "Given comments where each comment may contain nested replies, flatten the entire tree into one array.",
        },

        {
          type: "title",
          text: "Approach",
        },
        {
          type: "text",
          text: "We used recursion because every reply has the same structural shape as a top-level comment.",
        },

        {
          type: "code",
          language: "javascript",
          code: `function flattenComments(comments) {
  const result = [];

  for (const comment of comments) {
    result.push(comment);

    if (comment.replies?.length) {
      result.push(...flattenComments(comment.replies));
    }
  }

  return result;
}`,
        },

        {
          type: "highlight",
          variant: "important",
          text: "Recursion is a natural fit when the data structure contains smaller versions of itself, such as trees, comments, menus, folders, and category hierarchies.",
        },
        {
          type: "highlight",
          variant: "info",
          text: "Time Complexity: O(n), where n is the total number of comments. Recursion stack depends on maximum nesting depth.",
        },
      ],
    },

    {
      id: "2",
      title: "🔴 Q2 — Flatten a Nested Object into Dotted Keys",
      blocks: [
        {
          type: "text",
          text: "Transform a nested object into a flat object where nested paths become dotted keys.",
        },

        {
          type: "code",
          language: "javascript",
          code: `const input = {
  user: {
    name: "Aman",
    address: {
      city: "Delhi",
    },
  },
};`,
        },

        {
          type: "text",
          text: "Expected result:",
        },
        {
          type: "code",
          language: "javascript",
          code: `{
  "user.name": "Aman",
  "user.address.city": "Delhi"
}`,
        },

        {
          type: "title",
          text: "Solution",
        },
        {
          type: "code",
          language: "javascript",
          code: `function flattenObject(obj, parentKey = "", result = {}) {
  for (const key in obj) {
    const newKey = parentKey
      ? \`\${parentKey}.\${key}\`
      : key;

    const value = obj[key];

    if (
      value !== null &&
      typeof value === "object" &&
      !Array.isArray(value)
    ) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }

  return result;
}`,
        },

        {
          type: "highlight",
          variant: "tip",
          text: "Carry the current path through recursive calls. When a leaf value is reached, use that accumulated path as the output key.",
        },
      ],
    },

    {
      id: "3",
      title: "🔴 Q3 — Count Leaves in a Nested Object",
      blocks: [
        {
          type: "text",
          text: "Count values in a nested object that are leaves rather than nested objects.",
        },

        {
          type: "code",
          language: "javascript",
          code: `function countLeaves(obj) {
  let count = 0;

  for (const key in obj) {
    const value = obj[key];

    if (
      value !== null &&
      typeof value === "object" &&
      !Array.isArray(value)
    ) {
      count += countLeaves(value);
    } else {
      count++;
    }
  }

  return count;
}`,
        },

        {
          type: "highlight",
          variant: "important",
          text: "A recursive counting problem usually has two cases: recursive case for nested structures and base/leaf case where the count is increased.",
        },
      ],
    },

    {
      id: "4",
      title: "🔴 Q4 — Group Employees with Counts and Average Salary",
      blocks: [
        {
          type: "text",
          text: "Group employees by department and calculate department-level employee count, total salary, and average salary.",
        },

        {
          type: "title",
          text: "Optimised Strategy",
        },
        {
          type: "text",
          text: "Perform one traversal to build count and total salary for each department. Calculate averages after aggregation rather than repeatedly recalculating them.",
        },

        {
          type: "code",
          language: "javascript",
          code: `const grouped = employees.reduce((acc, employee) => {
  const dept = employee.department;

  if (!acc[dept]) {
    acc[dept] = {
      employeeCount: 0,
      totalSalary: 0,
    };
  }

  acc[dept].employeeCount++;
  acc[dept].totalSalary += employee.salary;

  return acc;
}, {});

for (const dept in grouped) {
  grouped[dept].averageSalary =
    grouped[dept].totalSalary /
    grouped[dept].employeeCount;
}`,
        },

        {
          type: "highlight",
          variant: "tip",
          text: "Aggregate primitive values first. Compute derived values such as averages after the aggregation phase.",
        },
        {
          type: "highlight",
          variant: "info",
          text: "Time Complexity: O(n + k), where k is the number of departments. This simplifies to O(n) when k ≤ n.",
        },
      ],
    },

    {
      id: "5",
      title: "🔴 Q5 — Binary Search",
      blocks: [
        {
          type: "text",
          text: "Search for a target in a sorted array by repeatedly checking the middle element and eliminating half of the remaining search space.",
        },

        {
          type: "code",
          language: "javascript",
          code: `function binarySearch(arr, target) {
  let left = 0;
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
  }

  return -1;
}`,
        },

        {
          type: "highlight",
          variant: "important",
          text: "Binary search is O(log n), not O(n log n). The search space is halved after every comparison.",
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Binary search normally requires sorted data. If you first sort unsorted data, the sorting cost must also be included.",
        },
      ],
    },

    {
      id: "6",
      title: "🔴 Q6 — Sorting + Linear Traversal Complexity",
      blocks: [
        {
          type: "text",
          text: "An algorithm sorts an array and then performs one linear traversal. What is its final time complexity?",
        },

        {
          type: "code",
          language: "javascript",
          code: `arr.sort((a, b) => a - b);

for (const value of arr) {
  // process value
}`,
        },

        {
          type: "text",
          text: "Sorting is typically O(n log n), followed by an O(n) traversal.",
        },

        {
          type: "text",
          text: "Total: O(n log n + n)",
        },

        {
          type: "highlight",
          variant: "important",
          text: "O(n log n + n) simplifies to O(n log n) because n log n grows faster than n and is therefore the dominant term.",
        },

        {
          type: "highlight",
          variant: "warning",
          text: "Do not confuse O(log n) binary search with O(n log n) sorting. Binary search repeatedly halves the search space; comparison sorting generally performs substantially more work.",
        },
      ],
    },

    {
      id: "7",
      title: "🔴 Q7 — Optimise Nested User/Order Traversal",
      blocks: [
        {
          type: "text",
          text: "We analysed the performance problem created when every user searches through all orders.",
        },

        {
          type: "code",
          language: "javascript",
          code: `const result = users.map((user) => {
  const orders = allOrders.filter(
    (order) => order.userId === user.id
  );

  return {
    ...user,
    orders,
  };
});`,
        },

        {
          type: "highlight",
          variant: "warning",
          text: "With n users and m orders, filter() can process m orders for each of n users → O(n × m).",
        },

        {
          type: "title",
          text: "Optimisation",
        },
        {
          type: "code",
          language: "javascript",
          code: `const orderMap = new Map();

for (const order of allOrders) {
  const existing = orderMap.get(order.userId) ?? [];
  existing.push(order);
  orderMap.set(order.userId, existing);
}

const result = users.map((user) => ({
  ...user,
  orders: orderMap.get(user.id) ?? [],
}));`,
        },

        {
          type: "highlight",
          variant: "important",
          text: "Optimisation pattern: replace repeated searches with preprocessing + lookup.",
        },
        {
          type: "highlight",
          variant: "info",
          text: "Before: O(n × m) | After: O(n + m) average",
        },
      ],
    },

    {
      id: "8",
      title: "🔴 Q8 — Choosing Between Object, Map and Set",
      blocks: [
        {
          type: "text",
          text: "Across our optimisation exercises, we compared when Object, Map, and Set are appropriate lookup structures.",
        },

        {
          type: "list",
          items: [
            "Set → membership and uniqueness.",
            "Map → key-value lookup, grouping, caching, and arbitrary key types.",
            "Object → simple string/symbol keyed records and grouped results.",
            "Array.find() → reasonable for one or a small number of searches.",
            "Repeated find()/filter() over the same large dataset → consider preprocessing into Map/Object.",
          ],
        },

        {
          type: "highlight",
          variant: "important",
          text: "Do not use Map just because it is theoretically fast. Build a lookup when repeated searches make preprocessing worthwhile.",
        },
      ],
    },

    {
      id: "9",
      title: "🧠 Hard Revision — Performance Thinking",
      blocks: [
        {
          type: "list",
          items: [
            "Repeated nested traversal → check whether lookup preprocessing can remove it.",
            "Array searched repeatedly by ID → consider Map.",
            "Repeated membership checks → consider Set.",
            "Nested self-similar structure → consider recursion.",
            "Sorted search space → binary search may reduce O(n) search to O(log n).",
            "O(n² + n) → O(n²).",
            "O(n log n + n) → O(n log n).",
            "O(n + m) should not become O(n) when n and m represent independent input sizes.",
            "Optimisation can trade memory for speed.",
          ],
        },

        {
          type: "highlight",
          variant: "tip",
          text: "For interview optimisation questions: first explain the current complexity, identify why repeated work occurs, then introduce the data structure or algorithm that removes that repeated work.",
        },
      ],
    },
  ],
};
