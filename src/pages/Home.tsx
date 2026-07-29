import { Link } from "react-router-dom";

// ─── Topic Card ───────────────────────────────────────────────────
interface TopicCardProps {
  emoji: string;
  label: string;
  path: string;
  color: string;
}

function TopicCard({ emoji, label, path, color }: TopicCardProps) {
  return (
    <Link
      to={path}
      className={`flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group`}
    >
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${color}`}
      >
        {emoji}
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors text-left">
        {label}
      </span>
      <svg
        className="w-4 h-4 text-gray-300 group-hover:text-purple-400 ml-auto transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  );
}

// ─── Section ──────────────────────────────────────────────────────
interface SectionProps {
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  topics: TopicCardProps[];
}

function Section({ title, subtitle, badge, badgeColor, topics }: SectionProps) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`text-xs font-bold px-2 py-0.5 rounded-full ${badgeColor}`}
            >
              {badge}
            </span>
          </div>
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <span className="text-2xl">{topics[0]?.emoji}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {topics.map((t) => (
          <TopicCard key={t.path} {...t} />
        ))}
      </div>
    </div>
  );
}

// ─── Home ─────────────────────────────────────────────────────────
const Home = () => {
  return (
    <div className="max-w-5xl mx-auto pb-16">
      {/* Hero */}
      <div className="text-center py-12 px-4">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-purple-1000 rounded-full animate-pulse" />
          JavaScript & React Reference
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Developer Notes 📘
        </h1>
        <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
          A structured, hands-on reference for JavaScript fundamentals and React
          patterns. Pick a topic from the sidebar or below to get started.
        </p>
        <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-400">
          <span>🟡 20 JS Topics</span>
          <span className="w-px h-4 bg-gray-200" />
          <span>⚛️ 9 React Core</span>
          <span className="w-px h-4 bg-gray-200" />
          <span>🚀 5 Advanced</span>
          <span className="w-px h-4 bg-gray-200" />
          <span>🪝 8 Hooks</span>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-6 px-2">
        <Section
          badge="JavaScript"
          badgeColor="bg-yellow-100 text-yellow-700"
          title="JavaScript Fundamentals"
          subtitle="Core concepts every JS developer must know"
          topics={[
            {
              emoji: "🙋",
              label: "Intro",
              path: "/js/intro-js",
              color: "bg-green-100",
            },
            {
              emoji: "📦",
              label: "Variables",
              path: "/js/variables",
              color: "bg-green-100",
            },
            {
              emoji: "🔤",
              label: "Data Types",
              path: "/js/data-types",
              color: "bg-green-100",
            },
            {
              emoji: "➡️",
              label: "Arrow Functions",
              path: "/js/arrow-functions",
              color: "bg-green-100",
            },
            {
              emoji: "🔑",
              label: "this Keyword",
              path: "/js/this-keyword",
              color: "bg-green-100",
            },
            {
              emoji: "⬆️",
              label: "Hoisting",
              path: "/js/hoisting",
              color: "bg-green-100",
            },
            {
              emoji: "🔭",
              label: "Scope & Context",
              path: "/js/scope",
              color: "bg-green-100",
            },
            {
              emoji: "🔒",
              label: "Closures",
              path: "/js/closures",
              color: "bg-green-100",
            },
            {
              emoji: "📦",
              label: "Destructuring",
              path: "/js/destructuring",
              color: "bg-green-100",
            },
            {
              emoji: "🌊",
              label: "Spread & Rest",
              path: "/js/spread-rest",
              color: "bg-green-100",
            },
            {
              emoji: "🗃️",
              label: "Array Methods",
              path: "/js/array-methods",
              color: "bg-green-100",
            },
            {
              emoji: "🗂️",
              label: "Objects",
              path: "/js/objects",
              color: "bg-green-100",
            },
            {
              emoji: "🔗",
              label: "Prototypes",
              path: "/js/prototypes",
              color: "bg-green-100",
            },
            {
              emoji: "♻️",
              label: "Loops And Iterations",
              path: "/js/loops-iterations",
              color: "bg-green-100",
            },
            {
              emoji: "📈",
              label: "Performance & Time Complexity: Core Concepts",
              path: "/js/performance-time-complexity",
              color: "bg-green-100",
            },
            {
              emoji: "⚡",
              label:
                "Performance & Time Complexity: JavaScript & Interview Patterns",
              path: "/js/performance-time-complexity-part-2",
              color: "bg-green-100",
            },
            {
              emoji: "🤝",
              label: "Promises",
              path: "/js/promises",
              color: "bg-green-100",
            },
            {
              emoji: "⏳",
              label: "Async / Await",
              path: "/js/async-await",
              color: "bg-green-100",
            },
            {
              emoji: "🚨",
              label: "Error Handling",
              path: "/js/error-handling",
              color: "bg-green-100",
            },
            {
              emoji: "📂",
              label: "Modules",
              path: "/js/modules",
              color: "bg-green-100",
            },
            {
              emoji: "🌱",
              label: "Practice Questions: Easy",
              path: "/js/practice-easy",
              color: "bg-green-100",
            },
            {
              emoji: "🧩",
              label: "Practice Questions: Medium",
              path: "/js/practice-medium",
              color: "bg-green-100",
            },
            {
              emoji: "🔥",
              label: "Practice Questions: Hard",
              path: "/js/practice-hard",
              color: "bg-green-100",
            },
          ]}
        />

        <Section
          badge="React"
          badgeColor="bg-blue-100 text-blue-700"
          title="React Core"
          subtitle="Essential building blocks of every React app"
          topics={[
            {
              emoji: "🌟",
              label: "Introduction",
              path: "/react/introduction",
              color: "bg-blue-100",
            },
            {
              emoji: "🏗️",
              label: "JSX",
              path: "/react/jsx",
              color: "bg-blue-100",
            },
            {
              emoji: "🧩",
              label: "Components",
              path: "/react/components",
              color: "bg-blue-100",
            },
            {
              emoji: "📨",
              label: "Props",
              path: "/react/props",
              color: "bg-blue-100",
            },
            {
              emoji: "🖱️",
              label: "Events",
              path: "/react/events",
              color: "bg-blue-100",
            },
            {
              emoji: "❓",
              label: "Conditional Rendering",
              path: "/react/conditional-rendering",
              color: "bg-blue-100",
            },
            {
              emoji: "📋",
              label: "Lists & Keys",
              path: "/react/lists-keys",
              color: "bg-blue-100",
            },
            {
              emoji: "📝",
              label: "Forms",
              path: "/react/forms",
              color: "bg-blue-100",
            },
            {
              emoji: "🗺️",
              label: "Routing",
              path: "/react/routing",
              color: "bg-blue-100",
            },
          ]}
        />

        <Section
          badge="Advanced"
          badgeColor="bg-rose-100 text-rose-700"
          title="Advanced React"
          subtitle="Performance, patterns, and architectural tools"
          topics={[
            {
              emoji: "💾",
              label: "React.memo",
              path: "/react/memo",
              color: "bg-rose-100",
            },
            {
              emoji: "✂️",
              label: "Lazy & Suspense",
              path: "/react/lazy-suspense",
              color: "bg-rose-100",
            },
            {
              emoji: "🛡️",
              label: "Error Boundaries",
              path: "/react/error-boundaries",
              color: "bg-rose-100",
            },
            {
              emoji: "🌀",
              label: "Portals",
              path: "/react/portals",
              color: "bg-rose-100",
            },
            {
              emoji: "🎁",
              label: "HOC",
              path: "/react/hoc",
              color: "bg-rose-100",
            },
          ]}
        />

        <Section
          badge="Hooks"
          badgeColor="bg-purple-100 text-purple-700"
          title="React Hooks"
          subtitle="Built-in hooks for state, effects, and more"
          topics={[
            {
              emoji: "🔢",
              label: "useState",
              path: "/react/hooks/use-state",
              color: "bg-purple-100",
            },
            {
              emoji: "⚡",
              label: "useEffect",
              path: "/react/hooks/use-effect",
              color: "bg-purple-100",
            },
            {
              emoji: "📌",
              label: "useRef",
              path: "/react/hooks/use-ref",
              color: "bg-purple-100",
            },
            {
              emoji: "🌍",
              label: "useContext",
              path: "/react/hooks/use-context",
              color: "bg-purple-100",
            },
            {
              emoji: "🔄",
              label: "useReducer",
              path: "/react/hooks/use-reducer",
              color: "bg-purple-100",
            },
            {
              emoji: "🧠",
              label: "useMemo",
              path: "/react/hooks/use-memo",
              color: "bg-purple-100",
            },
            {
              emoji: "📞",
              label: "useCallback",
              path: "/react/hooks/use-callback",
              color: "bg-purple-100",
            },
            {
              emoji: "🪝",
              label: "Custom Hooks",
              path: "/react/hooks/custom-hooks",
              color: "bg-purple-100",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Home;
