import type { NotePageData } from "../../../../types/note";

export const componentsNotes: NotePageData = {
  title: "Components",
  description:
    "Components are the building blocks of React applications. Every piece of UI is a component — buttons, forms, pages, layouts. Think of them as custom HTML elements.",
  sections: [
    {
      id: "what-is-component",
      title: "What is a Component?",
      blocks: [
        {
          type: "text",
          text: "A component is a reusable, self-contained piece of UI. It's a JavaScript function that returns JSX. Components can be nested inside each other to build complex interfaces.",
        },
        {
          type: "list",
          items: [
            "Component names MUST start with a capital letter (MyComponent, not myComponent)",
            "Components must return JSX (or null)",
            "Each component is its own isolated unit with its own logic",
            "Components can accept data via props and manage their own state",
          ],
        },
        {
          type: "code",
          language: "jsx",
          code: `// Simplest possible component
function Hello() {
  return <h1>Hello, World!</h1>;
}

// Arrow function style (same component, different syntax)
const Hello = () => <h1>Hello, World!</h1>;

// Using the component (like a custom HTML tag)
function App() {
  return (
    <div>
      <Hello />
      <Hello />  {/* reusable! */}
    </div>
  );
}`,
        },
      ],
    },
    {
      id: "anatomy",
      title: "Anatomy of a React Component",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `import { useState, useEffect } from "react"; // 1. Imports
import "./UserCard.css";

// 2. TypeScript props type
type Props = {
  userId: number;
  showAge?: boolean; // optional prop
};

// 3. Component function
const UserCard = ({ userId, showAge = true }: Props) => {

  // 4. State
  const [user, setUser] = useState(null);

  // 5. Side effects
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(r => r.json())
      .then(setUser);
  }, [userId]);

  // 6. Early return (loading state)
  if (!user) return <p>Loading...</p>;

  // 7. JSX return
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      {showAge && <p>Age: {user.age}</p>}
    </div>
  );
};

// 8. Export
export default UserCard;`,
        },
      ],
    },
    {
      id: "splitting",
      title: "Splitting & Composing Components",
      blocks: [
        {
          type: "text",
          text: "Good React development means knowing when to split a big component into smaller ones. A good rule of thumb: if a component does more than one thing, split it.",
        },
        {
          type: "code",
          language: "jsx",
          code: `// ❌ One massive component — hard to read and reuse
function Page() {
  return (
    <div>
      <div className="navbar">...</div>  {/* 50 lines */}
      <div className="sidebar">...</div> {/* 80 lines */}
      <div className="content">...</div> {/* 200 lines */}
      <div className="footer">...</div>  {/* 40 lines */}
    </div>
  );
}

// ✅ Split into composable components
function Page() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}`,
        },
        {
          type: "list",
          items: [
            "Split when a section gets too long (50+ lines is a sign)",
            "Split when a section is used in multiple places (reusability)",
            "Split when a section has its own state or logic",
            "Keep components focused — one responsibility per component (Single Responsibility Principle)",
          ],
        },
      ],
    },
    {
      id: "component-types",
      title: "Functional vs Class Components",
      blocks: [
        {
          type: "text",
          text: "Before React 16.8 (2019), class components were required for state and lifecycle. Hooks changed everything — now functional components can do everything class components can, and more cleanly.",
        },
        {
          type: "code",
          language: "jsx",
          code: `// ❌ Old way — Class Component (you may see in legacy code)
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <button onClick={this.increment}>
        {this.state.count}
      </button>
    );
  }
}

// ✅ Modern way — Functional Component + Hooks
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "Always write functional components. Class components are legacy — you'll only need to understand them if you work on old codebases.",
        },
      ],
    },
  ],
};
