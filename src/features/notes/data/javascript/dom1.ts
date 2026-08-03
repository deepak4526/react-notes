import type { NotePageData } from "../../../../types/note";

export const DOMFundamentals: NotePageData = {
  title: "🌳 DOM Fundamentals",
  description:
    "Learn the fundamentals of the Document Object Model (DOM), browser APIs, DOM selection methods, content manipulation, and how they relate to React development.",
  //   category: "JavaScript",

  sections: [
    {
      id: "1",
      title: "🌳 What is the DOM?",
      blocks: [
        {
          type: "text",
          text: "DOM (Document Object Model) is a tree-like object representation of an HTML document created by the browser. JavaScript interacts with this object tree to read, modify, create, and remove elements from the webpage.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "DOM is NOT the HTML itself. It is an object model generated from the HTML by the browser.",
        },
        {
          type: "code",
          language: "html",
          code: `<body>
  <h1>Hello</h1>
  <button>Click Me</button>
</body>`,
        },
        {
          type: "code",
          language: "text",
          code: `document
└── html
    └── body
        ├── h1
        └── button`,
        },
      ],
    },

    {
      id: "2",
      title: "📄 HTML vs DOM",
      blocks: [
        {
          type: "list",
          items: [
            "HTML is a markup language.",
            "DOM is an object representation of HTML.",
            "HTML is static source code.",
            "DOM can change while the application is running.",
            "JavaScript interacts with the DOM, not directly with HTML.",
          ],
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Interview Answer: HTML defines the structure, while DOM is the browser's object model that JavaScript manipulates.",
        },
      ],
    },

    {
      id: "3",
      title: "🌐 JavaScript vs Browser APIs",
      blocks: [
        {
          type: "text",
          text: "JavaScript is a programming language. The browser provides additional APIs like document, window, localStorage and fetch.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// JavaScript
Array
Object
Promise
Map
Set

// Browser APIs
window
document
localStorage
history
location
fetch`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "document.querySelector() is NOT part of JavaScript. It is a DOM API provided by the browser.",
        },
      ],
    },

    {
      id: "4",
      title: "🪟 window vs document",
      blocks: [
        {
          type: "code",
          language: "text",
          code: `window
├── document
├── history
├── location
├── localStorage
└── sessionStorage`,
        },
        {
          type: "list",
          items: [
            "window represents the browser window.",
            "document represents the loaded webpage.",
            "document is a property of window.",
            "window.document === document // true",
          ],
        },
      ],
    },

    {
      id: "5",
      title: "🎯 Selecting DOM Elements",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `// Select by ID
document.getElementById("title");

// First matching element
document.querySelector(".btn");

// All matching elements
document.querySelectorAll(".btn");`,
        },
        {
          type: "list",
          items: [
            "getElementById() expects only the id name.",
            "querySelector() accepts CSS selectors.",
            "querySelectorAll() returns every matching element.",
          ],
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Modern frontend projects usually prefer querySelector() and querySelectorAll() because they support CSS selectors.",
        },
      ],
    },

    {
      id: "6",
      title: "📝 textContent vs innerText vs innerHTML",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `const box = document.querySelector("#box");

box.textContent;
box.innerText;
box.innerHTML;`,
        },
        {
          type: "list",
          items: [
            "textContent → returns all text inside an element.",
            "innerText → returns only rendered/visible text.",
            "innerHTML → returns HTML markup inside the element.",
          ],
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Never insert untrusted user input into innerHTML because it can introduce XSS (Cross-Site Scripting) vulnerabilities.",
        },
      ],
    },

    {
      id: "7",
      title: "🎨 classList",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
element.classList.contains("active");`,
        },
        {
          type: "text",
          text: "classList is the recommended way to manipulate CSS classes instead of replacing the entire class attribute.",
        },
      ],
    },

    {
      id: "8",
      title: "⚛️ React Connection",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `// Vanilla JavaScript
heading.textContent = "Hello";

// React
setTitle("Hello");`,
        },
        {
          type: "text",
          text: "In vanilla JavaScript, developers manually update the DOM. In React, developers update state and React updates the DOM efficiently.",
        },
        {
          type: "highlight",
          variant: "important",
          text: "React encourages declarative UI updates instead of manual DOM manipulation.",
        },
      ],
    },

    {
      id: "9",
      title: "💼 Interview Notes",
      blocks: [
        {
          type: "list",
          items: [
            "Know the difference between HTML and DOM.",
            "Know that DOM is a Browser API, not JavaScript.",
            "Understand window vs document.",
            "Know when to use querySelector() vs querySelectorAll().",
            "Understand textContent, innerText and innerHTML.",
            "Know why using innerHTML with user input is dangerous.",
          ],
        },
      ],
    },

    {
      id: "10",
      title: "⚠️ Common Mistakes",
      blocks: [
        {
          type: "list",
          items: [
            "Thinking DOM is part of JavaScript.",
            "Using getElementById('#id') instead of getElementById('id').",
            "Using innerHTML when textContent is sufficient.",
            "Directly manipulating the DOM inside React components.",
          ],
        },
      ],
    },

    {
      id: "11",
      title: "🧠 Practice Questions",
      blocks: [
        {
          type: "list",
          items: [
            "What is the DOM?",
            "Explain HTML vs DOM.",
            "Is querySelector() part of JavaScript?",
            "What is the difference between window and document?",
            "What does querySelector() return?",
            "What does querySelectorAll() return?",
            "Explain textContent, innerText and innerHTML.",
            "Why is innerHTML considered dangerous?",
            "Why doesn't React encourage direct DOM manipulation?",
          ],
        },
      ],
    },

    {
      id: "12",
      title: "✅ Practice Answers",
      blocks: [
        {
          type: "list",
          items: [
            "DOM is the browser's object representation of an HTML document.",
            "HTML is markup, while DOM is an object tree created from that markup.",
            "No. querySelector() is a DOM API provided by the browser.",
            "window represents the browser window, while document represents the webpage loaded inside it.",
            "querySelector() returns the first matching Element.",
            "querySelectorAll() returns a static NodeList of all matching elements.",
            "textContent returns text, innerText returns rendered text, and innerHTML returns HTML markup.",
            "innerHTML can execute injected HTML/JavaScript if user input isn't sanitized, leading to XSS attacks.",
            "React updates the DOM through state changes and reconciliation, making manual DOM updates unnecessary in most cases.",
          ],
        },
      ],
    },
  ],
};
