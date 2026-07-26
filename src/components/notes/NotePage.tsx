import { useState } from "react";
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

// ─── Code Accordion ──────────────────────────────────────────────
type CodeAccordionProps = {
  block: Extract<ContentBlock, { type: "code" }>;
};

const CodeAccordion = ({ block }: CodeAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg overflow-hidden border border-gray-700">
      {/* Accordion Header */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          w-full
          flex
          items-center
          justify-between
          gap-4
          bg-gray-900
          text-left
          px-4
          py-3
          hover:bg-gray-800
          transition-colors
        "
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-xs font-mono tracking-wide uppercase">
            {block.language || "javascript"}
          </span>

          <span className="text-gray-300 text-sm">
            {isOpen ? "Hide example" : "Show example"}
          </span>
        </div>

        <span
          className={`
            text-gray-400
            text-sm
            transition-transform
            duration-200
            ${isOpen ? "rotate-180" : ""}
          `}
        >
          ▼
        </span>
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div>
          <SyntaxHighlighter
            language={block.language || "javascript"}
            style={dracula}
            showLineNumbers
            wrapLines
            customStyle={{
              margin: 0,
              borderRadius: 0,
            }}
          >
            {block.code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};

// ─── Block Renderer ──────────────────────────────────────────────
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
        <strong key={index} className="text-gray-900 flex flex-col gap-3">
          <hr />
          {block.text}
        </strong>
      );

    case "code":
      return <CodeAccordion key={index} block={block} />;

    case "highlight":
      return (
        <div
          key={index}
          className={`border-l-4 p-3 rounded-r-lg text-sm font-medium ${
            highlightStyles[block.variant]
          }`}
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
              <span className="text-purple-500 font-bold shrink-0">▸</span>

              {item}
            </li>
          ))}
        </ul>
      );

    default:
      return null;
  }
};

// ─── NotePage ────────────────────────────────────────────────────
type Props = {
  data: NotePageData;
};

const NotePage = ({ data }: Props) => {
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
          className="
            border
            border-gray-200
            rounded-xl
            p-6
            shadow-sm
            bg-white
            space-y-4
            text-left
          "
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
