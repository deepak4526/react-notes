import type { NotePageData } from "../../../../types/note";

export const hocNotes: NotePageData = {
  title: "Higher-Order Components (HOC)",
  description:
    "A Higher-Order Component is a function that takes a component as input and returns a new enhanced component — a pattern for sharing cross-cutting logic without modifying the original component.",
  sections: [
    {
      id: "what-is-hoc",
      title: "What is an HOC?",
      blocks: [
        {
          type: "text",
          text: "HOC is a design pattern inspired by Higher-Order Functions in JavaScript. Just like map() and filter() take a function and return a new function, an HOC takes a component and returns a new component with added behavior.",
        },
        {
          type: "code",
          language: "javascript",
          code: `// Pattern: HOC = function that wraps a component
const EnhancedComponent = higherOrderComponent(OriginalComponent);

// Analogy with higher-order functions
const doubled = [1, 2, 3].map(x => x * 2); // map wraps behavior around values
// HOC wraps behavior around components`,
        },
        {
          type: "list",
          items: [
            "Add authentication/authorization guards",
            "Add loading spinners or skeleton states",
            "Inject props (data, handlers) from a shared source",
            "Add logging / analytics tracking",
            "Provide common error handling UI",
          ],
        },
        {
          type: "highlight",
          variant: "info",
          text: "HOCs were the primary React pattern before hooks. Today, custom hooks often replace them — but HOCs are still widely used in existing codebases and some libraries.",
        },
      ],
    },
    {
      id: "basic-hoc",
      title: "Creating a Basic HOC",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// withLogger.tsx — logs every render of wrapped component
import { useEffect } from "react";

function withLogger(WrappedComponent) {
  // Return a new component
  function WithLogger(props) {
    useEffect(() => {
      console.log(\`[\${WrappedComponent.name}] rendered with props:\`, props);
    });

    // Pass through all props to the original component
    return <WrappedComponent {...props} />;
  }

  // Give it a helpful display name for DevTools
  WithLogger.displayName = \`withLogger(\${WrappedComponent.name})\`;

  return WithLogger;
}

// Usage
function UserCard({ name, role }) {
  return <div>{name} — {role}</div>;
}

const LoggedUserCard = withLogger(UserCard);

// Now LoggedUserCard logs on every render
<LoggedUserCard name="Deepak" role="Admin" />`,
        },
      ],
    },
    {
      id: "auth-hoc",
      title: "Authentication HOC — Most Common Use Case",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// withAuth.tsx — protects routes/components from unauthenticated users
import { Navigate } from "react-router-dom";

function withAuth(WrappedComponent) {
  function WithAuth(props) {
    const { isAuthenticated, isLoading } = useAuthContext();

    if (isLoading) {
      return <div className="flex justify-center p-8"><Spinner /></div>;
    }

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    return <WrappedComponent {...props} />;
  }

  WithAuth.displayName = \`withAuth(\${WrappedComponent.name})\`;
  return WithAuth;
}

// Protect any page component
const ProtectedDashboard = withAuth(Dashboard);
const ProtectedProfile   = withAuth(Profile);
const ProtectedSettings  = withAuth(Settings);

// In routes
<Route path="/dashboard" element={<ProtectedDashboard />} />`,
        },
      ],
    },
    {
      id: "loading-hoc",
      title: "Loading State HOC",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// withLoading.tsx — shows skeleton/spinner while data loads
function withLoading(WrappedComponent, LoadingComponent = DefaultSpinner) {
  function WithLoading({ isLoading, ...props }) {
    if (isLoading) {
      return <LoadingComponent />;
    }
    return <WrappedComponent {...props} />;
  }

  WithLoading.displayName = \`withLoading(\${WrappedComponent.name})\`;
  return WithLoading;
}

// Usage
function UserList({ users }) {
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}

const UserListWithLoading = withLoading(UserList);

function App() {
  const { data: users, isLoading } = useFetchUsers();
  return <UserListWithLoading isLoading={isLoading} users={users} />;
}`,
        },
      ],
    },
    {
      id: "hoc-vs-hooks",
      title: "HOC vs Custom Hooks",
      blocks: [
        {
          type: "list",
          items: [
            "HOC — wraps a component, adds UI behavior (loading, auth guard, error UI)",
            "Custom Hook — shares stateful logic without wrapping; can't add JSX wrapper",
            "HOC adds an extra layer to the component tree (visible in DevTools)",
            "Custom Hooks have no extra component layer — cleaner component tree",
            "HOC is better when you need to conditionally render the component entirely",
            "Custom Hooks are better for sharing data-fetching, state, or side-effect logic",
          ],
        },
        {
          type: "code",
          language: "jsx",
          code: `// Same logic as withAuth, but as a hook
function useAuth() {
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, [isAuthenticated]);

  return { isAuthenticated };
}

// Usage inside component — no wrapping needed
function Dashboard() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return null;
  return <div>Dashboard content</div>;
}`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Prefer custom hooks for most logic-sharing in modern React apps. Use HOCs when you truly need to wrap a component with UI (loading skeleton, auth redirect, error boundary).",
        },
      ],
    },
  ],
};
