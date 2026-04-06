import type { NotePageData } from "../../../../types/note";

export const errorBoundariesNotes: NotePageData = {
  title: "Error Boundaries",
  description:
    "Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log them, and display a fallback UI instead of crashing the entire app.",
  sections: [
    {
      id: "what-are-error-boundaries",
      title: "What Are Error Boundaries?",
      blocks: [
        {
          type: "text",
          text: "Without Error Boundaries, a single uncaught error anywhere in your component tree will unmount the entire React app and show a blank white screen. Error Boundaries act as safety nets — catching errors and showing a graceful fallback instead.",
        },
        {
          type: "list",
          items: [
            "Catch errors during rendering, in lifecycle methods, and in constructors",
            "Display a fallback UI (error message, retry button) instead of a blank screen",
            "Log errors to monitoring services like Sentry",
            "Only class components can BE Error Boundaries (but they can wrap functional components)",
            "They do NOT catch: event handlers, async code, SSR errors, or errors in the boundary itself",
          ],
        },
        {
          type: "highlight",
          variant: "important",
          text: "Error Boundaries currently MUST be class components. There is no hook equivalent yet. However, you can wrap them into a reusable component and use them anywhere.",
        },
      ],
    },
    {
      id: "creating-error-boundary",
      title: "Creating an Error Boundary",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // Called when a descendant throws — update state to trigger fallback UI
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // Called after an error is caught — use for logging
  componentDidCatch(error, errorInfo) {
    console.error("Error caught:", error);
    console.error("Component stack:", errorInfo.componentStack);
    // logErrorToSentry(error, errorInfo); // send to monitoring
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-8 text-center">
          <h2 className="text-xl font-bold text-red-600">Something went wrong</h2>
          <p className="text-gray-500 mt-2">{this.state.error?.message}</p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;`,
        },
      ],
    },
    {
      id: "using-error-boundary",
      title: "Using Error Boundaries",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// Wrap any subtree you want to protect
function App() {
  return (
    <div>
      {/* Protects the entire app */}
      <ErrorBoundary>
        <Router>
          <Sidebar />
          <main>
            {/* Protects individual pages — isolated failures */}
            <ErrorBoundary fallback={<p>Page failed to load</p>}>
              <Dashboard />
            </ErrorBoundary>

            <ErrorBoundary fallback={<p>Widget error</p>}>
              <RevenueWidget />
            </ErrorBoundary>
          </main>
        </Router>
      </ErrorBoundary>
    </div>
  );
}`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Use MULTIPLE Error Boundaries for different UI sections — so a broken widget doesn't take down the whole sidebar or navigation.",
        },
      ],
    },
    {
      id: "what-they-dont-catch",
      title: "What Error Boundaries Do NOT Catch",
      blocks: [
        {
          type: "list",
          items: [
            "Event handlers — use regular try/catch inside handlers",
            "Async code — setTimeout, fetch, Promises (use try/catch + state)",
            "Server-side rendering (SSR) errors",
            "Errors thrown in the Error Boundary itself",
          ],
        },
        {
          type: "code",
          language: "jsx",
          code: `// ❌ Error Boundary does NOT catch this
function Button() {
  const handleClick = () => {
    throw new Error("Button error"); // NOT caught by boundary
  };
  return <button onClick={handleClick}>Click</button>;
}

// ✅ Handle event errors manually
function Button() {
  const handleClick = () => {
    try {
      throw new Error("Button error");
    } catch (err) {
      console.error(err);
      // show toast notification, update error state, etc.
    }
  };
  return <button onClick={handleClick}>Click</button>;
}`,
        },
      ],
    },
    {
      id: "react-error-boundary-library",
      title: "react-error-boundary Library",
      blocks: [
        {
          type: "text",
          text: "The popular react-error-boundary package provides a feature-rich ErrorBoundary component with hooks — avoiding the need to write class components.",
        },
        {
          type: "code",
          language: "jsx",
          code: `// npm install react-error-boundary
import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <p>Error: {error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => logToSentry(error, info)}
      onReset={() => {/* reset app state here */}}
    >
      <Dashboard />
    </ErrorBoundary>
  );
}

// Trigger boundary from inside a functional component
function Child() {
  const { showBoundary } = useErrorBoundary();

  async function fetchData() {
    try {
      await api.getData();
    } catch (err) {
      showBoundary(err); // programmatically trigger the boundary
    }
  }
}`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "react-error-boundary is the recommended approach for most projects — it covers async errors too via useErrorBoundary hook.",
        },
      ],
    },
  ],
};
