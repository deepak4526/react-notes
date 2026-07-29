import NotePage from "../components/notes/NotePage";

import {
  introductionNotes,
  jsxNotes,
  componentsNotes,
  propsNotes,
  eventsNotes,
  conditionalRenderingNotes,
  listsKeysNotes,
  formsNotes,
  routingNotes,
  reactMemoNotes,
  lazySuspenseNotes,
  errorBoundariesNotes,
  portalsNotes,
  hocNotes,
  useStateNotes,
  useEffectNotes,
  useRefNotes,
  useContextNotes,
  useReducerNotes,
  useMemoNotes,
  useCallbackNotes,
  customHooksNotes,
} from "../features/notes/data/react";

// ── React Core ────────────────────────────────────────────────────

export const IntroductionPage = () => <NotePage data={introductionNotes} />;

export const JSXPage = () => <NotePage data={jsxNotes} />;

export const ComponentsPage = () => <NotePage data={componentsNotes} />;

export const PropsPage = () => <NotePage data={propsNotes} />;

export const EventsPage = () => <NotePage data={eventsNotes} />;

export const ConditionalRenderingPage = () => (
  <NotePage data={conditionalRenderingNotes} />
);

export const ListsKeysPage = () => <NotePage data={listsKeysNotes} />;

export const FormsPage = () => <NotePage data={formsNotes} />;

export const RoutingPage = () => <NotePage data={routingNotes} />;

// ── React Advanced ────────────────────────────────────────────────

export const ReactMemoPage = () => <NotePage data={reactMemoNotes} />;

export const LazySuspensePage = () => <NotePage data={lazySuspenseNotes} />;

export const ErrorBoundariesPage = () => (
  <NotePage data={errorBoundariesNotes} />
);

export const PortalsPage = () => <NotePage data={portalsNotes} />;

export const HOCPage = () => <NotePage data={hocNotes} />;

// ── React Hooks ───────────────────────────────────────────────────

export const UseStatePage = () => <NotePage data={useStateNotes} />;

export const UseEffectPage = () => <NotePage data={useEffectNotes} />;

export const UseRefPage = () => <NotePage data={useRefNotes} />;

export const UseContextPage = () => <NotePage data={useContextNotes} />;

export const UseReducerPage = () => <NotePage data={useReducerNotes} />;

export const UseMemoPage = () => <NotePage data={useMemoNotes} />;

export const UseCallbackPage = () => <NotePage data={useCallbackNotes} />;

export const CustomHooksPage = () => <NotePage data={customHooksNotes} />;
