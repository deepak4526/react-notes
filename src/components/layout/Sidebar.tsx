import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

// ─── Types ────────────────────────────────────────────────────────
interface NavItem {
  label: string;
  path: string;
}

interface NavGroup {
  label: string;
  emoji: string;
  basePath: string;
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
    label: "JavaScript",
    emoji: "🟡",
    basePath: "/js",
    items: [
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
      { label: "Prototypes", path: "/js/prototypes" },
      { label: "Promises", path: "/js/promises" },
      { label: "Async / Await", path: "/js/async-await" },
      { label: "Error Handling", path: "/js/error-handling" },
      { label: "Modules", path: "/js/modules" },
    ],
  },
  {
    label: "React — Core",
    emoji: "⚛️",
    basePath: "/react",
    items: [
      { label: "Introduction", path: "/react/introduction" },
      { label: "JSX", path: "/react/jsx" },
      { label: "Components", path: "/react/components" },
      { label: "Props", path: "/react/props" },
      { label: "Events", path: "/react/events" },
      { label: "Conditional Rendering", path: "/react/conditional-rendering" },
      { label: "Lists & Keys", path: "/react/lists-keys" },
      { label: "Forms", path: "/react/forms" },
      { label: "Routing", path: "/react/routing" },
    ],
  },
  {
    label: "React — Advanced",
    emoji: "🚀",
    basePath: "/react",
    items: [
      { label: "React.memo", path: "/react/memo" },
      { label: "Lazy & Suspense", path: "/react/lazy-suspense" },
      { label: "Error Boundaries", path: "/react/error-boundaries" },
      { label: "Portals", path: "/react/portals" },
      { label: "HOC", path: "/react/hoc" },
    ],
  },
  {
    label: "React — Hooks",
    emoji: "🪝",
    basePath: "/react/hooks",
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
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
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
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
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

      {/* Items */}
      {isOpen && (
        <ul className="mt-1 ml-3 border-l border-gray-200 pl-3 space-y-0.5">
          {group.items.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-left block px-4 py-1.5 rounded-md text-sm transition-colors duration-150 ${
                    isActive
                      ? "bg-purple-600 text-white font-medium"
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

  const activeGroupLabel = navGroups.find((group) =>
    group.items.some((item) => item.path === location.pathname),
  )?.label;

  const [openGroup, setOpenGroup] = useState<string | null>(
    activeGroupLabel ?? "JavaScript",
  );

  useEffect(() => {
    setOpenGroup(activeGroupLabel ?? "JavaScript");
  }, [activeGroupLabel]);

  return (
    <aside className="w-64 border-r border-gray-200 bg-gray-50 flex flex-col h-full overflow-y-auto">
      {/* Logo / Brand */}
      <div className="px-4 py-5 border-b border-gray-200">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-purple-600 rounded-md flex items-center justify-center">
            <span className="text-white text-xs font-bold">P</span>
          </div>
          <span className="font-bold text-gray-900 text-base">DevNotes</span>
        </NavLink>
        <p className="text-xs text-gray-400 mt-1 ml-9">JS & React Reference</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {/* Home */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 mb-3 ${
              isActive
                ? "bg-purple-600 text-white"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`
          }
        >
          <span>🏠</span>
          <span>Home</span>
        </NavLink>

        <div className="text-[10px] uppercase tracking-widest text-gray-400 px-3 pb-1 font-semibold">
          Topics
        </div>

        {navGroups.map((group) => (
          <SidebarGroup
            key={group.label}
            group={group}
            isOpen={openGroup === group.label}
            onToggle={() =>
              setOpenGroup((current) =>
                current === group.label ? null : group.label,
              )
            }
          />
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-200">
        <p className="text-[11px] text-gray-400 text-center">
          {navGroups.reduce((acc, g) => acc + g.items.length, 0)} topics covered
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
