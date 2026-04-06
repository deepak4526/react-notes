import NotePage from "../components/notes/NotePage";
import { variablesNotes } from "../features/notes/data/javascript";
import { dataTypesNotes } from "../features/notes/data/javascript";
import { arrowFunctionsNotes } from "../features/notes/data/javascript";
import { destructuringNotes } from "../features/notes/data/javascript";
import { spreadRestNotes } from "../features/notes/data/javascript";
import { arrayMethodsNotes } from "../features/notes/data/javascript";
import { closuresNotes } from "../features/notes/data/javascript";
import { promisesNotes } from "../features/notes/data/javascript";
import { modulesNotes } from "../features/notes/data/javascript";
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
  useStateNotes,
  useEffectNotes,
  useRefNotes,
  useContextNotes,
  useReducerNotes,
  useMemoNotes,
  useCallbackNotes,
  customHooksNotes,
} from "../features/notes/data/react";

// ── JavaScript Pages ──────────────────────────────────────────────
export const VariablesPage = () => <NotePage data={variablesNotes} />;
export const DataTypesPage = () => <NotePage data={dataTypesNotes} />;
export const ArrowFunctionsPage = () => <NotePage data={arrowFunctionsNotes} />;
export const DestructuringPage = () => <NotePage data={destructuringNotes} />;
export const SpreadRestPage = () => <NotePage data={spreadRestNotes} />;
export const ArrayMethodsPage = () => <NotePage data={arrayMethodsNotes} />;
export const ClosuresPage = () => <NotePage data={closuresNotes} />;
export const PromisesPage = () => <NotePage data={promisesNotes} />;
export const ModulesPage = () => <NotePage data={modulesNotes} />;

// ── React Core Pages ──────────────────────────────────────────────
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

// ── Hooks Pages ───────────────────────────────────────────────────
export const UseStatePage = () => <NotePage data={useStateNotes} />;
export const UseEffectPage = () => <NotePage data={useEffectNotes} />;
export const UseRefPage = () => <NotePage data={useRefNotes} />;
export const UseContextPage = () => <NotePage data={useContextNotes} />;
export const UseReducerPage = () => <NotePage data={useReducerNotes} />;
export const UseMemoPage = () => <NotePage data={useMemoNotes} />;
export const UseCallbackPage = () => <NotePage data={useCallbackNotes} />;
export const CustomHooksPage = () => <NotePage data={customHooksNotes} />;
