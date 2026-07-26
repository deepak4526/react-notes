import type { NotePageData } from "../../../../types/note";

export const performanceTimeComplexityPart2Notes: NotePageData = {
  title: "Performance & Time Complexity — Part 2",
  description:
    "Apply complexity analysis to JavaScript arrays, objects, Map, Set, sorting, hidden loops, time-space trade-offs, and common interview optimization patterns.",
  sections: [
    {
      id: "common-array-operations",
      title: "Complexity of Common Array Operations",
      blocks: [
        {
          type: "list",
          items: [
            "arr[index] → O(1)",
            "push() → O(1) amortized",
            "pop() → O(1)",
            "shift() → O(n)",
            "unshift() → O(n)",
            "map() → O(n)",
            "filter() → O(n)",
            "forEach() → O(n)",
            "reduce() → O(n)",
            "find() → O(n) worst case",
            "findIndex() → O(n) worst case",
            "includes() → O(n) worst case",
            "some() → O(n) worst case",
            "every() → O(n) worst case",
            "sort() → typically O(n log n) for interview analysis",
          ],
        },
        {
          type: "highlight",
          variant: "important",
          text: "Do not count only visible loops. Methods such as find(), filter(), includes(), and sort() perform work internally.",
        },
      ],
    },

    {
      id: "push-vs-unshift",
      title: "push() vs unshift()",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `for (let i = 0; i < n; i++) {
  arr.push(i);
}

// O(n) overall`,
        },
        {
          type: "text",
          text: "The loop runs n times and push() is O(1) amortized, so the total is O(n).",
        },
        {
          type: "code",
          language: "javascript",
          code: `for (let i = 0; i < n; i++) {
  arr.unshift(i);
}

// O(n²) overall`,
        },
        {
          type: "text",
          text: "unshift() is O(n) because existing elements need their indices adjusted. Performing it repeatedly inside an O(n) loop produces O(n²).",
        },
      ],
    },

    {
      id: "pop-vs-shift",
      title: "Repeated pop() vs shift()",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `while (arr.length > 0) {
  arr.pop();
}

// O(n)`,
        },
        {
          type: "code",
          language: "javascript",
          code: `while (arr.length > 0) {
  arr.shift();
}

// O(n²)`,
        },
        {
          type: "text",
          text: "Repeated shift() performs roughly n + (n - 1) + (n - 2) + ... + 1 units of shifting work, which grows as O(n²).",
        },
      ],
    },

    {
      id: "map-space",
      title: "map() vs forEach() Space",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const names = users.map(user => user.name);

// Time  → O(n)
// Space → O(n)`,
        },
        {
          type: "code",
          language: "javascript",
          code: `users.forEach(user => {
  console.log(user.name);
});

// Time  → O(n)
// Space → O(1) auxiliary`,
        },
        {
          type: "text",
          text: "Both traverse the users, but map() creates a new output array whose size grows with n.",
        },
      ],
    },

    {
      id: "hidden-nested-loops",
      title: "Hidden Nested Loops",
      blocks: [
        {
          type: "text",
          text: "A nested loop does not always appear as two explicit for-loops. Array methods can hide an additional traversal.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const result = users.filter(user => {
  return blockedUsers.includes(user.id);
});`,
        },
        {
          type: "text",
          text: "If users contains n elements and blockedUsers contains m elements, filter() performs O(n) iterations and includes() can perform O(m) work for each user. Total: O(nm).",
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Whenever a loop callback contains find(), filter(), includes(), some(), every(), or another traversal, analyze that inner operation too.",
        },
      ],
    },

    {
      id: "map-find-problem",
      title: "Pattern: map() + find()",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const result = users.map(user => {
  const profile = profiles.find(
    profile => profile.userId === user.id
  );

  return {
    ...user,
    profile,
  };
});`,
        },
        {
          type: "text",
          text: "With n users and m profiles, this costs O(nm) because profiles may be searched repeatedly.",
        },
        {
          type: "title",
          text: "Optimize with Map",
        },
        {
          type: "code",
          language: "javascript",
          code: `const profileMap = new Map();

profiles.forEach(profile => {
  profileMap.set(profile.userId, profile);
});

const result = users.map(user => ({
  ...user,
  profile: profileMap.get(user.id),
}));`,
        },
        {
          type: "text",
          text: "Building the lookup costs O(m), and mapping users costs O(n) with average O(1) Map lookup. Total: O(n + m).",
        },
      ],
    },

    {
      id: "map-filter-problem",
      title: "Pattern: map() + filter()",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const result = users.map(user => {
  const orders = allOrders.filter(
    order => order.userId === user.id
  );

  return {
    ...user,
    orders,
  };
});`,
        },
        {
          type: "text",
          text: "With n users and m orders, repeatedly filtering all orders costs O(nm).",
        },
        {
          type: "title",
          text: "Group First with Map",
        },
        {
          type: "code",
          language: "javascript",
          code: `const ordersByUser = new Map();

allOrders.forEach(order => {
  if (!ordersByUser.has(order.userId)) {
    ordersByUser.set(order.userId, []);
  }

  ordersByUser.get(order.userId).push(order);
});

const result = users.map(user => ({
  ...user,
  orders: ordersByUser.get(user.id) ?? [],
}));`,
        },
        {
          type: "text",
          text: "Grouping all orders costs O(m). Building the final users costs O(n). Total time becomes O(n + m), with O(m) additional lookup storage.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "Use a Map when you need key → value lookup or grouping. A Map value can be one object or an array of objects.",
        },
      ],
    },

    {
      id: "set-membership",
      title: "Pattern: Repeated Membership Checks",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const result = users.filter(user => {
  return !blockedUserIds.includes(user.id);
});`,
        },
        {
          type: "text",
          text: "With n users and m blocked IDs, this can cost O(nm).",
        },
        {
          type: "title",
          text: "Optimize with Set",
        },
        {
          type: "code",
          language: "javascript",
          code: `const blockedSet = new Set(blockedUserIds);

const result = users.filter(user => {
  return !blockedSet.has(user.id);
});`,
        },
        {
          type: "text",
          text: "Creating the Set costs O(m), then filtering users costs O(n) with average O(1) membership checks. Total: O(n + m).",
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Use Set when the main question is: Have I seen this value? Does this value exist? Is this ID blocked/allowed/selected?",
        },
      ],
    },

    {
      id: "duplicate-detection",
      title: "Duplicate Detection",
      blocks: [
        {
          type: "title",
          text: "Nested Loop Approach",
        },
        {
          type: "code",
          language: "javascript",
          code: `function hasDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }

  return false;
}

// Time  → O(n²)
// Space → O(1)`,
        },
        {
          type: "title",
          text: "Set Approach",
        },
        {
          type: "code",
          language: "javascript",
          code: `function hasDuplicate(arr) {
  const seen = new Set();

  for (const item of arr) {
    if (seen.has(item)) {
      return true;
    }

    seen.add(item);
  }

  return false;
}

// Time  → O(n) average
// Space → O(n)`,
        },
      ],
    },

    {
      id: "two-sum-pattern",
      title: "Pattern: Complement Lookup",
      blocks: [
        {
          type: "text",
          text: "When looking for two values that satisfy a relationship, repeatedly searching for the partner can often be replaced with a Set or Map lookup.",
        },
        {
          type: "code",
          language: "javascript",
          code: `function hasPairWithSum(arr, target) {
  const seen = new Set();

  for (const num of arr) {
    const needed = target - num;

    if (seen.has(needed)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}

// Time  → O(n) average
// Space → O(n)`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Instead of asking 'Which other number matches this?', calculate what value is needed and perform a lookup.",
        },
      ],
    },

    {
      id: "unique-values",
      title: "Unique Values",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const unique = [];

numbers.forEach(num => {
  if (!unique.includes(num)) {
    unique.push(num);
  }
});

// Time  → O(n²)
// Space → O(n)`,
        },
        {
          type: "text",
          text: "includes() repeatedly searches the growing unique array.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const unique = new Set(numbers);

// Time  → O(n) average
// Space → O(n)`,
        },
      ],
    },

    {
      id: "time-space-tradeoff",
      title: "Time-Space Trade-Off",
      blocks: [
        {
          type: "text",
          text: "A time-space trade-off occurs when additional memory is used to reduce execution time, or less memory is used at the cost of additional computation.",
        },
        {
          type: "code",
          language: "text",
          code: `Repeated searching:
Time  → O(n²)
Space → O(1)

Lookup structure:
Time  → O(n)
Space → O(n)`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "Optimization does not always mean using less of everything. A faster solution may intentionally use additional memory.",
        },
      ],
    },

    {
      id: "map-set-complexity",
      title: "Map & Set Complexity",
      blocks: [
        {
          type: "list",
          items: [
            "Map.get(key) → O(1) average",
            "Map.set(key, value) → O(1) average",
            "Map.has(key) → O(1) average",
            "Set.has(value) → O(1) average",
            "Set.add(value) → O(1) average",
            "Building a Map/Set from n elements → O(n)",
            "A Map/Set containing up to n entries → O(n) space",
          ],
        },
        {
          type: "highlight",
          variant: "warning",
          text: "O(1) for Map and Set operations refers to expected/average lookup behavior. Avoid treating it as an absolute guarantee for every possible implementation scenario.",
        },
      ],
    },

    {
      id: "object-lookup",
      title: "Object Lookup",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const usersById = {
  1: "Amit",
  2: "Neha",
};

usersById[2];`,
        },
        {
          type: "text",
          text: "Property lookup by key on ordinary objects is generally treated as O(1) average for interview analysis, similar to Map lookup.",
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Map is often clearer when the structure is intentionally being used as a dynamic lookup table, especially when keys are not just strings.",
        },
      ],
    },

    {
      id: "sorting-pattern",
      title: "Pattern: Sorting + Linear Processing",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `products.sort((a, b) => a.price - b.price);

const names = products.map(product => product.name);`,
        },
        {
          type: "text",
          text: "Sorting costs O(n log n) and mapping costs O(n). Therefore the total is O(n log n + n), which simplifies to O(n log n).",
        },
        {
          type: "highlight",
          variant: "important",
          text: "Do not simplify sorting to O(log n). O(log n) describes algorithms such as binary search that follow one shrinking path. Sorting must organize the entire collection.",
        },
      ],
    },

    {
      id: "avoid-repeated-work",
      title: "Pattern: Avoid Repeated Calculations",
      blocks: [
        {
          type: "text",
          text: "Another optimization pattern is moving work outside a loop when the result does not change between iterations.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// Repeated work
users.forEach(user => {
  const activeProducts = products.filter(
    product => product.active
  );

  console.log(user.name, activeProducts.length);
});`,
        },
        {
          type: "text",
          text: "If activeProducts is identical for every user, filtering products repeatedly is unnecessary.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const activeProducts = products.filter(
  product => product.active
);

users.forEach(user => {
  console.log(user.name, activeProducts.length);
});`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "If a calculation does not depend on the current loop item, ask whether it can be calculated once before the loop.",
        },
      ],
    },

    {
      id: "early-exit",
      title: "Pattern: Early Exit",
      blocks: [
        {
          type: "text",
          text: "Some methods stop as soon as the required result is known. This can improve real-world performance even when the worst-case Big O remains O(n).",
        },
        {
          type: "list",
          items: [
            "find() stops after finding a match",
            "some() stops after finding a true result",
            "every() stops after finding a false result",
            "A loop can return or break when further processing is unnecessary",
          ],
        },
        {
          type: "highlight",
          variant: "important",
          text: "Early exit may improve best-case and average performance, but find(), some(), and every() are still O(n) in the worst case.",
        },
      ],
    },

    {
      id: "common-interview-traps",
      title: "Common Interview Traps",
      blocks: [
        {
          type: "list",
          items: [
            "Counting only visible loops and ignoring find(), filter(), includes(), or sort() inside them",
            "Adding complexities for nested operations instead of multiplying them",
            "Multiplying complexities for sequential operations instead of adding them",
            "Simplifying O(n + m) to O(n) when n and m are independent",
            "Calling binary search O(n) even though the search space halves",
            "Calling sort() O(log n) instead of O(n log n)",
            "Ignoring the additional memory required by Map, Set, arrays, or recursion",
            "Assuming an early return changes the worst-case complexity",
            "Optimizing code before identifying the actual expensive operation",
          ],
        },
      ],
    },

    {
      id: "optimization-checklist",
      title: "Performance Optimization Checklist",
      blocks: [
        {
          type: "list",
          items: [
            "Identify the input sizes",
            "Find every traversal, including hidden traversals inside methods",
            "Determine whether operations are sequential or nested",
            "Check for repeated searches by ID or key",
            "Use Map for key → value lookup or grouping",
            "Use Set for membership and uniqueness",
            "Move calculations outside loops when they do not depend on the current item",
            "Consider binary search when data is sorted and repeated searching matters",
            "Account for sort() as O(n log n)",
            "Consider both time and auxiliary space",
            "Simplify only after writing the full complexity",
          ],
        },
      ],
    },

    {
      id: "interview-reasoning",
      title: "How to Explain Complexity in an Interview",
      blocks: [
        {
          type: "text",
          text: "Do not only state the final Big O. Explain where it comes from and then simplify.",
        },
        {
          type: "code",
          language: "text",
          code: `Example:

"The outer map iterates over n users.
For each user, find may scan m profiles.
Therefore the current solution is O(n × m).

I can build a Map from the profiles in O(m),
then retrieve each profile in O(1) average
while mapping the n users.

That reduces the total time to O(n + m)
at the cost of O(m) additional space."`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "A strong interview answer explains the current complexity, identifies the bottleneck, proposes the optimization, and states the new time-space trade-off.",
        },
      ],
    },

    {
      id: "final-cheat-sheet",
      title: "Quick Cheat Sheet",
      blocks: [
        {
          type: "code",
          language: "text",
          code: `Direct array access             → O(1)
Map / Set lookup average        → O(1)
Single traversal                → O(n)
Binary search                   → O(log n)
Efficient comparison sorting    → O(n log n)
Two nested linear operations    → O(n²)
Three nested linear operations  → O(n³)
Branching recursion example     → O(2ⁿ)

Separate n + m loops            → O(n + m)
Nested n and m loops            → O(nm)

sort + map                      → O(n log n + n)
                                → O(n log n)

map + find                      → often O(nm)
Map lookup optimization         → often O(n + m)

filter + includes               → often O(nm)
Set membership optimization     → often O(n + m)`,
        },
      ],
    },

    {
      id: "optimization-techniques",
      title: "Performance Optimization Techniques",
      blocks: [
        {
          type: "text",
          text: "Performance optimization means reducing unnecessary computation, repeated traversal, expensive lookups, memory allocation, or other work. The first step should always be identifying the actual bottleneck rather than optimizing blindly.",
        },

        {
          type: "title",
          text: "1. Replace Repeated Searches with Map",
        },
        {
          type: "text",
          text: "If one collection repeatedly searches another collection by ID or another unique key, build a lookup Map first.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// Before: O(n × m)
const result = users.map(user => {
  const profile = profiles.find(
    profile => profile.userId === user.id
  );

  return {
    ...user,
    profile,
  };
});`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// After: O(n + m)
const profileMap = new Map();

profiles.forEach(profile => {
  profileMap.set(profile.userId, profile);
});

const result = users.map(user => ({
  ...user,
  profile: profileMap.get(user.id),
}));`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Repeated lookup by ID/key → think Map.",
        },

        {
          type: "title",
          text: "2. Replace Repeated Membership Checks with Set",
        },
        {
          type: "code",
          language: "javascript",
          code: `// Before: O(n × m)
users.filter(user =>
  blockedIds.includes(user.id)
);`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// After: O(n + m)
const blockedSet = new Set(blockedIds);

users.filter(user =>
  !blockedSet.has(user.id)
);`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Existence, membership, uniqueness, or 'have I seen this?' → think Set.",
        },

        {
          type: "title",
          text: "3. Group Data Once Instead of Repeated filter()",
        },
        {
          type: "code",
          language: "javascript",
          code: `// Before: O(n × m)
const result = users.map(user => ({
  ...user,
  orders: orders.filter(
    order => order.userId === user.id
  ),
}));`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// After: O(n + m)
const ordersByUser = new Map();

orders.forEach(order => {
  if (!ordersByUser.has(order.userId)) {
    ordersByUser.set(order.userId, []);
  }

  ordersByUser.get(order.userId).push(order);
});

const result = users.map(user => ({
  ...user,
  orders: ordersByUser.get(user.id) ?? [],
}));`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "If the same collection is repeatedly filtered by a key, consider grouping it once.",
        },

        {
          type: "title",
          text: "4. Move Invariant Work Outside Loops",
        },
        {
          type: "text",
          text: "If a calculation produces the same result during every iteration, calculate it once before the loop.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// Repeated unnecessarily
users.forEach(user => {
  const activeProducts = products.filter(
    product => product.active
  );

  console.log(user.name, activeProducts.length);
});`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// Better
const activeProducts = products.filter(
  product => product.active
);

users.forEach(user => {
  console.log(user.name, activeProducts.length);
});`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "Ask: Does this calculation depend on the current iteration? If not, it may belong outside the loop.",
        },

        {
          type: "title",
          text: "5. Avoid Accidental O(n²) Array Operations",
        },
        {
          type: "code",
          language: "javascript",
          code: `// O(n²)
while (items.length) {
  items.shift();
}

// O(n)
while (items.length) {
  items.pop();
}`,
        },
        {
          type: "text",
          text: "Operations at the beginning of an array such as shift() and unshift() can require moving or reindexing many elements. Repeating them can create quadratic behavior.",
        },

        {
          type: "title",
          text: "6. Use Early Exit",
        },
        {
          type: "code",
          language: "javascript",
          code: `function containsNegative(numbers) {
  for (const number of numbers) {
    if (number < 0) {
      return true;
    }
  }

  return false;
}`,
        },
        {
          type: "text",
          text: "Stop processing once the answer is known. This may not change worst-case Big O, but it can significantly reduce actual work.",
        },
        {
          type: "list",
          items: [
            "Use find() when you need one matching value",
            "Use some() when you need to know whether any value matches",
            "Use every() when all values must satisfy a condition",
            "Use break or return when further processing is unnecessary",
          ],
        },

        {
          type: "title",
          text: "7. Choose the Right Data Structure",
        },
        {
          type: "list",
          items: [
            "Array — ordered collection and sequential traversal",
            "Object — simple string/symbol-keyed records and lookup tables",
            "Map — dynamic key → value lookup and grouping",
            "Set — uniqueness and membership checks",
            "Stack — last-in, first-out processing",
            "Queue — first-in, first-out processing",
          ],
        },
        {
          type: "highlight",
          variant: "important",
          text: "Many performance problems are really data-structure problems. Choosing the right structure can remove repeated searching entirely.",
        },

        {
          type: "title",
          text: "8. Use Binary Search for Repeated Searches on Sorted Data",
        },
        {
          type: "text",
          text: "When data is already sorted, binary search can reduce searching from O(n) to O(log n).",
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Do not sort an array just to perform one binary search without considering the sorting cost. Sorting costs roughly O(n log n), so one linear O(n) search may actually be cheaper.",
        },

        {
          type: "title",
          text: "9. Avoid Unnecessary Sorting",
        },
        {
          type: "code",
          language: "javascript",
          code: `// Expensive if we only need the maximum
numbers.sort((a, b) => b - a);

const max = numbers[0];`,
        },
        {
          type: "code",
          language: "javascript",
          code: `// O(n)
let max = -Infinity;

for (const number of numbers) {
  if (number > max) {
    max = number;
  }
}`,
        },
        {
          type: "text",
          text: "Sorting the entire collection costs O(n log n). If you only need a minimum, maximum, count, sum, or another aggregate, a single O(n) traversal may be enough.",
        },

        {
          type: "title",
          text: "10. Combine Traversals When Useful",
        },
        {
          type: "code",
          language: "javascript",
          code: `const active = users.filter(user => user.active);
const names = active.map(user => user.name);`,
        },
        {
          type: "text",
          text: "The code above is still O(n), but it performs multiple passes and creates an intermediate array.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const names = [];

for (const user of users) {
  if (user.active) {
    names.push(user.name);
  }
}`,
        },
        {
          type: "text",
          text: "Combining passes does not improve O(n) to something smaller, but it can reduce constants and temporary allocations in performance-sensitive code.",
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Do not sacrifice readability merely to remove an extra O(n) pass unless performance measurements or constraints justify it.",
        },

        {
          type: "title",
          text: "11. Cache Repeated Expensive Results",
        },
        {
          type: "text",
          text: "If an expensive function is repeatedly called with the same input, its result may be cached and reused. This technique is called memoization.",
        },
        {
          type: "code",
          language: "javascript",
          code: `function createCachedCalculator() {
  const cache = new Map();

  return function calculate(value) {
    if (cache.has(value)) {
      return cache.get(value);
    }

    const result = expensiveCalculation(value);

    cache.set(value, result);

    return result;
  };
}`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Memoization trades additional memory for avoiding repeated computation.",
        },

        {
          type: "title",
          text: "12. Avoid Repeated Object/Array Creation When Unnecessary",
        },
        {
          type: "text",
          text: "Creating temporary arrays and objects consumes memory and creates work for garbage collection. In hot paths, avoid allocations that provide no useful value.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// Creates an intermediate array
const activeCount = users
  .filter(user => user.active)
  .length;

// No intermediate result array
let activeCount = 0;

for (const user of users) {
  if (user.active) {
    activeCount++;
  }
}`,
        },

        {
          type: "title",
          text: "13. Optimize Only After Finding the Bottleneck",
        },
        {
          type: "text",
          text: "Big O helps identify scalability problems, but real application performance also depends on constants, input sizes, network requests, rendering, memory allocation, browser behavior, and other factors.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "Prefer: measure → identify bottleneck → optimize → measure again.",
        },
      ],
    },
  ],
};
