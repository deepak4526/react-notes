import { Link } from "react-router-dom";

import {
  navGroups,
  type NavGroup,
  type NavItem,
} from "../components/layout/navigation";

// ─── Topic Card ───────────────────────────────────────────────────

interface TopicCardProps {
  topic: NavItem;
  color: string;
}

function TopicCard({ topic, color }: TopicCardProps) {
  return (
    <Link
      to={topic.path}
      className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
    >
      <div
        className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-lg ${color}`}
      >
        {topic.emoji}
      </div>

      <span className="text-left text-sm font-medium text-gray-700 transition-colors group-hover:text-purple-600">
        {topic.label}
      </span>

      <svg
        className="ml-auto h-4 w-4 text-gray-300 transition-colors group-hover:text-purple-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
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
  group: NavGroup;
}

function Section({ group }: SectionProps) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-bold ${group.home.badgeColor}`}
            >
              {group.home.badge}
            </span>
          </div>

          <h2 className="text-lg font-bold text-gray-900">
            {group.home.title}
          </h2>

          <p className="text-sm text-gray-500">{group.home.subtitle}</p>
        </div>

        <span className="text-2xl" aria-hidden="true">
          {group.emoji}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {group.items.map((topic) => (
          <TopicCard
            key={topic.path}
            topic={topic}
            color={group.home.itemColor}
          />
        ))}
      </div>
    </section>
  );
}

// ─── Home Stats ───────────────────────────────────────────────────

function getGroup(id: string) {
  return navGroups.find((group) => group.id === id);
}

// ─── Home ─────────────────────────────────────────────────────────

const Home = () => {
  const javascript = getGroup("javascript");
  const reactCore = getGroup("react-core");
  const reactAdvanced = getGroup("react-advanced");
  const reactHooks = getGroup("react-hooks");

  return (
    <div className="mx-auto max-w-5xl pb-16">
      {/* ─── Hero ─────────────────────────────────────────────── */}

      <div className="px-4 py-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1.5 text-xs font-semibold text-purple-700">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-600" />
          JavaScript & React Reference
        </div>

        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-gray-900">
          Developer Notes 📘
        </h1>

        <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-500">
          A structured, hands-on reference for JavaScript fundamentals and React
          patterns. Pick a topic from the sidebar or below to get started.
        </p>

        {/* ─── Stats ──────────────────────────────────────────── */}

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400 sm:gap-6">
          <span>🟡 {javascript?.items.length ?? 0} JS Topics</span>

          <span className="hidden h-4 w-px bg-gray-200 sm:block" />

          <span>⚛️ {reactCore?.items.length ?? 0} React Core</span>

          <span className="hidden h-4 w-px bg-gray-200 sm:block" />

          <span>🚀 {reactAdvanced?.items.length ?? 0} Advanced</span>

          <span className="hidden h-4 w-px bg-gray-200 sm:block" />

          <span>🪝 {reactHooks?.items.length ?? 0} Hooks</span>
        </div>
      </div>

      {/* ─── Sections ─────────────────────────────────────────── */}

      <div className="space-y-6 px-2">
        {navGroups.map((group) => (
          <Section key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default Home;
