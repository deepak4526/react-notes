import type { NotePageData } from "../../../../types/note";

export const objectsNotes: NotePageData = {
  title: "Objects in JavaScript",
  description:
    "Objects store related data as key-value pairs. They are one of the most important parts of JavaScript and are used everywhere — API responses, React props and state, configuration, lookup tables, and complex data structures.",
  sections: [
    {
      id: "what-is-object",
      title: "What is an Object?",
      blocks: [
        {
          type: "text",
          text: "An object is a collection of key-value pairs. Each key identifies a property, and each property stores a value. Unlike arrays, where values are mainly accessed by index, object values are accessed using property names.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "Object = collection of key-value pairs. Example: name → 'Deepak', age → 31.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
  age: 31,
  isAdmin: false,
};

console.log(user.name);    // "Deepak"
console.log(user.age);     // 31
console.log(user.isAdmin); // false`,
        },
        {
          type: "text",
          text: "Object values can be strings, numbers, booleans, arrays, functions, other objects, or almost any other JavaScript value.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",                  // string
  age: 31,                         // number
  active: true,                    // boolean
  middleName: null,                // null
  skills: ["JavaScript", "React"], // array

  address: {                       // nested object
    city: "Hisar",
    state: "Haryana",
  },

  greet() {                        // method
    return "Hello";
  },
};`,
        },
      ],
    },
    {
      id: "creating-objects",
      title: "Creating Objects",
      blocks: [
        {
          type: "text",
          text: "The most common way to create an object is object literal syntax using curly braces {}.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
  age: 31,
};

// Empty object
const person = {};

person.name = "Deepak";
person.age = 31;

console.log(person);
// { name: "Deepak", age: 31 }`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Prefer object literal syntax {} for normal object creation. JavaScript also provides new Object() and Object.create(), but they are useful in more specific situations.",
        },
      ],
    },
    {
      id: "accessing-properties",
      title: "Accessing Properties — Dot vs Bracket Notation",
      blocks: [
        {
          type: "text",
          text: "Object properties can be accessed using dot notation or bracket notation.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
  age: 31,
};

console.log(user.name);    // "Deepak"
console.log(user["name"]); // "Deepak"`,
        },
        {
          type: "text",
          text: "Bracket notation becomes important when the property name comes from a variable.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
  age: 31,
};

const key = "name";

console.log(user[key]); // "Deepak"

// user[key] becomes:
// user["name"]`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "user.key looks for a property literally named 'key'. user[key] evaluates the variable key first and then uses its value as the property name.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
};

const key = "name";

console.log(user.key);  // undefined
console.log(user[key]); // "Deepak"`,
        },
        {
          type: "text",
          text: "Bracket notation is also required for property names that cannot be written normally after a dot, such as keys containing spaces.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  "first name": "Deepak",
};

console.log(user["first name"]); // "Deepak"`,
        },
      ],
    },
    {
      id: "add-update-delete",
      title: "Adding, Updating & Deleting Properties",
      blocks: [
        {
          type: "text",
          text: "JavaScript objects are dynamic. Properties can be added, changed, or removed after the object has been created.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
};

// Add
user.age = 31;

// Update
user.name = "Rahul";

// Delete
delete user.age;

console.log(user);
// { name: "Rahul" }`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "A const object can still be modified. const prevents reassigning the variable itself; it does not make the object's properties immutable.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
};

user.name = "Rahul"; // ✅ allowed
user.age = 31;       // ✅ allowed

// user = {};        // ❌ TypeError / reassignment not allowed`,
        },
      ],
    },
    {
      id: "dynamic-properties",
      title: "Dynamic & Computed Property Names",
      blocks: [
        {
          type: "text",
          text: "Bracket notation allows you to dynamically choose which property to access or update.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
  age: 31,
};

const key = "age";

user[key] = 32;

console.log(user.age); // 32`,
        },
        {
          type: "text",
          text: "Computed property names allow expressions inside [] while creating an object.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const platform = "android";

const versions = {
  [platform]: "2.1.0",
};

console.log(versions);
// { android: "2.1.0" }`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Use obj[key] when the key is dynamic. Use obj.key when you already know the exact property name.",
        },
      ],
    },
    {
      id: "checking-properties",
      title: "Checking Whether a Property Exists",
      blocks: [
        {
          type: "text",
          text: "Reading a missing property returns undefined, but checking value === undefined is not always enough because a property may actually exist with undefined as its value.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
  age: undefined,
};

console.log(user.city); // undefined
console.log(user.age);  // undefined

// But only 'age' actually exists.`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
};

console.log("name" in user); // true
console.log("age" in user);  // false

console.log(Object.hasOwn(user, "name")); // true`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "The 'in' operator also checks the prototype chain. Object.hasOwn() checks only properties belonging directly to the object.",
        },
      ],
    },
    {
      id: "nested-objects",
      title: "Nested Objects & Arrays",
      blocks: [
        {
          type: "text",
          text: "Objects can contain other objects and arrays. Real API responses commonly contain several levels of nested data.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",

  address: {
    city: "Hisar",
    state: "Haryana",
  },

  skills: ["JavaScript", "React", "React Native"],
};

console.log(user.address.city); // "Hisar"
console.log(user.skills[0]);     // "JavaScript"`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const users = [
  {
    id: 1,
    name: "Deepak",
  },
  {
    id: 2,
    name: "Rahul",
  },
];

console.log(users[0].name); // "Deepak"
console.log(users[1].name); // "Rahul"`,
        },
      ],
    },
    {
      id: "object-methods",
      title: "Object Methods",
      blocks: [
        {
          type: "text",
          text: "When a function is stored as a property of an object, it is commonly called a method.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",

  greet: function () {
    return "Hello";
  },

  honorific() {
    return "Mr";
  },
};

console.log(user.greet());     // "Hello"
console.log(user.honorific()); // "Mr"`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "console.log() prints a value but does not return that printed value. A function without an explicit return normally returns undefined.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  greet() {
    console.log("Hello");
  },
};

const result = user.greet();
// prints: Hello

console.log(result);
// undefined`,
        },
      ],
    },
    {
      id: "this-keyword",
      title: "The this Keyword in Object Methods",
      blocks: [
        {
          type: "text",
          text: "Inside a normal object method, this is determined by how the function is called. In a call like user.greet(), this refers to user for that call.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",

  greet() {
    return \`Hello \${this.name}\`;
  },
};

console.log(user.greet());
// "Hello Deepak"`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Do not learn 'this always means the object where the function was written'. this depends on the call site. Arrow functions also do not create their own this.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",

  greet: () => {
    console.log(this.name);
  },
};

// Arrow function does NOT get 'user' as its own this.
user.greet();`,
        },
      ],
    },
    {
      id: "object-keys-values-entries",
      title: "Object.keys(), Object.values() & Object.entries()",
      blocks: [
        {
          type: "text",
          text: "JavaScript provides methods to convert an object's own enumerable properties into arrays that are easier to iterate and transform.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
  age: 31,
  city: "Hisar",
};

console.log(Object.keys(user));
// ["name", "age", "city"]

console.log(Object.values(user));
// ["Deepak", 31, "Hisar"]

console.log(Object.entries(user));
// [
//   ["name", "Deepak"],
//   ["age", 31],
//   ["city", "Hisar"]
// ]`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Object.keys() → keys, Object.values() → values, Object.entries() → [key, value] pairs.",
        },
      ],
    },
    {
      id: "iterating-objects",
      title: "Iterating Through Objects",
      blocks: [
        {
          type: "text",
          text: "for...in iterates over enumerable string keys, including enumerable inherited ones. For many data-processing tasks, Object.keys(), Object.values(), or Object.entries() are easier to control.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
  age: 31,
};

for (const key in user) {
  console.log(key, user[key]);
}

// name Deepak
// age 31`,
        },
        {
          type: "code",
          language: "javascript",
          code: `Object.entries(user).forEach(([key, value]) => {
  console.log(key, value);
});

// name Deepak
// age 31`,
        },
      ],
    },
    {
      id: "destructuring",
      title: "Object Destructuring",
      blocks: [
        {
          type: "text",
          text: "Destructuring extracts object properties into variables. Unlike array destructuring, object destructuring matches property names rather than positions.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
  age: 31,
};

const { name, age } = user;

console.log(name); // "Deepak"
console.log(age);  // 31`,
        },
        {
          type: "text",
          text: "Properties can also be renamed or given default values while destructuring.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
};

const {
  name: userName,
  city = "Unknown",
} = user;

console.log(userName); // "Deepak"
console.log(city);     // "Unknown"`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
  address: {
    city: "Hisar",
  },
};

const {
  address: { city },
} = user;

console.log(city); // "Hisar"`,
        },
      ],
    },
    {
      id: "spread-rest",
      title: "Spread & Rest with Objects",
      blocks: [
        {
          type: "text",
          text: "The ... syntax can spread properties into a new object or collect remaining properties during destructuring.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
  age: 31,
};

const copy = {
  ...user,
};

console.log(copy);
// { name: "Deepak", age: 31 }`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  id: 1,
  name: "Deepak",
  age: 31,
};

const { id, ...details } = user;

console.log(id);
// 1

console.log(details);
// { name: "Deepak", age: 31 }`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "Spread creates a shallow copy. Nested objects are still shared references.",
        },
      ],
    },
    {
      id: "merging-objects",
      title: "Merging Objects",
      blocks: [
        {
          type: "text",
          text: "Objects can be merged using spread syntax. When multiple objects contain the same key, the later value wins.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
  age: 31,
};

const update = {
  age: 32,
  city: "Hisar",
};

const result = {
  ...user,
  ...update,
};

console.log(result);
// {
//   name: "Deepak",
//   age: 32,
//   city: "Hisar"
// }`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Order matters: { ...old, ...new } means matching properties from new overwrite properties from old. This pattern is extremely common in React state updates.",
        },
      ],
    },
    {
      id: "object-assign",
      title: "Object.assign()",
      blocks: [
        {
          type: "text",
          text: "Object.assign() copies enumerable own properties from one or more source objects into a target object.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
};

const details = {
  age: 31,
};

const result = Object.assign({}, user, details);

console.log(result);
// { name: "Deepak", age: 31 }`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Object.assign(target, source) modifies the target. Using {} as the target avoids modifying the original object. Like spread, Object.assign() performs a shallow copy.",
        },
      ],
    },
    {
      id: "reference",
      title: "Objects are Reference Types",
      blocks: [
        {
          type: "text",
          text: "Assigning an object to another variable does not create another independent object. Both variables reference the same object.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user1 = {
  name: "Deepak",
};

const user2 = user1;

user2.name = "Rahul";

console.log(user1.name); // "Rahul"
console.log(user2.name); // "Rahul"`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "user1 and user2 point to the same object. Changing the object through either reference affects what both variables see.",
        },
      ],
    },
    {
      id: "object-equality",
      title: "Object Equality",
      blocks: [
        {
          type: "text",
          text: "Objects are compared by reference, not by whether their properties contain the same values.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const a = {
  name: "Deepak",
};

const b = {
  name: "Deepak",
};

console.log(a === b); // false

const c = a;

console.log(a === c); // true`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "Two separately created objects are different references even if their contents look identical.",
        },
      ],
    },
    {
      id: "shallow-copy",
      title: "Shallow Copy",
      blocks: [
        {
          type: "text",
          text: "A shallow copy creates a new top-level object, but nested objects and arrays remain shared references.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user1 = {
  name: "Deepak",
  address: {
    city: "Hisar",
  },
};

const user2 = {
  ...user1,
};

user2.name = "Rahul";

console.log(user1.name);
// "Deepak" ✅ top-level independent

user2.address.city = "Delhi";

console.log(user1.address.city);
// "Delhi" ⚠️ nested object was shared`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Spread syntax does NOT automatically deep-clone an object. It copies only one level.",
        },
      ],
    },
    {
      id: "deep-copy",
      title: "Deep Copy & structuredClone()",
      blocks: [
        {
          type: "text",
          text: "A deep copy creates independent copies of nested data as well. For many supported data structures, modern JavaScript provides structuredClone().",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user1 = {
  name: "Deepak",
  address: {
    city: "Hisar",
  },
};

const user2 = structuredClone(user1);

user2.address.city = "Delhi";

console.log(user1.address.city);
// "Hisar"

console.log(user2.address.city);
// "Delhi"`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "JSON.parse(JSON.stringify(obj)) is sometimes used as a deep-copy trick, but it loses or changes unsupported values such as undefined and Date behavior. structuredClone() is generally safer when the data is supported.",
        },
      ],
    },
    {
      id: "optional-chaining",
      title: "Optional Chaining — ?.",
      blocks: [
        {
          type: "text",
          text: "Optional chaining safely accesses a nested property when an intermediate value might be null or undefined.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
};

console.log(user.address?.city);
// undefined

// Without optional chaining:
console.log(user.address.city);
// ❌ TypeError`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const response = {
  user: {
    address: {
      city: "Hisar",
    },
  },
};

console.log(response.user?.address?.city);
// "Hisar"`,
        },
      ],
    },
    {
      id: "nullish-coalescing",
      title: "Nullish Coalescing — ??",
      blocks: [
        {
          type: "text",
          text: "The ?? operator provides a fallback only when the left side is null or undefined. This differs from ||, which also treats values such as 0, false, and an empty string as falsy.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {};

const city = user.city ?? "Unknown";

console.log(city);
// "Unknown"`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const count = 0;

console.log(count || 10);
// 10

console.log(count ?? 10);
// 0`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "Use ?? when 0, false, or '' are valid values and you only want the fallback for null or undefined.",
        },
      ],
    },
    {
      id: "freeze-seal",
      title: "Object.freeze() & Object.seal()",
      blocks: [
        {
          type: "text",
          text: "Object.freeze() prevents adding, deleting, and changing own properties at the top level. Object.seal() prevents adding and deleting properties but still allows existing writable properties to change.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
};

Object.freeze(user);

user.name = "Rahul"; // blocked
user.age = 31;       // blocked
delete user.name;    // blocked`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
};

Object.seal(user);

user.name = "Rahul"; // ✅ existing property can change
user.age = 31;       // ❌ cannot add
delete user.name;    // ❌ cannot delete`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Object.freeze() is shallow. Nested objects are not automatically frozen.",
        },
      ],
    },
    {
      id: "object-shorthand",
      title: "Object Property Shorthand",
      blocks: [
        {
          type: "text",
          text: "When a variable name and desired property name are the same, JavaScript allows shorthand syntax.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const name = "Deepak";
const age = 31;

// Long form
const user1 = {
  name: name,
  age: age,
};

// Shorthand
const user2 = {
  name,
  age,
};

console.log(user2);
// { name: "Deepak", age: 31 }`,
        },
      ],
    },
    {
      id: "json",
      title: "JSON.stringify() & JSON.parse()",
      blocks: [
        {
          type: "text",
          text: "JSON is a text-based data format commonly used to exchange data. JSON.stringify() converts a JavaScript value into JSON text, while JSON.parse() converts valid JSON text back into a JavaScript value.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const user = {
  name: "Deepak",
  skills: ["JavaScript", "React"],
};

const json = JSON.stringify(user);

console.log(json);
// '{"name":"Deepak","skills":["JavaScript","React"]}'`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const json = '{"name":"Deepak","age":31}';

const user = JSON.parse(json);

console.log(user.name);
// "Deepak"`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "JSON.stringify(value) → JSON string. JSON.parse(jsonString) → JavaScript value.",
        },
      ],
    },
    {
      id: "from-entries",
      title: "Object.fromEntries()",
      blocks: [
        {
          type: "text",
          text: "Object.fromEntries() performs the opposite style of transformation to Object.entries(): it builds an object from [key, value] pairs.",
        },
        {
          type: "code",
          language: "javascript",
          code: `const entries = [
  ["name", "Deepak"],
  ["age", 31],
];

const user = Object.fromEntries(entries);

console.log(user);
// { name: "Deepak", age: 31 }`,
        },
        {
          type: "code",
          language: "javascript",
          code: `const prices = {
  laptop: 50000,
  phone: 20000,
};

const discounted = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => {
    return [key, value * 0.9];
  })
);

console.log(discounted);
// {
//   laptop: 45000,
//   phone: 18000
// }`,
        },
      ],
    },
    {
      id: "objects-vs-map",
      title: "Object vs Map",
      blocks: [
        {
          type: "text",
          text: "Objects are excellent for structured records such as users and products. Map is often useful when you specifically need a dynamic key-value collection, especially when keys are not limited to strings and symbols.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// Object
const user = {
  name: "Deepak",
  age: 31,
};

console.log(user.name);

// Map
const userMap = new Map();

userMap.set("name", "Deepak");
userMap.set("age", 31);

console.log(userMap.get("name"));`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Use objects naturally for records with known fields. Consider Map when the collection itself is a dynamic key-value store and Map's API or key flexibility is useful.",
        },
      ],
    },
    {
      id: "typescript-keyof",
      title: "TypeScript Connection — keyof",
      blocks: [
        {
          type: "text",
          text: "keyof is a TypeScript operator, not a JavaScript feature. It creates a union type containing the keys of another object type.",
        },
        {
          type: "code",
          language: "typescript",
          code: `interface AppVersionData {
  android: VersionData;
  ios: VersionData;
}

type Platform = keyof AppVersionData;

// Equivalent to:
// type Platform = "android" | "ios";`,
        },
        {
          type: "code",
          language: "typescript",
          code: `interface ChildProps {
  platform: keyof AppVersionData;
}

const android: ChildProps = {
  platform: "android", // ✅
};

const web: ChildProps = {
  platform: "web", // ❌ TypeScript error
};`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "keyof works at compile time and produces a type. Object.keys() works at runtime and returns an actual array of keys. They are related ideas but are not replacements for each other.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// Plain JavaScript runtime example

const appVersionData = {
  android: {},
  ios: {},
};

const platforms = Object.keys(appVersionData);

console.log(platforms);
// ["android", "ios"]

console.log(platforms.includes("android"));
// true

console.log(platforms.includes("web"));
// false`,
        },
      ],
    },
    {
      id: "interview-summary",
      title: "Objects — Interview Summary",
      blocks: [
        {
          type: "list",
          items: [
            "Objects store data as key-value pairs",
            "Use dot notation for known keys and bracket notation for dynamic keys",
            "const prevents reassignment of the variable, not mutation of object properties",
            "Object.keys() returns keys, Object.values() returns values, and Object.entries() returns [key, value] pairs",
            "Object destructuring extracts properties by name",
            "Spread syntax creates only a shallow copy",
            "Objects are compared by reference, not by contents",
            "Optional chaining ?. safely handles null or undefined intermediate values",
            "Nullish coalescing ?? falls back only for null or undefined",
            "Object.freeze() and Object.seal() have different mutation restrictions",
            "JSON.stringify() converts to JSON text and JSON.parse() parses JSON text",
            "Object.fromEntries() converts key-value entry pairs into an object",
            "keyof is TypeScript compile-time behavior; Object.keys() is JavaScript runtime behavior",
          ],
        },
        {
          type: "highlight",
          variant: "tip",
          text: "For interviews, don't just memorize object methods. Be able to choose the right technique for dynamic access, transformation, lookup, copying, nested updates, and iteration.",
        },
      ],
    },
  ],
};
