import type { ContentBlock, NotePageData } from "../../types/note";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("javascript", js);
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
case "title":
  return (
    <strong key={index} className="text-gray-900 flex flex-col gap-3"><hr/>{block.title}</strong>
  )
    case "code":
      return (
        <div
          key={index}
          className="rounded-lg overflow-hidden border border-gray-700"
        >
          {block.language && (
            <div className="bg-gray-900 text-gray-400 text-xs px-4 py-1.5 font-mono tracking-wide uppercase">
              {block.language}
            </div>
          )}
          <SyntaxHighlighter
            language={block.language || "javascript"}
            style={dracula}
            showLineNumbers
            wrapLines
            customStyle={{ margin: 0 }}
          >
            {block.code}
            {/* <pre>{block.code}</pre> */}
          </SyntaxHighlighter>
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
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-700"
            >
              <span className="text-purple-500 font-bold mt-0.5 shrink-0">
                ▸
              </span>
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
  // console.log("RAW CODE:", data?.sections[0]?.blocks[3]?.code);
  // console.log("STRINGIFIED:", JSON.stringify(data?.sections[0]?.blocks[3]?.code));
  return (
    <div className="mx-auto space-y-8 pb-12 dark">
      {/* Header */}
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">{data.title}</h1>
        <p className="text-gray-500 text-left text-base leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Sections */}
      {data.sections.map((section) => (
        <div
          key={section.id}
          id={section.id}
          className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white space-y-4 text-left"
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
