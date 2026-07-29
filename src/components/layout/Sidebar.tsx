import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

// ─── Types ────────────────────────────────────────────────────────
interface NavItem {
  label: string;
  path: string;
}

interface NavGroup {
  id: string;
  label: string;
  emoji: string;
  items: NavItem[];
}

interface SidebarGroupProps {
  group: NavGroup;
  isOpen: boolean;
  onToggle: () => void;
}

// ─── Nav Structure ────────────────────────────────────────────────
const navGroups: NavGroup[] = [
  {
    id: "javascript",
    label: "JavaScript",
    emoji: "🟡",
    items: [
      { label: "Intro", path: "/js/intro-js" },
      { label: "Variables", path: "/js/variables" },
      { label: "Data Types", path: "/js/data-types" },
      { label: "Arrow Functions", path: "/js/arrow-functions" },
      { label: "this Keyword", path: "/js/this-keyword" },
      { label: "Hoisting", path: "/js/hoisting" },
      { label: "Scope & Context", path: "/js/scope" },
      { label: "Closures", path: "/js/closures" },
      { label: "Destructuring", path: "/js/destructuring" },
      { label: "Spread & Rest", path: "/js/spread-rest" },
      { label: "Array Methods", path: "/js/array-methods" },
      { label: "Objects", path: "/js/objects" },
      { label: "Prototypes", path: "/js/prototypes" },
      { label: "Loops And Iterations", path: "/js/loops-iterations" },
      {
        label: "Performance & Time Complexity: Core Concepts",
        path: "/js/performance-time-complexity",
      },
      {
        label: "Performance & Time Complexity: JavaScript & Interview Patterns",
        path: "/js/performance-time-complexity-part-2",
      },
      { label: "Promises", path: "/js/promises" },
      { label: "Async / Await", path: "/js/async-await" },
      { label: "Error Handling", path: "/js/error-handling" },
      { label: "Modules", path: "/js/modules" },
      { label: "🌱 Practice Questions: Easy", path: "/js/practice-easy" },
      { label: "🧩 Practice Questions: Medium", path: "/js/practice-medium" },
      { label: "🔥 Practice Questions: Hard", path: "/js/practice-hard" },
    ],
  },
  {
    id: "react-core",
    label: "React — Core",
    emoji: "⚛️",
    items: [
      { label: "Introduction", path: "/react/introduction" },
      { label: "JSX", path: "/react/jsx" },
      { label: "Components", path: "/react/components" },
      { label: "Props", path: "/react/props" },
      { label: "Events", path: "/react/events" },
      {
        label: "Conditional Rendering",
        path: "/react/conditional-rendering",
      },
      { label: "Lists & Keys", path: "/react/lists-keys" },
      { label: "Forms", path: "/react/forms" },
      { label: "Routing", path: "/react/routing" },
    ],
  },
  {
    id: "react-advanced",
    label: "React — Advanced",
    emoji: "🚀",
    items: [
      { label: "React.memo", path: "/react/memo" },
      { label: "Lazy & Suspense", path: "/react/lazy-suspense" },
      { label: "Error Boundaries", path: "/react/error-boundaries" },
      { label: "Portals", path: "/react/portals" },
      { label: "HOC", path: "/react/hoc" },
    ],
  },
  {
    id: "react-hooks",
    label: "React — Hooks",
    emoji: "🪝",
    items: [
      { label: "useState", path: "/react/hooks/use-state" },
      { label: "useEffect", path: "/react/hooks/use-effect" },
      { label: "useRef", path: "/react/hooks/use-ref" },
      { label: "useContext", path: "/react/hooks/use-context" },
      { label: "useReducer", path: "/react/hooks/use-reducer" },
      { label: "useMemo", path: "/react/hooks/use-memo" },
      { label: "useCallback", path: "/react/hooks/use-callback" },
      { label: "Custom Hooks", path: "/react/hooks/custom-hooks" },
    ],
  },
];

// ─── Single Group ─────────────────────────────────────────────────
function SidebarGroup({ group, isOpen, onToggle }: SidebarGroupProps) {
  const location = useLocation();

  const hasActiveChild = group.items.some(
    (item) => location.pathname === item.path,
  );

  return (
    <div className="mb-1">
      {/* Group Header */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-150 ${
          hasActiveChild
            ? "bg-purple-100 text-purple-700"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }`}
      >
        <span className="flex items-center gap-2">
          <span>{group.emoji}</span>
          <span>{group.label}</span>
        </span>

        <svg
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-90" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Group Items */}
      {isOpen && (
        <ul className="mt-1 ml-3 space-y-0.5 border-l border-gray-200 pl-3">
          {group.items.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block rounded-md px-4 py-1.5 text-left text-sm transition-colors duration-150 ${
                    isActive
                      ? "bg-purple-600 font-medium text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────
const Sidebar = () => {
  const location = useLocation();

  // Find which group contains the current route.
  const activeGroup = navGroups.find((group) =>
    group.items.some((item) => item.path === location.pathname),
  );

  // Use the current route's group when the sidebar first mounts.
  // Otherwise default to JavaScript.
  const [openGroupId, setOpenGroupId] = useState<string | null>(
    activeGroup?.id ?? "javascript",
  );

  const handleGroupToggle = (groupId: string) => {
    setOpenGroupId((currentGroupId) =>
      currentGroupId === groupId ? null : groupId,
    );
  };

  return (
    <aside className="flex h-full w-64 flex-col overflow-y-auto border-r border-gray-200 bg-gray-50">
      {/* Logo / Brand */}
      <div className="border-b border-gray-200 px-4 py-5">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-purple-600">
            <span className="text-xs font-bold text-white">P</span>
          </div>

          <span className="text-base font-bold text-gray-900">DevNotes</span>
        </NavLink>

        <p className="mt-1 ml-9 text-xs text-gray-400">JS & React Reference</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {/* Home */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `mb-3 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 ${
              isActive
                ? "bg-purple-600 text-white"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`
          }
        >
          <span>🏠</span>
          <span>Home</span>
        </NavLink>

        <div className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
          Topics
        </div>

        {/* Groups */}
        {navGroups.map((group) => (
          <SidebarGroup
            key={group.id}
            group={group}
            isOpen={openGroupId === group.id}
            onToggle={() => handleGroupToggle(group.id)}
          />
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200 px-4 py-3">
        <p className="text-center text-[11px] text-gray-400">
          {navGroups.reduce((total, group) => total + group.items.length, 0)}{" "}
          topics covered
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
