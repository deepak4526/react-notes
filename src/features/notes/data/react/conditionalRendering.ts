import type { NotePageData } from "../../../../types/note";

export const conditionalRenderingNotes: NotePageData = {
  title: "Conditional Rendering",
  description:
    "Conditional rendering means showing or hiding UI elements based on conditions. React offers several patterns — choosing the right one makes your code cleaner.",
  sections: [
    {
      id: "ternary",
      title: "Ternary Operator — if/else in JSX",
      blocks: [
        {
          type: "text",
          text: "The ternary operator is the standard way to show one of two things based on a condition.",
        },
        {
          type: "code",
          language: "jsx",
          code: `function Welcome({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn
        ? <h1>Welcome back, Deepak!</h1>
        : <h1>Please log in</h1>
      }
    </div>
  );
}

// Inline for small values
<p>{isLoggedIn ? "Online" : "Offline"}</p>

// For longer JSX — extract to variable
const content = isLoggedIn
  ? <Dashboard />
  : <LoginPage />;

return <div>{content}</div>;`,
        },
      ],
    },
    {
      id: "and-operator",
      title: "&& Operator — Show or Nothing",
      blocks: [
        {
          type: "text",
          text: "The && (short-circuit) operator renders something only when the condition is true. If false, nothing renders.",
        },
        {
          type: "code",
          language: "jsx",
          code: `function Notification({ hasUnread, count }) {
  return (
    <div>
      {/* Renders badge only when hasUnread is true */}
      {hasUnread && <span className="badge">{count}</span>}

      {/* Good for conditional sections */}
      {isAdmin && (
        <div className="admin-panel">
          <h2>Admin Controls</h2>
          <button>Manage Users</button>
        </div>
      )}
    </div>
  );
}`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Be careful with 0 and &&! If count is 0, React renders 0 on screen (not nothing). Fix: use {count > 0 && <Badge />} or {!!count && <Badge />}",
        },
        {
          type: "code",
          language: "jsx",
          code: `const count = 0;

// ❌ Bug — renders "0" on screen
{count && <Badge />}

// ✅ Fix 1 — explicit boolean check
{count > 0 && <Badge />}

// ✅ Fix 2 — convert to boolean
{!!count && <Badge />}

// ✅ Fix 3 — ternary
{count ? <Badge>{count}</Badge> : null}`,
        },
      ],
    },
    {
      id: "early-return",
      title: "Early Return — Cleanest Pattern",
      blocks: [
        {
          type: "text",
          text: "Early returns keep your main JSX clean by handling special cases at the top of the component.",
        },
        {
          type: "code",
          language: "jsx",
          code: `function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Early returns for special states
  if (loading) return <Spinner />;
  if (error)   return <ErrorMessage message={error} />;
  if (!user)   return <p>No user found</p>;

  // Main render — only reached if all guards above pass
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Early returns are cleaner than deeply nested ternaries. Handle loading, error, and empty states first — then write your main UI without nesting.",
        },
      ],
    },
    {
      id: "switch-pattern",
      title: "Switch / Object Pattern — Multiple Conditions",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// When you have more than 2 conditions, use object map or switch

// Object map pattern (cleaner)
const statusMap = {
  loading: <Spinner />,
  error:   <ErrorMessage />,
  empty:   <EmptyState />,
  success: <DataList />,
};

function DataView({ status }) {
  return <div>{statusMap[status] ?? null}</div>;
}

// Or a separate function using switch
function renderContent(status) {
  switch (status) {
    case "loading": return <Spinner />;
    case "error":   return <ErrorMessage />;
    case "empty":   return <EmptyState />;
    case "success": return <DataList />;
    default:        return null;
  }
}

function DataView({ status }) {
  return <div>{renderContent(status)}</div>;
}`,
        },
      ],
    },
  ],
};
