export interface NavItem {
  label: string;
  path: string;
  emoji: string;
}

export interface NavGroup {
  id: string;
  label: string;
  emoji: string;

  home: {
    badge: string;
    badgeColor: string;
    title: string;
    subtitle: string;
    itemColor: string;
  };

  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    id: "javascript",
    label: "JavaScript",
    emoji: "🟡",

    home: {
      badge: "JavaScript",
      badgeColor: "bg-yellow-100 text-yellow-700",
      title: "JavaScript Fundamentals",
      subtitle: "Core concepts every JS developer must know",
      itemColor: "bg-green-100",
    },

    items: [
      { emoji: "🙋", label: "Intro", path: "/js/intro-js" },
      { emoji: "📦", label: "Variables", path: "/js/variables" },
      { emoji: "🔤", label: "Data Types", path: "/js/data-types" },
      {
        emoji: "➡️",
        label: "Arrow Functions",
        path: "/js/arrow-functions",
      },
      { emoji: "🔑", label: "this Keyword", path: "/js/this-keyword" },
      { emoji: "⬆️", label: "Hoisting", path: "/js/hoisting" },
      { emoji: "🔭", label: "Scope & Context", path: "/js/scope" },
      { emoji: "🔒", label: "Closures", path: "/js/closures" },
      {
        emoji: "📦",
        label: "Destructuring",
        path: "/js/destructuring",
      },
      { emoji: "🌊", label: "Spread & Rest", path: "/js/spread-rest" },
      {
        emoji: "🗃️",
        label: "Array Methods",
        path: "/js/array-methods",
      },
      { emoji: "🗂️", label: "Objects", path: "/js/objects" },
      { emoji: "🔗", label: "Prototypes", path: "/js/prototypes" },
      {
        emoji: "♻️",
        label: "Loops And Iterations",
        path: "/js/loops-iterations",
      },
      {
        emoji: "📈",
        label: "Performance & Time Complexity: Core Concepts",
        path: "/js/performance-time-complexity",
      },
      {
        emoji: "⚡",
        label: "Performance & Time Complexity: JavaScript & Interview Patterns",
        path: "/js/performance-time-complexity-part-2",
      },
      { emoji: "🤝", label: "Promises", path: "/js/promises" },
      {
        emoji: "⏳",
        label: "Async / Await",
        path: "/js/async-await",
      },
      {
        emoji: "🚨",
        label: "Error Handling",
        path: "/js/error-handling",
      },
      { emoji: "📂", label: "Modules", path: "/js/modules" },
      {
        emoji: "🌱",
        label: "Practice Questions: Easy",
        path: "/js/practice-easy",
      },
      {
        emoji: "🧩",
        label: "Practice Questions: Medium",
        path: "/js/practice-medium",
      },
      {
        emoji: "🔥",
        label: "Practice Questions: Hard",
        path: "/js/practice-hard",
      },
    ],
  },

  {
    id: "react-core",
    label: "React — Core",
    emoji: "⚛️",

    home: {
      badge: "React",
      badgeColor: "bg-blue-100 text-blue-700",
      title: "React Core",
      subtitle: "Essential building blocks of every React app",
      itemColor: "bg-blue-100",
    },

    items: [
      {
        emoji: "🌟",
        label: "Introduction",
        path: "/react/introduction",
      },
      { emoji: "🏗️", label: "JSX", path: "/react/jsx" },
      {
        emoji: "🧩",
        label: "Components",
        path: "/react/components",
      },
      { emoji: "📨", label: "Props", path: "/react/props" },
      { emoji: "🖱️", label: "Events", path: "/react/events" },
      {
        emoji: "❓",
        label: "Conditional Rendering",
        path: "/react/conditional-rendering",
      },
      {
        emoji: "📋",
        label: "Lists & Keys",
        path: "/react/lists-keys",
      },
      { emoji: "📝", label: "Forms", path: "/react/forms" },
      { emoji: "🗺️", label: "Routing", path: "/react/routing" },
    ],
  },

  {
    id: "react-advanced",
    label: "React — Advanced",
    emoji: "🚀",

    home: {
      badge: "Advanced",
      badgeColor: "bg-rose-100 text-rose-700",
      title: "Advanced React",
      subtitle: "Performance, patterns, and architectural tools",
      itemColor: "bg-rose-100",
    },

    items: [
      { emoji: "💾", label: "React.memo", path: "/react/memo" },
      {
        emoji: "✂️",
        label: "Lazy & Suspense",
        path: "/react/lazy-suspense",
      },
      {
        emoji: "🛡️",
        label: "Error Boundaries",
        path: "/react/error-boundaries",
      },
      { emoji: "🌀", label: "Portals", path: "/react/portals" },
      { emoji: "🎁", label: "HOC", path: "/react/hoc" },
    ],
  },

  {
    id: "react-hooks",
    label: "React — Hooks",
    emoji: "🪝",

    home: {
      badge: "Hooks",
      badgeColor: "bg-purple-100 text-purple-700",
      title: "React Hooks",
      subtitle: "Built-in hooks for state, effects, and more",
      itemColor: "bg-purple-100",
    },

    items: [
      {
        emoji: "🔢",
        label: "useState",
        path: "/react/hooks/use-state",
      },
      {
        emoji: "⚡",
        label: "useEffect",
        path: "/react/hooks/use-effect",
      },
      {
        emoji: "📌",
        label: "useRef",
        path: "/react/hooks/use-ref",
      },
      {
        emoji: "🌍",
        label: "useContext",
        path: "/react/hooks/use-context",
      },
      {
        emoji: "🔄",
        label: "useReducer",
        path: "/react/hooks/use-reducer",
      },
      {
        emoji: "🧠",
        label: "useMemo",
        path: "/react/hooks/use-memo",
      },
      {
        emoji: "📞",
        label: "useCallback",
        path: "/react/hooks/use-callback",
      },
      {
        emoji: "🪝",
        label: "Custom Hooks",
        path: "/react/hooks/custom-hooks",
      },
    ],
  },
];
