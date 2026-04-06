import { notes } from "../data/NotesData";
import NoteCard from "./NoteCard";

const NotesList = () => {
  return (
    <div className="grid gap-4">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};
export default NotesList;
