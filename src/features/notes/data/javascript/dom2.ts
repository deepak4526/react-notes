import type { NotePageData } from "../../../../types/note";

export const DOMCollections: NotePageData = {
  title: "📋 DOM Collections & Traversal",
  description:
    "Learn DOM collections, NodeList vs HTMLCollection, live vs static collections, creating and removing elements, DOM traversal, and interview-focused concepts for frontend developers.",
  //   category: "JavaScript",

  sections: [
    {
      id: "1",
      title: "📋 NodeList",
      blocks: [
        {
          type: "text",
          text: "A NodeList is a collection of DOM nodes. It is commonly returned by querySelectorAll().",
        },
        {
          type: "code",
          language: "javascript",
          code: `const buttons = document.querySelectorAll(".btn");

console.log(buttons);`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "querySelectorAll() returns a static NodeList.",
        },
        {
          type: "list",
          items: [
            "Can be iterated using forEach().",
            "Supports length property.",
            "Usually static (doesn't automatically update).",
          ],
        },
      ],
    },

    {
      id: "2",
      title: "📦 HTMLCollection",
      blocks: [
        {
          type: "text",
          text: "HTMLCollection is another collection returned by older DOM methods like getElementsByClassName() and getElementsByTagName().",
        },
        {
          type: "code",
          language: "javascript",
          code: `const buttons = document.getElementsByClassName("btn");

console.log(buttons);`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "HTMLCollection is live.",
        },
        {
          type: "list",
          items: [
            "Updates automatically when the DOM changes.",
            "Does not support forEach() directly.",
            "Can be converted into an array using Array.from().",
          ],
        },
      ],
    },

    {
      id: "3",
      title: "⚡ Static vs Live Collections",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const nodeList = document.querySelectorAll(".item");

const htmlCollection =
document.getElementsByClassName("item");`,
        },
        {
          type: "list",
          items: [
            "NodeList (querySelectorAll) → Static",
            "HTMLCollection (getElementsByClassName) → Live",
          ],
        },
        {
          type: "highlight",
          variant: "warning",
          text: "If a new element is added later, the HTMLCollection updates automatically, while the NodeList remains unchanged.",
        },
      ],
    },

    {
      id: "4",
      title: "🔄 Iterating Collections",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `// NodeList
buttons.forEach(button => {
  console.log(button.textContent);
});

// HTMLCollection
Array.from(buttons).forEach(button => {
  console.log(button.textContent);
});`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Convert HTMLCollection into an array whenever you want to use array methods.",
        },
      ],
    },

    {
      id: "5",
      title: "🆕 Creating Elements",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const p = document.createElement("p");

p.textContent = "Hello";

document.body.appendChild(p);`,
        },
        {
          type: "list",
          items: [
            "createElement() creates a DOM element.",
            "appendChild() inserts it into the DOM.",
            "The element is invisible until it is attached.",
          ],
        },
      ],
    },

    {
      id: "6",
      title: "➕ appendChild() vs append()",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `parent.appendChild(child);

parent.append(child);

parent.append("Hello");`,
        },
        {
          type: "list",
          items: [
            "appendChild() accepts only Nodes.",
            "append() accepts Nodes and plain text.",
            "append() can insert multiple values.",
          ],
        },
      ],
    },

    {
      id: "7",
      title: "❌ Removing Elements",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const element = document.querySelector(".card");

element.remove();`,
        },
        {
          type: "text",
          text: "remove() deletes the selected element from the DOM.",
        },
      ],
    },

    {
      id: "8",
      title: "🔀 Replacing Elements",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const newHeading =
document.createElement("h2");

newHeading.textContent = "New Title";

oldHeading.replaceWith(newHeading);`,
        },
        {
          type: "text",
          text: "replaceWith() replaces an existing DOM element with another.",
        },
      ],
    },

    {
      id: "9",
      title: "🌲 DOM Traversal",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `element.parentElement;

element.children;

element.firstElementChild;

element.lastElementChild;

element.nextElementSibling;

element.previousElementSibling;`,
        },
        {
          type: "list",
          items: [
            "parentElement → Parent node.",
            "children → Child elements.",
            "firstElementChild → First child.",
            "lastElementChild → Last child.",
            "nextElementSibling → Next sibling.",
            "previousElementSibling → Previous sibling.",
          ],
        },
      ],
    },

    {
      id: "10",
      title: "🧹 cloneNode()",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const clone =
element.cloneNode(true);`,
        },
        {
          type: "list",
          items: [
            "true → Deep clone (copies children).",
            "false → Shallow clone.",
          ],
        },
      ],
    },

    {
      id: "11",
      title: "⚛️ React Connection",
      blocks: [
        {
          type: "text",
          text: "In React, developers rarely create or remove DOM elements manually. React creates, updates and removes DOM elements automatically based on component state.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "If you frequently use createElement(), appendChild(), or remove() inside React components, you are probably fighting React instead of using it.",
        },
        {
          type: "code",
          language: "jsx",
          code: `// Instead of manually creating

const p =
document.createElement("p");

// React

{showMessage && <p>Hello</p>}`,
        },
      ],
    },

    {
      id: "12",
      title: "💼 Interview Notes",
      blocks: [
        {
          type: "list",
          items: [
            "Know the difference between NodeList and HTMLCollection.",
            "Understand Live vs Static collections.",
            "Know createElement(), append(), appendChild(), remove(), replaceWith().",
            "Know basic DOM traversal methods.",
            "Understand how React replaces manual DOM manipulation.",
          ],
        },
      ],
    },

    {
      id: "13",
      title: "⚠️ Common Mistakes",
      blocks: [
        {
          type: "list",
          items: [
            "Thinking NodeList updates automatically.",
            "Using forEach() directly on HTMLCollection.",
            "Forgetting to append a newly created element.",
            "Manipulating DOM directly inside React.",
          ],
        },
      ],
    },

    {
      id: "14",
      title: "🧠 Practice Questions",
      blocks: [
        {
          type: "list",
          items: [
            "What is a NodeList?",
            "What is an HTMLCollection?",
            "Explain Live vs Static collections.",
            "Why doesn't HTMLCollection support forEach()?",
            "Difference between append() and appendChild()?",
            "How do you create a DOM element?",
            "How do you remove an element?",
            "How do you replace an element?",
            "Explain cloneNode(true).",
            "Name five DOM traversal properties.",
          ],
        },
      ],
    },

    {
      id: "15",
      title: "✅ Practice Answers",
      blocks: [
        {
          type: "list",
          items: [
            "NodeList is a collection of DOM nodes, commonly returned by querySelectorAll().",
            "HTMLCollection is a live collection returned by methods like getElementsByClassName().",
            "Static collections don't update automatically, while live collections reflect DOM changes immediately.",
            "HTMLCollection is not an Array and doesn't implement Array methods.",
            "appendChild() accepts only Nodes, while append() accepts both Nodes and strings.",
            "Use document.createElement().",
            "Use element.remove().",
            "Use replaceWith().",
            "cloneNode(true) creates a deep copy including all child elements.",
            "parentElement, children, firstElementChild, lastElementChild, nextElementSibling, previousElementSibling.",
          ],
        },
      ],
    },
  ],
};
