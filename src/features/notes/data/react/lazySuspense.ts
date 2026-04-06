import type { NotePageData } from "../../../../types/note";

export const lazySuspenseNotes: NotePageData = {
  title: "Lazy Loading & Suspense",
  description:
    "React.lazy and Suspense enable code splitting — loading components only when they are needed, reducing the initial bundle size and improving app startup performance.",
  sections: [
    {
      id: "code-splitting",
      title: "What is Code Splitting?",
      blocks: [
        {
          type: "text",
          text: "By default, React bundles ALL your components into one large JavaScript file. Code splitting breaks it into smaller chunks that load on-demand — the user only downloads what they need, when they need it.",
        },
        {
          type: "list",
          items: [
            "Without code splitting: entire app JS loads on first visit (slow initial load)",
            "With code splitting: only the current page/route loads; other pages load on demand",
            "Results in faster Time to Interactive (TTI) and better Lighthouse scores",
            "Especially important for large apps with many routes/features",
          ],
        },
        {
          type: "highlight",
          variant: "info",
          text: "Vite and webpack automatically support code splitting when you use React.lazy() — they create separate chunk files for each lazy-loaded component.",
        },
      ],
    },
    {
      id: "react-lazy",
      title: "React.lazy — Dynamic Imports",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `import { lazy, Suspense } from "react";

// ❌ Normal import — always included in the main bundle
import HeavyDashboard from "./HeavyDashboard";

// ✅ Lazy import — loaded only when component is rendered
const HeavyDashboard = lazy(() => import("./HeavyDashboard"));
const Analytics      = lazy(() => import("./Analytics"));
const Settings       = lazy(() => import("./Settings"));

// IMPORTANT: The module must have a DEFAULT export
// HeavyDashboard.tsx must do: export default function HeavyDashboard() {...}`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "React.lazy() only works with default exports. For named exports, create a wrapper file that re-exports as default.",
        },
      ],
    },
    {
      id: "suspense",
      title: "Suspense — Showing a Fallback",
      blocks: [
        {
          type: "text",
          text: "Wrap lazy components with Suspense to display a fallback UI while the component's code is loading. Without Suspense, React will throw an error.",
        },
        {
          type: "code",
          language: "jsx",
          code: `import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}

// ✅ Better: Use a spinner or skeleton
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin w-8 h-8 border-4 border-purple-500 rounded-full border-t-transparent" />
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Dashboard />
    </Suspense>
  );
}`,
        },
      ],
    },
    {
      id: "route-splitting",
      title: "Route-Based Code Splitting (Most Common Pattern)",
      blocks: [
        {
          type: "text",
          text: "The most impactful place to apply code splitting is at the route level — each page/route becomes its own chunk, loaded only when the user navigates to it.",
        },
        {
          type: "code",
          language: "jsx",
          code: `import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Each route is a separate chunk
const Home      = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile   = lazy(() => import("./pages/Profile"));
const Settings  = lazy(() => import("./pages/Settings"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile"   element={<Profile />} />
          <Route path="/settings"  element={<Settings />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Place one Suspense boundary around all routes as shown above — it handles the loading state for all lazy routes automatically.",
        },
      ],
    },
    {
      id: "error-boundaries-with-lazy",
      title: "Handling Load Failures",
      blocks: [
        {
          type: "text",
          text: "If a lazy-loaded component fails to load (network error, bad file, etc.), Suspense doesn't catch it — you need an Error Boundary to handle load failures gracefully.",
        },
        {
          type: "code",
          language: "jsx",
          code: `import { lazy, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <ErrorBoundary fallback={<p>Failed to load page. Please refresh.</p>}>
      <Suspense fallback={<LoadingSpinner />}>
        <Dashboard />
      </Suspense>
    </ErrorBoundary>
  );
}`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Always wrap lazy components with both Suspense (loading state) AND an Error Boundary (failure state) in production apps.",
        },
      ],
    },
    {
      id: "preloading",
      title: "Preloading Chunks",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// Preload a component on hover — before the user even clicks
const Dashboard = lazy(() => import("./Dashboard"));

function NavLink() {
  // Trigger the import on hover — loads the chunk in the background
  const handleMouseEnter = () => {
    import("./Dashboard"); // preloads the chunk
  };

  return (
    <a href="/dashboard" onMouseEnter={handleMouseEnter}>
      Dashboard
    </a>
  );
}`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Preloading on hover gives users a perceived instant navigation experience — the chunk is already cached by the time they click.",
        },
      ],
    },
  ],
};
