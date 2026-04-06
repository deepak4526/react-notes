import type { NotePageData } from "../../../../../types/note";

export const useMemoNotes: NotePageData = {
  title: "useMemo Hook",
  description:
    "useMemo memoizes the result of an expensive calculation — it only recomputes when its dependencies change. Use it to prevent unnecessary expensive work on every render.",
  sections: [
    {
      id: "what-is-memoization",
      title: "What is Memoization?",
      blocks: [
        {
          type: "text",
          text: "Memoization is a technique that caches the result of a function call and returns the cached result when the same inputs are passed again — avoiding repeated expensive computations.",
        },
        {
          type: "code",
          language: "jsx",
          code: `import { useMemo } from "react";

// Without useMemo — recalculates on EVERY render
function ProductList({ products, filterText }) {
  // This runs even if filterText hasn't changed!
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return <ul>{filtered.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}

// With useMemo — only recalculates when deps change
function ProductList({ products, filterText }) {
  const filtered = useMemo(
    () => products.filter(p =>
      p.name.toLowerCase().includes(filterText.toLowerCase())
    ),
    [products, filterText] // ← only re-run when these change
  );

  return <ul>{filtered.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "useMemo returns a CACHED VALUE. useCallback (next topic) returns a CACHED FUNCTION. Both help prevent unnecessary work on re-renders.",
        },
      ],
    },
    {
      id: "when-to-use",
      title: "When to Use & When NOT to Use",
      blocks: [
        {
          type: "list",
          items: [
            "✅ Use when: filtering/sorting large lists (100s of items)",
            "✅ Use when: expensive calculations (complex math, parsing)",
            "✅ Use when: reference stability is needed (object/array passed to a child with React.memo)",
            "❌ Do NOT use for simple primitives — overhead costs more than it saves",
            "❌ Do NOT use as default — only when you measure a performance problem",
          ],
        },
        {
          type: "code",
          language: "jsx",
          code: `// ❌ Over-optimization — useMemo is overkill here
const fullName = useMemo(
  () => \`\${firstName} \${lastName}\`,
  [firstName, lastName]
);
// Just do: const fullName = \`\${firstName} \${lastName}\`;

// ✅ Justified — sorting a huge list
const sortedUsers = useMemo(
  () => [...users].sort((a, b) => a.name.localeCompare(b.name)),
  [users]
);

// ✅ Justified — reference stability for React.memo child
const config = useMemo(
  () => ({ color: theme, size: "lg" }),
  [theme]
);
// Without useMemo, {} creates a NEW object every render
// causing the child to re-render even if values are same`,
        },
      ],
    },
    {
      id: "expensive-example",
      title: "Real Example — Expensive Computation",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `function StatsPanel({ data, selectedYear }) {
  // Expensive — runs across thousands of records
  const stats = useMemo(() => {
    const yearData = data.filter(d => d.year === selectedYear);
    return {
      total:   yearData.reduce((s, d) => s + d.revenue, 0),
      average: yearData.reduce((s, d) => s + d.revenue, 0) / yearData.length,
      max:     Math.max(...yearData.map(d => d.revenue)),
      min:     Math.min(...yearData.map(d => d.revenue)),
    };
  }, [data, selectedYear]); // ← cached until data or year changes

  return (
    <div>
      <p>Total: {stats.total}</p>
      <p>Average: {stats.average}</p>
    </div>
  );
}`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Measure first, then optimize. Use React DevTools Profiler to identify which components are slow before reaching for useMemo.",
        },
      ],
    },
  ],
};
