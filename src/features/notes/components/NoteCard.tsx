import type { Note } from "../../../types/note";

type Props = {
  note: Note;
};
const NoteCard = ({ note }: Props) => {
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold">{note.title}</h2>
      <p className="text-sm text-gray-500">{note.description}</p>
    </div>
  );
};
export default NoteCard;
