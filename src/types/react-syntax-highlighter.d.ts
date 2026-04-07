declare module "react-syntax-highlighter" {
  import type { JSXElementConstructor } from "react";
  export interface SyntaxHighlighterProps {
    language?: string;
    style?: any;
    showLineNumbers?: boolean;
    wrapLines?: boolean;
    customStyle?: React.CSSProperties;
    children?: React.ReactNode;
  }
  export type SyntaxHighlighterComponent =
    JSXElementConstructor<SyntaxHighlighterProps> & {
      registerLanguage: (name: string, language: unknown) => void;
    };
  export const PrismLight: SyntaxHighlighterComponent;
  export default PrismLight;
}

declare module "react-syntax-highlighter/dist/esm/languages/prism/javascript" {
  const js: unknown;
  export default js;
}

declare module "react-syntax-highlighter/dist/esm/styles/prism" {
  export const dracula: any;
}
