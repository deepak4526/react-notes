import type { NotePageData } from "../../../../types/note";

export const introJS: NotePageData = {
  title: "Js Introduction",
  description:
    "JavaScript is high level, interpreted, dynamically typed(means type of a variable is determined at runtime, not at compile time) single threaded (means single process at one time) programming language.",
  sections: [
    {
      id: "used_for",
      title: "JS is used to:",
      blocks: [
        {
          type: "list",
          items: [
            "Make interactive & dynamic web pages",
            "Build servers, APIs, tools(Node.Js)",
          ],
        },
      ],
    },
  ],
};
