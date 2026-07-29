import { lazy } from "react";
import type { NotePageData } from "../types/note";

type NoteLoader = () => Promise<NotePageData>;

const lazyNotePage = (loader: NoteLoader) =>
  lazy(async () => {
    const [{ default: NotePage }, data] = await Promise.all([
      import("../components/notes/NotePage"),
      loader(),
    ]);

    return {
      default: () => <NotePage data={data} />,
    };
  });

export default lazyNotePage;
