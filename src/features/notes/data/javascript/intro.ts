import type { NotePageData } from "../../../../types/note";

export const introJS: NotePageData = {
  title: "Js Introduction",
  description:
    "JavaScript is high level, interpreted(means code is run line-by-line rather than being pre-compiled into machine code), dynamically typed(means type of a variable is determined at runtime, not at compile time), single threaded (means single process at one time) programming language.",
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
    {
      id: "key_features",
      title: "Key Features",
      blocks: [
        {
          type: "list",
          items: [
            "Client-Side: Runs directly on client's web browser, allowing immediate interaction without page reloads",
            "Server-Side: With the advent of environments like Node.js, JavaScript can also be used for backend development to manage databases and server logic",
          ],
        },
      ],
    },
  ],
};
