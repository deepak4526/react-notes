import type { NotePageData } from "../../../../../types/note";

export const useReducerNotes: NotePageData = {
  title: "useReducer Hook",
  description:
    "useReducer is an alternative to useState for managing complex state logic. It follows the same pattern as Redux — dispatch an action, reducer returns new state. Best for objects with multiple sub-values or complex update logic.",
  sections: [
    {
      id: "basics",
      title: "Basic Syntax",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `import { useReducer } from "react";

// 1. Define a reducer function
//    Takes: current state + action
//    Returns: new state
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

// 2. Use the reducer in your component
function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}`,
        },
        {
          type: "highlight",
          variant: "info",
          text: "dispatch({ type: 'increment' }) tells the reducer what happened. The reducer decides HOW state changes. Never mutate state in a reducer — always return a new object.",
        },
      ],
    },
    {
      id: "with-payload",
      title: "Actions with Payload",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// Actions can carry extra data via 'payload'
function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, done: false }],
      };
    case "toggle":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, done: !todo.done }
            : todo
        ),
      };
    case "delete":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });
  const [text, setText] = useState("");

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => {
        dispatch({ type: "add", payload: text });
        setText("");
      }}>Add</button>

      {state.todos.map(todo => (
        <div key={todo.id}>
          <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
            {todo.text}
          </span>
          <button onClick={() => dispatch({ type: "toggle", payload: todo.id })}>
            Toggle
          </button>
          <button onClick={() => dispatch({ type: "delete", payload: todo.id })}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}`,
        },
      ],
    },
    {
      id: "vs-usestate",
      title: "useReducer vs useState",
      blocks: [
        {
          type: "code",
          language: "text",
          code: `                  useState               useReducer
─────────────────────────────────────────────────────────
Best for          Simple values,         Complex objects,
                  independent pieces     related state
Update logic      Inline in component    Centralized reducer
Testing           Harder to isolate      Reducer is pure —
                  logic                  easy to unit test
When state        Fine                   Better — one
depends on prev                          dispatch per action`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Switch to useReducer when: (1) state has many related fields, (2) next state depends on previous in complex ways, or (3) you have many different update operations.",
        },
      ],
    },
  ],
};
