import NotePage from "../components/notes/NotePage";

// ── JavaScript imports ─────────────────────────────────────────────
import {
  variablesNotes,
  dataTypesNotes,
  arrowFunctionsNotes,
  destructuringNotes,
  spreadRestNotes,
  arrayMethodsNotes,
  closuresNotes,
  promisesNotes,
  modulesNotes,
  thisKeywordNotes,
  asyncAwaitNotes,
  errorHandlingNotes,
  hoistingNotes,
  scopeNotes,
  prototypesNotes,
  introJS,
} from "../features/notes/data/javascript";

// ── React core imports ─────────────────────────────────────────────
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

// ── JavaScript Pages ───────────────────────────────────────────────
export const VariablesPage = () => <NotePage data={variablesNotes} />;
export const DataTypesPage = () => <NotePage data={dataTypesNotes} />;
export const ArrowFunctionsPage = () => <NotePage data={arrowFunctionsNotes} />;
export const DestructuringPage = () => <NotePage data={destructuringNotes} />;
export const SpreadRestPage = () => <NotePage data={spreadRestNotes} />;
export const ArrayMethodsPage = () => <NotePage data={arrayMethodsNotes} />;
export const IntroJSPage = () => <NotePage data={introJS} />;
export const ClosuresPage = () => <NotePage data={closuresNotes} />;
export const PromisesPage = () => <NotePage data={promisesNotes} />;
export const ModulesPage = () => <NotePage data={modulesNotes} />;
export const ThisKeywordPage = () => <NotePage data={thisKeywordNotes} />;
export const AsyncAwaitPage = () => <NotePage data={asyncAwaitNotes} />;
export const ErrorHandlingPage = () => <NotePage data={errorHandlingNotes} />;
export const HoistingPage = () => <NotePage data={hoistingNotes} />;
export const ScopePage = () => <NotePage data={scopeNotes} />;
export const PrototypesPage = () => <NotePage data={prototypesNotes} />;

// ── React Core Pages ───────────────────────────────────────────────
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

// ── Advanced React Pages ───────────────────────────────────────────
export const ReactMemoPage = () => <NotePage data={reactMemoNotes} />;
export const LazySuspensePage = () => <NotePage data={lazySuspenseNotes} />;
export const ErrorBoundariesPage = () => (
  <NotePage data={errorBoundariesNotes} />
);
export const PortalsPage = () => <NotePage data={portalsNotes} />;
export const HOCPage = () => <NotePage data={hocNotes} />;

// ── Hooks Pages ────────────────────────────────────────────────────
export const UseStatePage = () => <NotePage data={useStateNotes} />;
export const UseEffectPage = () => <NotePage data={useEffectNotes} />;
export const UseRefPage = () => <NotePage data={useRefNotes} />;
export const UseContextPage = () => <NotePage data={useContextNotes} />;
export const UseReducerPage = () => <NotePage data={useReducerNotes} />;
export const UseMemoPage = () => <NotePage data={useMemoNotes} />;
export const UseCallbackPage = () => <NotePage data={useCallbackNotes} />;
export const CustomHooksPage = () => <NotePage data={customHooksNotes} />;
