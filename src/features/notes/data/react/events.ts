import type { NotePageData } from "../../../../types/note";

export const eventsNotes: NotePageData = {
  title: "Event Handling in React",
  description:
    "React wraps native browser events in SyntheticEvents — a cross-browser wrapper. Event handling in React is similar to HTML but with key differences in syntax.",
  sections: [
    {
      id: "basics",
      title: "Basic Event Handling",
      blocks: [
        {
          type: "list",
          items: [
            "Use camelCase event names: onClick, onChange, onSubmit, onKeyDown",
            "Pass a function reference, not a function call (no parentheses!)",
            "Events receive a SyntheticEvent object as the first argument",
          ],
        },
        {
          type: "code",
          language: "jsx",
          code: `// ❌ Wrong — calling the function immediately (on render, not on click)
<button onClick={handleClick()}>Click me</button>

// ✅ Correct — passing a reference, called when clicked
<button onClick={handleClick}>Click me</button>

// ✅ Inline arrow function (for passing arguments)
<button onClick={() => handleClick(userId)}>Click me</button>`,
        },
        {
          type: "code",
          language: "jsx",
          code: `function MyButton() {
  // Handler defined separately
  const handleClick = () => {
    console.log("Button clicked!");
  };

  // Handler with event object
  const handleClick2 = (e) => {
    console.log(e.target);          // DOM element that was clicked
    console.log(e.type);            // "click"
    e.preventDefault();             // prevent default browser action
    e.stopPropagation();            // stop event from bubbling up
  };

  return <button onClick={handleClick}>Click</button>;
}`,
        },
      ],
    },
    {
      id: "common-events",
      title: "Common Events",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `function EventExamples() {
  // onClick — click on any element
  const handleClick = () => console.log("clicked");

  // onChange — value changed (inputs, select, textarea)
  const handleChange = (e) => console.log(e.target.value);

  // onSubmit — form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload!
    console.log("form submitted");
  };

  // onKeyDown / onKeyUp / onKeyPress
  const handleKey = (e) => {
    if (e.key === "Enter") console.log("Enter pressed");
    if (e.key === "Escape") console.log("Escape pressed");
  };

  // onFocus / onBlur — input focus
  const handleFocus = () => console.log("input focused");
  const handleBlur  = () => console.log("input lost focus");

  // onMouseEnter / onMouseLeave — hover
  const handleHover = () => console.log("hovered");

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        onKeyDown={handleKey}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button onClick={handleClick}>Submit</button>
    </form>
  );
}`,
        },
      ],
    },
    {
      id: "passing-arguments",
      title: "Passing Arguments to Handlers",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `const users = [
  { id: 1, name: "Deepak" },
  { id: 2, name: "Raj" },
];

// ✅ Use arrow function to pass arguments
function UserList() {
  const handleDelete = (id) => {
    console.log("Delete user:", id);
  };

  const handleSelect = (id, name) => {
    console.log(\`Selected \${name} (id: \${id})\`);
  };

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
          <button onClick={() => handleDelete(user.id)}>
            Delete
          </button>
          <button onClick={() => handleSelect(user.id, user.name)}>
            Select
          </button>
        </li>
      ))}
    </ul>
  );
}`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "When you need to pass arguments to a handler, always wrap it in an arrow function: onClick={() => handleDelete(id)}. This creates a new function that will be called on click.",
        },
      ],
    },
    {
      id: "event-object",
      title: "The Event Object",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// Common event object properties
const handleInput = (e) => {
  e.target.value;       // current value of input
  e.target.name;        // name attribute of input
  e.target.checked;     // for checkboxes (boolean)
  e.target.type;        // "text", "checkbox", etc.
  e.preventDefault();   // stop default browser action
  e.stopPropagation();  // stop event bubbling to parent
};

// Accessing event + extra argument together
const handleChange = (e, extraData) => {
  console.log(e.target.value, extraData);
};

<input onChange={(e) => handleChange(e, "extra")} />`,
        },
      ],
    },
  ],
};
