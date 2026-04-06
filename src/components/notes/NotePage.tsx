import type { ContentBlock, NotePageData } from "../../types/note";

// ─── Styles per highlight variant ────────────────────────────────
const highlightStyles: Record<string, string> = {
  info: "border-blue-400 bg-blue-50 text-blue-900",
  warning: "border-red-400 bg-red-50 text-red-900",
  tip: "border-green-500 bg-green-50 text-green-900",
  important: "border-yellow-400 bg-yellow-50 text-yellow-900",
};
const highlightIcons: Record<string, string> = {
  info: "ℹ️",
  warning: "⚠️",
  tip: "💡",
  important: "🔑",
};

// ─── Block Renderer ───────────────────────────────────────────────
const renderBlock = (block: ContentBlock, index: number) => {
  switch (block.type) {
    case "text":
      return (
        <p key={index} className="text-gray-700 text-sm leading-relaxed">
          {block.text}
        </p>
      );

    case "code":
      return (
        <div key={index} className="rounded-lg overflow-hidden border border-gray-700">
          {block.language && (
            <div className="bg-gray-800 text-gray-400 text-xs px-4 py-1.5 font-mono tracking-wide uppercase">
              {block.language}
            </div>
          )}
          <pre className="bg-gray-950 text-green-300 text-sm p-4 overflow-x-auto font-mono leading-relaxed">
            {block.code}
          </pre>
        </div>
      );

    case "highlight":
      return (
        <div
          key={index}
          className={`border-l-4 p-3 rounded-r-lg text-sm font-medium ${highlightStyles[block.variant]}`}
        >
          <span className="mr-2">{highlightIcons[block.variant]}</span>
          {block.text}
        </div>
      );

    case "list":
      return (
        <ul key={index} className="space-y-1.5 list-none">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-purple-500 font-bold mt-0.5 shrink-0">▸</span>
              {item}
            </li>
          ))}
        </ul>
      );

    default:
      return null;
  }
};

// ─── NotePage ─────────────────────────────────────────────────────
type Props = { data: NotePageData };

const NotePage = ({ data }: Props) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">{data.title}</h1>
        <p className="text-gray-500 text-base leading-relaxed">{data.description}</p>
      </div>

      {/* Sections */}
      {data.sections.map((section) => (
        <div
          key={section.id}
          id={section.id}
          className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white space-y-4"
        >
          <h2 className="text-lg font-semibold text-purple-700 border-b border-purple-100 pb-2">
            {section.title}
          </h2>
          {section.blocks.map((block, index) => renderBlock(block, index))}
        </div>
      ))}
    </div>
  );
};

export default NotePage;
