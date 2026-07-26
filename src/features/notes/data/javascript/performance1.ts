import type { NotePageData } from "../../../../types/note";

export const performanceTimeComplexityPart1Notes: NotePageData = {
  title: "Performance & Time Complexity — Part 1",
  description:
    "Learn the foundations of algorithm performance: Big O notation, common complexity classes, time and space complexity, binary search, sorting, recursion, and the rules used to analyze JavaScript code.",
  sections: [
    {
      id: "what-is-complexity",
      title: "What Is Time Complexity?",
      blocks: [
        {
          type: "text",
          text: "Time complexity describes how the amount of work performed by an algorithm grows as the input size grows. We usually represent the input size using n.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const first = arr[0];`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "Big O does not normally measure exact execution time in milliseconds. It describes how an algorithm scales as the input becomes larger.",
        },
      ],
    },

    {
      id: "big-o",
      title: "Big O Notation",
      blocks: [
        {
          type: "text",
          text: "Big O notation describes the growth rate of an algorithm. When analyzing complexity, constants and lower-order terms are usually removed because they become less important as the input grows.",
        },
        {
          type: "list",
          items: [
            "O(1) — Constant",
            "O(log n) — Logarithmic",
            "O(n) — Linear",
            "O(n log n) — Linearithmic",
            "O(n²) — Quadratic",
            "O(n³) — Cubic",
            "O(2ⁿ) — Exponential",
          ],
        },
        {
          type: "highlight",
          variant: "tip",
          text: "A useful growth order is: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ).",
        },
      ],
    },

    {
      id: "constant-time",
      title: "O(1) — Constant Time",
      blocks: [
        {
          type: "text",
          text: "An O(1) operation takes approximately the same amount of work regardless of the input size.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const users = ["Amit", "Neha", "Rahul"];

console.log(users[1]);`,
        },
        {
          type: "text",
          text: "Accessing an array element by index is O(1). Whether the array contains 10 elements or 1,000,000 elements, we directly access the requested index.",
        },
      ],
    },

    {
      id: "linear-time",
      title: "O(n) — Linear Time",
      blocks: [
        {
          type: "text",
          text: "An O(n) algorithm performs work proportional to the number of input elements.",
        },
        {
          type: "code",
          language: "javascript",
          code: `users.forEach(user => {
  console.log(user);
});`,
        },
        {
          type: "text",
          text: "If the number of users doubles, the number of iterations approximately doubles.",
        },
      ],
    },

    {
      id: "quadratic-time",
      title: "O(n²) — Quadratic Time",
      blocks: [
        {
          type: "text",
          text: "Quadratic complexity commonly appears when one O(n) operation is performed for every element of another O(n) operation.",
        },
        {
          type: "code",
          language: "javascript",
          code: `users.forEach(user => {
  users.forEach(otherUser => {
    console.log(user, otherUser);
  });
});`,
        },
        {
          type: "text",
          text: "The outer loop runs n times and the inner loop can run n times for each outer iteration, giving n × n = n².",
        },
      ],
    },

    {
      id: "cubic-time",
      title: "O(n³) — Cubic Time",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `users.forEach(user => {
  orders.forEach(order => {
    products.forEach(product => {
      console.log(user, order, product);
    });
  });
});`,
        },
        {
          type: "text",
          text: "When all three collections contain n elements, the work is n × n × n, giving O(n³).",
        },
      ],
    },

    {
      id: "sequential-vs-nested",
      title: "Sequential vs Nested Operations",
      blocks: [
        {
          type: "title",
          text: "Sequential Operations",
        },
        {
          type: "code",
          language: "javascript",
          code: `users.forEach(user => console.log(user));
products.forEach(product => console.log(product));`,
        },
        {
          type: "text",
          text: "If both collections contain n elements, the complexity is O(n) + O(n) = O(2n), which simplifies to O(n).",
        },

        {
          type: "title",
          text: "Nested Operations",
        },
        {
          type: "code",
          language: "javascript",
          code: `users.forEach(user => {
  orders.forEach(order => {
    console.log(user, order);
  });
});`,
        },
        {
          type: "text",
          text: "If both collections contain n elements, the complexity is O(n × n) = O(n²).",
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Sequential operations usually add their complexities. Nested operations usually multiply their complexities.",
        },
      ],
    },

    {
      id: "dominant-term",
      title: "Keep the Dominant Term",
      blocks: [
        {
          type: "text",
          text: "When different complexity terms are added, Big O keeps the term that grows fastest.",
        },
        {
          type: "code",
          language: "text",
          code: `O(n + 1)      → O(n)
O(2n)         → O(n)
O(n² + n)     → O(n²)
O(n³ + n²)    → O(n³)
O(n log n + n) → O(n log n)`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "Do not blindly remove terms involving independent input sizes. O(n + m) usually stays O(n + m) because n and m can grow independently.",
        },
      ],
    },

    {
      id: "independent-inputs",
      title: "Independent Input Sizes",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `users.forEach(user => {        // m users
  orders.forEach(order => {    // n orders
    console.log(user, order);
  });
});

products.forEach(product => {  // p products
  console.log(product);
});`,
        },
        {
          type: "text",
          text: "The nested section costs O(mn), while the separate products loop costs O(p). The total complexity is O(mn + p).",
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Use different variables when collections can have different sizes. This produces more accurate complexity analysis.",
        },
      ],
    },

    {
      id: "logarithmic-time",
      title: "O(log n) — Logarithmic Time",
      blocks: [
        {
          type: "text",
          text: "Logarithmic complexity commonly occurs when each step reduces the remaining problem by a constant factor, such as cutting it in half.",
        },
        {
          type: "code",
          language: "text",
          code: `32
↓
16
↓
8
↓
4
↓
2
↓
1`,
        },
        {
          type: "text",
          text: "This is the core idea behind binary search.",
        },
      ],
    },

    {
      id: "binary-search",
      title: "Binary Search",
      blocks: [
        {
          type: "text",
          text: "Binary search searches sorted data by checking the middle element and eliminating roughly half of the remaining search space after each comparison.",
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
          type: "list",
          items: [
            "target === arr[mid] → target found",
            "target > arr[mid] → search the right half",
            "target < arr[mid] → search the left half",
          ],
        },
        {
          type: "highlight",
          variant: "important",
          text: "Binary search is O(log n), but the data must be sorted or otherwise structured so that half of the remaining search space can safely be discarded.",
        },
      ],
    },

    {
      id: "sorting-complexity",
      title: "O(n log n) — Sorting",
      blocks: [
        {
          type: "text",
          text: "For typical interview analysis, efficient comparison-based sorting is treated as O(n log n). JavaScript Array.sort() is therefore commonly analyzed as O(n log n) for these questions.",
        },
        {
          type: "code",
          language: "javascript",
          code: `numbers.sort((a, b) => a - b);`,
        },
        {
          type: "text",
          text: "The comparison callback returns a negative value when a should come before b, a positive value when b should come before a, and 0 when they are considered equal for ordering.",
        },
        {
          type: "code",
          language: "javascript",
          code: `numbers.sort((a, b) => a - b); // ascending
numbers.sort((a, b) => b - a); // descending`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "sort() mutates the original array. Use [...arr].sort(...) or toSorted(...) when you need to preserve the original array.",
        },
        {
          type: "title",
          text: "Why O(n log n), Not O(log n)?",
        },
        {
          type: "text",
          text: "Binary search follows only one shrinking branch, so it performs roughly log n steps. Efficient comparison sorting has roughly log n levels of organization, but across each level approximately n elements must be processed. That produces n × log n.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "Binary Search → O(log n). Sorting the entire collection → typically O(n log n).",
        },
      ],
    },

    {
      id: "sorting-plus-traversal",
      title: "Sorting Followed by Traversal",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `numbers.sort((a, b) => a - b); // O(n log n)

numbers.forEach(number => {      // O(n)
  console.log(number);
});`,
        },
        {
          type: "text",
          text: "The total is O(n log n + n). Since n log n grows faster than n, the final simplified complexity is O(n log n).",
        },
        {
          type: "highlight",
          variant: "tip",
          text: "sort() + map(), sort() + filter(), or sort() + forEach() are typically O(n log n) overall when the callback work is constant time.",
        },
      ],
    },

    {
      id: "space-complexity",
      title: "Space Complexity",
      blocks: [
        {
          type: "text",
          text: "Auxiliary space complexity describes how much additional memory an algorithm requires as the input grows, excluding the input itself.",
        },
        {
          type: "code",
          language: "javascript",
          code: `function countActiveUsers(users) {
  let count = 0;

  users.forEach(user => {
    if (user.active) {
      count++;
    }
  });

  return count;
}`,
        },
        {
          type: "text",
          text: "The function takes O(n) time but O(1) auxiliary space because count is a single variable whose storage does not grow with the number of users.",
        },
      ],
    },

    {
      id: "linear-space",
      title: "O(n) Space",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `function getNames(users) {
  const names = [];

  users.forEach(user => {
    names.push(user.name);
  });

  return names;
}`,
        },
        {
          type: "text",
          text: "The new names array can contain n values, so the auxiliary space complexity is O(n). The traversal also takes O(n) time.",
        },
      ],
    },

    {
      id: "best-average-worst-case",
      title: "Best, Average & Worst Case",
      blocks: [
        {
          type: "text",
          text: "An algorithm may perform different amounts of work depending on the input. Complexity can therefore be discussed as best case, average case, or worst case.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = users.find(user => user.id === targetId);`,
        },
        {
          type: "list",
          items: [
            "Best case — target is the first element: O(1)",
            "Worst case — target is last or absent: O(n)",
            "Average case — depends on the expected input distribution",
          ],
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Interview questions usually expect worst-case complexity unless another case is explicitly requested.",
        },
      ],
    },

    {
      id: "recursion-complexity",
      title: "Recursion & Complexity",
      blocks: [
        {
          type: "title",
          text: "Reducing by One",
        },
        {
          type: "code",
          language: "javascript",
          code: `function countdown(n) {
  if (n === 0) return;

  countdown(n - 1);
}`,
        },
        {
          type: "text",
          text: "There are approximately n recursive calls, giving O(n) time. The call stack can also reach depth n, giving O(n) auxiliary space.",
        },

        {
          type: "title",
          text: "Reducing by Half",
        },
        {
          type: "code",
          language: "javascript",
          code: `function process(n) {
  if (n <= 1) return;

  process(Math.floor(n / 2));
}`,
        },
        {
          type: "text",
          text: "The input repeatedly halves, giving O(log n) time and O(log n) call-stack space.",
        },

        {
          type: "title",
          text: "Branching Recursion",
        },
        {
          type: "code",
          language: "javascript",
          code: `function process(n) {
  if (n <= 1) return;

  process(n - 1);
  process(n - 1);
}`,
        },
        {
          type: "text",
          text: "Each non-base call creates two more recursive calls. The number of calls grows exponentially, giving O(2ⁿ) time. The maximum active call-stack depth is still O(n).",
        },
      ],
    },

    {
      id: "part-one-summary",
      title: "Part 1 Summary",
      blocks: [
        {
          type: "list",
          items: [
            "O(1) — constant work",
            "O(log n) — problem shrinks by a constant factor",
            "O(n) — work grows linearly",
            "O(n log n) — common efficient sorting complexity",
            "O(n²) — common with two nested linear operations",
            "O(n³) — common with three nested linear operations",
            "O(2ⁿ) — common with branching recursive solutions",
            "Sequential operations usually add complexity",
            "Nested operations usually multiply complexity",
            "Keep the dominant term when simplifying",
            "Independent input sizes should remain separate",
            "Time complexity measures work; auxiliary space measures additional memory",
          ],
        },
      ],
    },

    {
      id: "amortized-complexity",
      title: "Amortized Complexity",
      blocks: [
        {
          type: "text",
          text: "Amortized complexity describes the average cost of an operation across a sequence of operations. A particular operation may occasionally be expensive, while the average cost remains small.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = [];

for (let i = 0; i < n; i++) {
  arr.push(i);
}`,
        },
        {
          type: "text",
          text: "Array push() is generally treated as O(1) amortized. An internal resize may occasionally require copying elements, but this does not happen on every push.",
        },
        {
          type: "highlight",
          variant: "tip",
          text: "O(1) amortized does not mean every individual operation must take constant work. It means the average cost across many operations is constant.",
        },
      ],
    },

    {
      id: "big-o-omega-theta",
      title: "Big O, Big Ω & Big Θ",
      blocks: [
        {
          type: "text",
          text: "Big O is the notation most commonly used in interviews, but formally there are multiple asymptotic notations.",
        },
        {
          type: "list",
          items: [
            "Big O — asymptotic upper bound",
            "Big Ω (Omega) — asymptotic lower bound",
            "Big Θ (Theta) — asymptotically tight bound",
          ],
        },
        {
          type: "highlight",
          variant: "tip",
          text: "For normal frontend and JavaScript interviews, Big O should remain your main focus. Understand Ω and Θ conceptually rather than spending too much time on their mathematical definitions.",
        },
      ],
    },

    {
      id: "input-size-matters",
      title: "Define the Input Size Correctly",
      blocks: [
        {
          type: "text",
          text: "Before calculating complexity, identify what n actually represents. Different collections may require different variables.",
        },
        {
          type: "code",
          language: "javascript",
          code: `users.forEach(user => {       // n users
  orders.forEach(order => {   // m orders
    console.log(user, order);
  });
});

// O(n × m)`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "Do not call every collection n automatically. If their sizes are independent, use variables such as n, m, and p.",
        },
      ],
    },

    {
      id: "complexity-vs-runtime",
      title: "Big O vs Actual Runtime",
      blocks: [
        {
          type: "text",
          text: "Big O describes scalability, not exact execution speed. An O(n) algorithm is not automatically faster than an O(n²) algorithm for every possible small input.",
        },
        {
          type: "text",
          text: "Constants, implementation details, JavaScript engine optimizations, memory access, allocation, input size, and hardware can affect actual execution time.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "Use Big O to reason about growth. Use profiling and measurement to diagnose actual application performance.",
        },
      ],
    },

    {
      id: "average-vs-worst-hash",
      title: "Average vs Worst-Case Lookup",
      blocks: [
        {
          type: "text",
          text: "Map, Set, and hash-based lookup are normally treated as O(1) average time in interview analysis. This is an expected complexity rather than a guarantee that every possible operation always requires constant work.",
        },
        {
          type: "highlight",
          variant: "tip",
          text: "For normal JavaScript interview questions, Map.get(), Map.set(), Map.has(), Set.add(), and Set.has() can generally be treated as O(1) average.",
        },
      ],
    },

    {
      id: "in-place-vs-extra-space",
      title: "In-Place vs Extra-Space Algorithms",
      blocks: [
        {
          type: "text",
          text: "An in-place algorithm modifies the existing data structure instead of creating another structure proportional to the input size.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// Modifies the original array
numbers.reverse();

// Creates another array
const reversed = [...numbers].reverse();`,
        },
        {
          type: "text",
          text: "The second approach requires O(n) additional storage for the copied array. This distinction matters when discussing auxiliary space.",
        },
      ],
    },

    {
      id: "recursion-tree",
      title: "Recursion Trees",
      blocks: [
        {
          type: "text",
          text: "For branching recursion, looking only at recursion depth is not enough to determine time complexity. You must also consider how many calls are created at each level.",
        },
        {
          type: "code",
          language: "text",
          code: `                f(n)
              /      \\
          f(n-1)    f(n-1)
          /   \\      /   \\
        ...   ...   ...   ...

Calls per level:
1
2
4
8
...

→ exponential growth`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "Recursion depth helps determine stack space. Total number of recursive calls helps determine time.",
        },
      ],
    },

    {
      id: "complexity-does-not-equal-loops",
      title: "Number of Loops Does Not Directly Equal Big O",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `for (const user of users) {
  console.log(user);
}

for (const user of users) {
  console.log(user.id);
}

for (const user of users) {
  console.log(user.name);
}

// O(3n) → O(n)`,
        },
        {
          type: "text",
          text: "Three sequential loops do not make O(n³). Nested structure and the amount of work performed matter more than the raw number of loops in the source code.",
        },
      ],
    },

    {
      id: "sort-before-binary-search",
      title: "Sorting Before Binary Search",
      blocks: [
        {
          type: "text",
          text: "Binary search is O(log n), but if unsorted data must first be sorted, that preprocessing cost must also be included.",
        },
        {
          type: "code",
          language: "javascript",
          code: `numbers.sort((a, b) => a - b); // O(n log n)

binarySearch(numbers, target);   // O(log n)`,
        },
        {
          type: "text",
          text: "Total: O(n log n + log n), which simplifies to O(n log n).",
        },
        {
          type: "highlight",
          variant: "important",
          text: "For one search on unsorted data, linear search O(n) may be cheaper than sorting first. Sorting becomes more useful when many searches will reuse the sorted data.",
        },
      ],
    },

    {
      id: "preprocessing-tradeoff",
      title: "Preprocessing for Faster Queries",
      blocks: [
        {
          type: "text",
          text: "Sometimes we perform work once so that many future operations become faster. Building a Map, Set, index, grouped structure, or sorted representation is preprocessing.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const usersById = new Map();

users.forEach(user => {
  usersById.set(user.id, user);
});

// Later:
usersById.get(42);`,
        },
        {
          type: "text",
          text: "Building the Map costs O(n) time and O(n) space, but subsequent lookups are O(1) average instead of repeatedly scanning the users array in O(n).",
        },
        {
          type: "highlight",
          variant: "tip",
          text: "A one-time preprocessing cost can be worthwhile when the optimized operation will happen many times.",
        },
      ],
    },
  ],
};
