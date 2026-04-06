import type { NotePageData } from "../../../../types/note";

export const propsNotes: NotePageData = {
  title: "Props",
  description:
    "Props (properties) are how components receive data from their parent. They flow one way — parent to child. Think of props as function arguments for your components.",
  sections: [
    {
      id: "basics",
      title: "Passing & Receiving Props",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// Parent passes props like HTML attributes
function App() {
  return (
    <UserCard
      name="Deepak"
      age={25}
      isAdmin={true}
      hobbies={["coding", "gaming"]}
    />
  );
}

// Child receives props as a single object
function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      {props.isAdmin && <span>Admin</span>}
    </div>
  );
}

// ✅ Better — destructure props
function UserCard({ name, age, isAdmin, hobbies }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {isAdmin && <span>Admin</span>}
    </div>
  );
}`,
        },
      ],
    },
    {
      id: "default-props",
      title: "Default Props Values",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// Set defaults in destructuring (recommended)
function Button({ label, variant = "primary", size = "md", disabled = false }) {
  return (
    <button
      className={\`btn btn-\${variant} btn-\${size}\`}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

// Using the component
<Button label="Submit" />               // variant="primary", size="md"
<Button label="Cancel" variant="ghost" /> // size="md" (default)
<Button label="Delete" variant="danger" size="sm" />`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Set default values directly in the function parameter destructuring — it's cleaner and works with TypeScript better than the old defaultProps approach.",
        },
      ],
    },
    {
      id: "children",
      title: "children Prop",
      blocks: [
        {
          type: "text",
          text: "The special 'children' prop represents whatever you put between a component's opening and closing tags. It's used to build layout/wrapper components.",
        },
        {
          type: "code",
          language: "jsx",
          code: `// Card is a wrapper — children is whatever goes inside
function Card({ title, children }) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className="card-body">
        {children}   {/* renders whatever is inside <Card>...</Card> */}
      </div>
    </div>
  );
}

// Usage — children is the JSX between tags
<Card title="User Info">
  <p>Name: Deepak</p>
  <p>Age: 25</p>
  <button>Edit</button>
</Card>`,
        },
        {
          type: "code",
          language: "tsx",
          code: `// TypeScript — type children properly
type Props = {
  title: string;
  children: React.ReactNode; // accepts any valid JSX
};

function Card({ title, children }: Props) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  );
}`,
        },
      ],
    },
    {
      id: "props-vs-state",
      title: "Props vs State",
      blocks: [
        {
          type: "code",
          language: "text",
          code: `              Props                  State
────────────────────────────────────────────────
Comes from    Parent component       Component itself
Mutable?      No (read-only)         Yes (use setState)
Who controls  Parent                 The component
Purpose       Configure component    Track dynamic data`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "Props are READ-ONLY. Never modify props inside a component. If you need to change something, that data belongs in state.",
        },
        {
          type: "code",
          language: "jsx",
          code: `// ❌ Never mutate props
function BadComponent({ count }) {
  count = count + 1; // ❌ Don't do this!
  return <p>{count}</p>;
}

// ✅ If you need to derive from props, use local state or useMemo
function GoodComponent({ initialCount }) {
  const [count, setCount] = useState(initialCount); // use prop as initial value
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}`,
        },
      ],
    },
    {
      id: "prop-drilling",
      title: "Prop Drilling — The Problem with Deep Props",
      blocks: [
        {
          type: "text",
          text: "Prop drilling is when you pass props through multiple layers of components just to get data to a deeply nested component. It becomes messy quickly.",
        },
        {
          type: "code",
          language: "jsx",
          code: `// ❌ Prop drilling — user passed through every level
function App() {
  const [user] = useState({ name: "Deepak" });
  return <Layout user={user} />;
}

function Layout({ user }) {
  return <Sidebar user={user} />; // Layout doesn't use user, just passes it
}

function Sidebar({ user }) {
  return <UserMenu user={user} />; // Same — just passing
}

function UserMenu({ user }) {
  return <p>{user.name}</p>; // finally used here!
}`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "When you find yourself passing props through more than 2 levels, consider using React Context or a state management library instead.",
        },
      ],
    },
  ],
};
