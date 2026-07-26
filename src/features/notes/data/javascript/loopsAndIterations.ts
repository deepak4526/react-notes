import type { NotePageData } from "../../../../types/note";

export const loopsAndIterationNotes: NotePageData = {
  title: "Loops & Iteration in JavaScript",
  description:
    "Understand JavaScript loops and iteration deeply, including for loops, let vs var, closures in loops, for...in, for...of, sparse arrays, break, continue, return, and choosing the right array method.",

  sections: [
    {
      id: "loops-introduction",
      title: "Loops & Iteration",
      blocks: [
        {
          type: "text",
          text: "Loops allow us to execute a block of code repeatedly. JavaScript provides several ways to iterate, and the correct choice depends on whether we need values, keys, indexes, transformation, filtering, early termination, or side effects.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "Do not choose a loop or array method just because you remember its syntax. First ask: What am I trying to produce or accomplish?",
        },
      ],
    },

    {
      id: "for-loop",
      title: "1. The for Loop",
      blocks: [
        {
          type: "text",
          text: "The classic for loop gives direct control over initialization, condition, increment, and the current index.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = ["A", "B", "C"];

for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

// 0 A
// 1 B
// 2 C`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Use a classic for loop when the index itself matters or when you need direct control over how iteration progresses.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = [10, 20, 30, 40];

for (let i = 1; i < arr.length; i++) {
  const current = arr[i];
  const previous = arr[i - 1];

  console.log(current, previous);
}`,
        },
      ],
    },

    {
      id: "let-vs-var-loops",
      title: "2. let vs var Inside Loops",
      blocks: [
        {
          type: "text",
          text: "The difference between let and var becomes especially important when asynchronous callbacks are created inside a loop.",
        },
        {
          type: "title",
          text: "Using let",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = ["A", "B", "C"];

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(i, arr[i]);
  }, 0);
}

// 0 A
// 1 B
// 2 C`,
        },
        {
          type: "text",
          text: "With let, JavaScript creates a fresh binding of i for every iteration. Each callback therefore closes over a different i.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "In a for loop, let creates a separate binding of the loop variable for each iteration.",
        },
        {
          type: "title",
          text: "Using var",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = ["A", "B", "C"];

for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(i, arr[i]);
  }, 0);
}

// 3 undefined
// 3 undefined
// 3 undefined`,
        },
        {
          type: "text",
          text: "var is function-scoped. All three callbacks reference the same i variable. By the time setTimeout callbacks execute, the loop has completed and i has become 3.",
        },
        {
          type: "text",
          text: "Since arr contains indexes 0, 1, and 2, arr[3] does not exist and therefore returns undefined.",
        },
        {
          type: "highlight",
          variant: "warning",
          text: "The callbacks do not store copies of 0, 1, and 2 when var is used. They all reference the same variable, whose final value is 3.",
        },
      ],
    },

    {
      id: "iife-loop",
      title: "3. IIFE and Closures Inside Loops",
      blocks: [
        {
          type: "text",
          text: "Before let was introduced, an IIFE was commonly used with var to create a separate function scope for every iteration.",
        },
        {
          type: "code",
          language: "javascript",
          code: `for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, 0);
  })(i);
}

// 0
// 1
// 2`,
        },
        {
          type: "text",
          text: "Every invocation of the IIFE creates a new execution context with its own j parameter.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// Conceptually:

fun(0); // j = 0
fun(1); // j = 1
fun(2); // j = 2`,
        },
        {
          type: "text",
          text: "The setTimeout callback forms a closure over j. Since each function invocation has a different j, each callback remembers a different value.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "The callback is not remembering the original i. It closes over j, and each IIFE invocation creates its own j.",
        },
      ],
    },

    {
      id: "for-in",
      title: "4. for...in",
      blocks: [
        {
          type: "text",
          text: "for...in iterates over enumerable property keys of an object.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (const key in obj) {
  console.log(key);
}

// a
// b
// c`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Think: for...in → enumerable property keys.",
        },
      ],
    },

    {
      id: "for-in-arrays",
      title: "5. for...in with Arrays",
      blocks: [
        {
          type: "text",
          text: "Arrays are objects, so their indexes are also property keys. for...in therefore gives us array keys rather than array values.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = ["A", "B", "C"];

for (const i in arr) {
  console.log(i);
}

// 0
// 1
// 2`,
        },
        {
          type: "text",
          text: "An important detail is that these keys are strings.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = ["A", "B", "C"];

for (const i in arr) {
  console.log(typeof i, i);
}

// string 0
// string 1
// string 2`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "Array indexes obtained through for...in are property names, so their type is string.",
        },
      ],
    },

    {
      id: "for-of",
      title: "6. for...of",
      blocks: [
        {
          type: "text",
          text: "for...of iterates over values produced by an iterable object.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = ["A", "B", "C"];

for (const value of arr) {
  console.log(value);
}

// A
// B
// C`,
        },
        {
          type: "text",
          text: "Arrays, strings, Maps, and Sets are iterable. Plain objects are not iterable by default.",
        },
        {
          type: "list",
          items: [
            "Array → iterable",
            "String → iterable",
            "Map → iterable",
            "Set → iterable",
            "Plain Object → not iterable by default",
          ],
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Think: for...of → values produced by an iterable.",
        },
      ],
    },

    {
      id: "plain-object-for-of",
      title: "7. Why for...of Does Not Work on Plain Objects",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const obj = {
  a: 1,
  b: 2,
};

for (const value of obj) {
  console.log(value);
}

// TypeError: obj is not iterable`,
        },
        {
          type: "text",
          text: "for...of requires an iterable. Plain objects do not implement Symbol.iterator by default.",
        },
        {
          type: "text",
          text: "We can convert an object's keys, values, or entries into arrays and then use for...of.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const obj = {
  a: 1,
  b: 2,
  c: 3,
};

// Keys
for (const key of Object.keys(obj)) {
  console.log(key);
}

// Values
for (const value of Object.values(obj)) {
  console.log(value);
}

// Keys + Values
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}`,
        },
      ],
    },

    {
      id: "for-in-vs-for-of",
      title: "8. for...in vs for...of",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const arr = ["A", "B", "C"];

for (const i in arr) {
  console.log(i);
}

// 0
// 1
// 2

for (const value of arr) {
  console.log(value);
}

// A
// B
// C`,
        },
        {
          type: "list",
          items: [
            "for...in → enumerable property keys",
            "for...of → values from an iterable",
            "for...in array indexes are strings",
            "for...of is generally preferred when iterating array values",
          ],
        },
        {
          type: "highlight",
          variant: "important",
          text: "for...in and for...of are not two versions of the same loop. They iterate using different mechanisms.",
        },
      ],
    },

    {
      id: "custom-array-properties",
      title: "9. Custom Properties on Arrays",
      blocks: [
        {
          type: "text",
          text: "Because arrays are objects, custom properties can be added to them.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = ["A", "B", "C"];

arr.city = "Delhi";

for (const key in arr) {
  console.log(key);
}

// 0
// 1
// 2
// city

for (const value of arr) {
  console.log(value);
}

// A
// B
// C`,
        },
        {
          type: "text",
          text: "for...in sees city because city is an enumerable property. for...of uses the array's iterator, so city is not treated as an array element.",
        },
        {
          type: "highlight",
          variant: "warning",
          text: "This is one reason for...in should generally not be used for normal array iteration.",
        },
      ],
    },

    {
      id: "sparse-arrays",
      title: "10. Sparse Arrays",
      blocks: [
        {
          type: "text",
          text: "A sparse array contains missing positions called holes or empty slots.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = ["A", "B", "C"];

arr[5] = "F";

console.log(arr.length);

// 6`,
        },
        {
          type: "text",
          text: "Assigning index 5 makes the array length 6 because array length is one greater than the highest array index.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// Conceptually:

[
  "A",      // index 0
  "B",      // index 1
  "C",      // index 2
  <empty>,  // index 3
  <empty>,  // index 4
  "F"       // index 5
]`,
        },
        {
          type: "title",
          text: "for...in with Sparse Arrays",
        },
        {
          type: "code",
          language: "javascript",
          code: `for (const key in arr) {
  console.log(key);
}

// 0
// 1
// 2
// 5`,
        },
        {
          type: "text",
          text: "for...in skips indexes 3 and 4 because those properties do not actually exist.",
        },
        {
          type: "title",
          text: "for...of with Sparse Arrays",
        },
        {
          type: "code",
          language: "javascript",
          code: `for (const value of arr) {
  console.log(value);
}

// A
// B
// C
// undefined
// undefined
// F`,
        },
        {
          type: "text",
          text: "The array iterator visits the positions from 0 to length - 1 and yields undefined for the holes.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "A hole is not the same thing as an existing array element whose value is undefined.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const a = [];
a[1] = "B";

// index 0 is a hole

const b = [undefined, "B"];

// index 0 exists,
// but its value is undefined`,
        },
      ],
    },

    {
      id: "inherited-properties",
      title: "11. Inherited Properties with for...in",
      blocks: [
        {
          type: "text",
          text: "for...in can also iterate enumerable properties inherited through the prototype chain.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const obj = {
  a: 1,
  b: 2,
};

Object.prototype.test = "Hello";

for (const key in obj) {
  console.log(key);
}

// a
// b
// test`,
        },
        {
          type: "text",
          text: "test does not belong directly to obj. It is inherited from Object.prototype, but because it is enumerable, for...in sees it.",
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Avoid modifying Object.prototype in application code. This example is useful for understanding inheritance but can introduce unexpected behavior throughout an application.",
        },
      ],
    },

    {
      id: "own-properties",
      title: "12. Iterating Only Own Properties",
      blocks: [
        {
          type: "text",
          text: "When using for...in, we can check whether a property belongs directly to the object instead of being inherited.",
        },
        {
          type: "code",
          language: "javascript",
          code: `for (const key in obj) {
  if (Object.hasOwn(obj, key)) {
    console.log(key);
  }
}

// a
// b`,
        },
        {
          type: "text",
          text: "Object.hasOwn() is the modern way to check whether an object directly owns a property.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// Another safe approach:

for (const key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    console.log(key);
  }
}`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Object.keys(), Object.values(), and Object.entries() already work with an object's own enumerable properties, so they are often simpler than for...in.",
        },
      ],
    },

    {
      id: "break",
      title: "13. break — Stop the Loop",
      blocks: [
        {
          type: "text",
          text: "break immediately terminates the current loop. No further iterations are executed.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = [1, 2, 3, 4, 5];

for (const value of arr) {
  if (value === 3) {
    break;
  }

  console.log(value);
}

// 1
// 2`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "break means: I am done with this loop.",
        },
      ],
    },

    {
      id: "continue",
      title: "14. continue — Skip the Current Iteration",
      blocks: [
        {
          type: "text",
          text: "continue skips the remaining code in the current iteration and moves to the next iteration.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = [1, 2, 3, 4, 5];

for (const value of arr) {
  if (value === 3) {
    continue;
  }

  console.log(value);
}

// 1
// 2
// 4
// 5`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "continue means: Skip this item and move to the next iteration.",
        },
      ],
    },

    {
      id: "return-inside-loop",
      title: "15. return Inside a Loop",
      blocks: [
        {
          type: "text",
          text: "return is different from break and continue because return exits the function in which it executes.",
        },
        {
          type: "code",
          language: "javascript",
          code: `function test() {
  const arr = [1, 2, 3, 4, 5];

  for (const value of arr) {
    if (value === 3) {
      return;
    }

    console.log(value);
  }

  console.log("Finished");
}

test();

// 1
// 2`,
        },
        {
          type: "text",
          text: "When value becomes 3, return exits test() completely. Therefore Finished is never printed.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "break exits the loop. continue skips one iteration. return exits the function.",
        },
      ],
    },

    {
      id: "break-vs-return",
      title: "16. break vs return",
      blocks: [
        {
          type: "title",
          text: "Using break",
        },
        {
          type: "code",
          language: "javascript",
          code: `function test() {
  for (const value of [1, 2, 3, 4]) {
    if (value === 3) {
      break;
    }
  }

  console.log("Hello");
}

test();

// Hello`,
        },
        {
          type: "text",
          text: "break stops only the loop. The function continues executing after the loop.",
        },
        {
          type: "title",
          text: "Using return",
        },
        {
          type: "code",
          language: "javascript",
          code: `function test() {
  for (const value of [1, 2, 3, 4]) {
    if (value === 3) {
      return;
    }
  }

  console.log("Hello");
}

test();

// Nothing is printed`,
        },
        {
          type: "text",
          text: "return exits test() completely, so execution never reaches console.log('Hello').",
        },
      ],
    },

    {
      id: "foreach-break",
      title: "17. Why break Does Not Work in forEach",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const arr = [1, 2, 3, 4, 5];

arr.forEach(item => {
  if (item === 3) {
    break; // SyntaxError
  }

  console.log(item);
});`,
        },
        {
          type: "text",
          text: "forEach is an array method that invokes a callback function. The callback is not itself the loop statement that break would control.",
        },
        {
          type: "highlight",
          variant: "warning",
          text: "break and continue cannot be used to control iteration from inside a forEach callback.",
        },
        {
          type: "text",
          text: "If early termination is required, a for...of loop is usually a better choice.",
        },
        {
          type: "code",
          language: "javascript",
          code: `for (const item of arr) {
  if (item === 3) {
    break;
  }

  console.log(item);
}

// 1
// 2`,
        },
      ],
    },

    {
      id: "return-foreach",
      title: "18. return Inside forEach",
      blocks: [
        {
          type: "text",
          text: "return can be used inside a forEach callback, but it only exits the current callback invocation. It does not stop the entire forEach.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = [1, 2, 3, 4, 5];

arr.forEach(item => {
  if (item === 3) {
    return;
  }

  console.log(item);
});

// 1
// 2
// 4
// 5`,
        },
        {
          type: "text",
          text: "When item is 3, that callback invocation ends. forEach then continues with 4 and 5.",
        },
        {
          type: "code",
          language: "javascript",
          code: `function test() {
  const arr = [1, 2, 3, 4, 5];

  arr.forEach(item => {
    if (item === 3) {
      return;
    }

    console.log(item);
  });

  console.log("Finished");
}

test();

// 1
// 2
// 4
// 5
// Finished`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "return always exits the function it is directly inside. Here, that function is the forEach callback, not test().",
        },
      ],
    },

    {
      id: "return-for-of",
      title: "19. return Inside for...of",
      blocks: [
        {
          type: "text",
          text: "for...of does not introduce a callback function. Therefore, return inside the loop belongs directly to the containing function.",
        },
        {
          type: "code",
          language: "javascript",
          code: `function test() {
  const arr = [1, 2, 3, 4, 5];

  for (const item of arr) {
    if (item === 3) {
      return item;
    }

    console.log(item);
  }

  console.log("Finished");
}

const result = test();

console.log("Result:", result);

// 1
// 2
// Result: 3`,
        },
        {
          type: "text",
          text: "When item becomes 3, test() returns 3 immediately. Finished is never printed.",
        },
      ],
    },

    {
      id: "choosing-method",
      title: "20. Choosing the Right Loop or Array Method",
      blocks: [
        {
          type: "text",
          text: "The easiest way to choose between loops and array methods is to first identify what result you need.",
        },
        {
          type: "list",
          items: [
            "Transform every item → map()",
            "Keep all matching items → filter()",
            "Get the first matching item → find()",
            "Get the first matching item's index → findIndex()",
            "Check whether at least one matches → some()",
            "Check whether all items match → every()",
            "Combine or build one final result → reduce()",
            "Perform an action for every item → forEach()",
            "Need break, continue, or complex control flow → for...of",
            "Need direct index control → classic for loop",
          ],
        },
        {
          type: "highlight",
          variant: "important",
          text: "Choose based on intent: transformation, selection, search, boolean check, accumulation, side effect, or control flow.",
        },
      ],
    },

    {
      id: "map",
      title: "21. map() — Transform Every Item",
      blocks: [
        {
          type: "text",
          text: "Use map when every input element should be transformed into an output element in a new array.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const users = [
  { id: 1, name: "Amit", salary: 50000 },
  { id: 2, name: "Neha", salary: 60000 },
];

const updatedUsers = users.map(user => ({
  ...user,
  salary: user.salary + 1000,
}));`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Mental question: Do I want to transform each item into something? → map()",
        },
      ],
    },

    {
      id: "filter",
      title: "22. filter() — Keep Matching Items",
      blocks: [
        {
          type: "text",
          text: "filter returns a new array containing all elements that satisfy the given condition.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const products = [
  { id: 1, name: "Laptop", inStock: true },
  { id: 2, name: "Phone", inStock: false },
  { id: 3, name: "Tablet", inStock: true },
];

const available = products.filter(
  product => product.inStock
);`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Mental question: Do I want all matching items? → filter()",
        },
      ],
    },

    {
      id: "find",
      title: "23. find() — Get the First Match",
      blocks: [
        {
          type: "text",
          text: "find returns the first element that satisfies the condition. If nothing matches, it returns undefined.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const product = products.find(
  product => product.id === 2
);

// {
//   id: 2,
//   name: "Phone",
//   inStock: false
// }`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "filter returns an array containing all matches. find returns the first matching element.",
        },
      ],
    },

    {
      id: "find-index",
      title: "24. findIndex() — Get the First Match's Index",
      blocks: [
        {
          type: "text",
          text: "findIndex returns the index of the first matching element. If no element matches, it returns -1.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Neha" },
  { id: 3, name: "Rahul" },
];

const index = users.findIndex(
  user => user.id === 3
);

console.log(index);

// 2`,
        },
      ],
    },

    {
      id: "some",
      title: "25. some() — Does At Least One Match?",
      blocks: [
        {
          type: "text",
          text: "some returns true if at least one element satisfies the condition. It can stop as soon as a match is found.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [1, 2, 3, 4];

const result = numbers.some(
  number => number === 3
);

console.log(result);

// true`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "some asks: Is there at least one matching element?",
        },
      ],
    },

    {
      id: "every",
      title: "26. every() — Do All Items Match?",
      blocks: [
        {
          type: "text",
          text: "every returns true only if every element satisfies the condition. It can stop as soon as one element fails.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [2, 4, 6, 7];

const result = numbers.every(
  number => number % 2 === 0
);

console.log(result);

// false`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "every asks: Does every element satisfy the condition?",
        },
      ],
    },

    {
      id: "reduce",
      title: "27. reduce() — Build One Final Result",
      blocks: [
        {
          type: "text",
          text: "reduce combines array elements into one accumulated result. The final result can be a number, object, array, Map, or another value.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const numbers = [10, 20, 30];

const total = numbers.reduce(
  (sum, number) => sum + number,
  0
);

console.log(total);

// 60`,
        },
        {
          type: "title",
          text: "reduce Can Also Build Objects",
        },
        {
          type: "code",
          language: "javascript",
          code: `const words = [
  "apple",
  "ant",
  "bat",
  "ball",
  "cat",
];

const grouped = words.reduce((acc, word) => {
  const key = word[0];

  if (!acc[key]) {
    acc[key] = [];
  }

  acc[key].push(word);

  return acc;
}, {});

/*
{
  a: ["apple", "ant"],
  b: ["bat", "ball"],
  c: ["cat"]
}
*/`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Mental question: Am I combining or building everything into one final result? → reduce()",
        },
      ],
    },

    {
      id: "foreach",
      title: "28. forEach() — Perform a Side Effect",
      blocks: [
        {
          type: "text",
          text: "forEach is useful when an action should be performed for every element and we do not need the method to produce a new array.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const users = [
  { name: "Amit" },
  { name: "Neha" },
];

users.forEach(user => {
  console.log(user.name);
});

// Amit
// Neha`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Think: Do something for each item. Logging and calling another function are common examples.",
        },
      ],
    },

    {
      id: "foreach-vs-map",
      title: "29. forEach() vs map()",
      blocks: [
        {
          type: "text",
          text: "forEach can technically be used to manually build a new array, but map communicates transformation more clearly.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = [1, 2, 3];

const result = [];

arr.forEach(item => {
  result.push(item * 2);
});

console.log(result);

// [2, 4, 6]`,
        },
        {
          type: "text",
          text: "The goal is to transform every item, so map is a better representation of the intention.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = [1, 2, 3];

const result = arr.map(
  item => item * 2
);

console.log(result);

// [2, 4, 6]`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "If you create an empty result array and push transformed values into it from forEach, check whether map would express the operation more clearly.",
        },
      ],
    },

    {
      id: "for-of-vs-foreach",
      title: "30. for...of vs forEach()",
      blocks: [
        {
          type: "text",
          text: "Use for...of when explicit control flow such as break or continue is required. Use forEach when every item should be processed and no early termination is needed.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const users = [
  { id: 1, active: false },
  { id: 2, active: false },
  { id: 3, active: true },
  { id: 4, active: true },
];

for (const user of users) {
  if (!user.active) {
    continue;
  }

  console.log("Found:", user);

  break;
}`,
        },
        {
          type: "list",
          items: [
            "Need break → prefer a real loop such as for...of",
            "Need continue → prefer a real loop such as for...of",
            "Only need to perform an action for every element → forEach is suitable",
            "Only need array values and no index → for...of is often clearer than a classic for loop",
          ],
        },
      ],
    },

    {
      id: "for-vs-for-of",
      title: "31. for vs for...of",
      blocks: [
        {
          type: "text",
          text: "A classic for loop is useful when the index is important. for...of is usually cleaner when only the values are needed.",
        },
        {
          type: "title",
          text: "When the Index Matters",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}`,
        },
        {
          type: "title",
          text: "When Only Values Matter",
        },
        {
          type: "code",
          language: "javascript",
          code: `const arr = [10, 20, 30];

for (const value of arr) {
  console.log(value);
}`,
        },
      ],
    },

    {
      id: "method-selection-cheat-sheet",
      title: "32. Method Selection Cheat Sheet",
      blocks: [
        {
          type: "list",
          items: [
            "map() → transform every item and create a new array",
            "filter() → get all matching items",
            "find() → get the first matching item",
            "findIndex() → get the index of the first matching item",
            "some() → check whether at least one item matches",
            "every() → check whether every item matches",
            "reduce() → combine or build one final result",
            "forEach() → perform a side effect for every item",
            "for...of → iterate values with break and continue support",
            "for → use when direct index control matters",
            "for...in → iterate enumerable object property keys",
          ],
        },
      ],
    },

    {
      id: "method-selection-example",
      title: "33. Method Selection Example",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const users = [
  { id: 1, name: "Amit", age: 17, active: true },
  { id: 2, name: "Neha", age: 25, active: false },
  { id: 3, name: "Rahul", age: 30, active: true },
  { id: 4, name: "Priya", age: 16, active: true },
];`,
        },
        {
          type: "list",
          items: [
            "Create an array of names → map()",
            "Get all users aged 18 or older → filter()",
            "Get user with id 3 → find()",
            "Check whether any user is inactive → some()",
            "Check whether every user is 18 or older → every()",
            "Calculate the sum of all ages → reduce()",
            "Print every user's name → forEach()",
            "Process users and stop when an inactive user is found → for...of",
            "Get the index of user with id 4 → findIndex()",
          ],
        },
      ],
    },

    {
      id: "interview-takeaways",
      title: "34. Interview Takeaways",
      blocks: [
        {
          type: "highlight",
          variant: "important",
          text: "for...in iterates enumerable property keys, including inherited enumerable properties. for...of iterates values produced by an iterable.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "break exits the loop, continue skips the current iteration, and return exits the function it belongs to.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "return inside a forEach callback does not stop forEach. It only ends the current callback invocation.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "Use map for transformation, filter for multiple matches, find for one match, some/every for boolean questions, reduce for accumulation, and forEach for side effects.",
        },
        {
          type: "highlight",
          variant: "tip",
          text: "When you need break, continue, or more complex control flow, for...of is often clearer than forcing the logic into an array method.",
        },
      ],
    },

    {
      id: "quick-revision",
      title: "35. Quick Revision",
      blocks: [
        {
          type: "list",
          items: [
            "let creates a fresh binding for each for-loop iteration.",
            "var uses the same function-scoped variable across loop iterations.",
            "Closures capture variables from their lexical environment.",
            "for...in gives enumerable property keys.",
            "for...of gives values from iterables.",
            "Plain objects are not iterable by default.",
            "Object.keys() returns own enumerable keys.",
            "Object.values() returns own enumerable values.",
            "Object.entries() returns own enumerable [key, value] pairs.",
            "for...in can include inherited enumerable properties.",
            "Sparse array holes are different from values explicitly set to undefined.",
            "break stops a loop.",
            "continue skips the current iteration.",
            "return exits its containing function.",
            "forEach cannot be stopped using break.",
            "return inside forEach only exits the current callback.",
            "Choose array methods according to the result you need.",
          ],
        },
      ],
    },
  ],
};
