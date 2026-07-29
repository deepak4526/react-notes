export interface Note {
  id: number | string;
  title: string;
  description: string;
  category: string;
}

// ─── Content Block Types ─────────────────────────────────────────
export type HighlightVariant = "info" | "warning" | "tip" | "important";

export type ContentBlock =
  | { type: "title"; text: string }
  | { type: "text"; text: string }
  | { type: "code"; code: string; language?: string }
  | { type: "highlight"; variant: HighlightVariant; text: string }
  | { type: "list"; items: string[] };

// ─── Note Section & Page ─────────────────────────────────────────
export interface NoteSection {
  id: string;
  title: string;
  blocks: ContentBlock[];
}

export interface NotePageData {
  title: string;
  description: string;
  sections: NoteSection[];
}
