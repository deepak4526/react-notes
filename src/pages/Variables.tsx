import { variablesNotes } from "../features/notes/data/NotesData";

const Variables = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{variablesNotes.title}</h1>
        <p className="text-gray-500">{variablesNotes.description}</p>
      </div>

      {/* Sections */}
      {variablesNotes.sections.map((section) => (
        <div
          key={section.id}
          id={section.id}
          className="border rounded-lg p-5 shadow-sm bg-white"
        >
          <h2 className="text-xl font-semibold mb-3 text-purple-600">
            {section.title}
          </h2>

          <pre className="whitespace-pre-wrap text-sm text-gray-700 bg-gray-50 p-4 rounded">
            {section.content}
          </pre>
        </div>
      ))}
    </div>
  );
};

export default Variables;
