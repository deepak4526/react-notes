import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

// JavaScript pages
import {
  VariablesPage,
  DataTypesPage,
  ArrowFunctionsPage,
  DestructuringPage,
  SpreadRestPage,
  ArrayMethodsPage,
  ClosuresPage,
  PromisesPage,
  ModulesPage,
  ThisKeywordPage,
  AsyncAwaitPage,
  ErrorHandlingPage,
  HoistingPage,
  ScopePage,
  PrototypesPage,
  IntroJSPage,
  ObjectNotesPage,
  LoopsPage,
  Performance1,
  Performance2,
} from "../pages";

// React core pages
import {
  IntroductionPage,
  JSXPage,
  ComponentsPage,
  PropsPage,
  EventsPage,
  ConditionalRenderingPage,
  ListsKeysPage,
  FormsPage,
  RoutingPage,
  ReactMemoPage,
  LazySuspensePage,
  ErrorBoundariesPage,
  PortalsPage,
  HOCPage,
  UseStatePage,
  UseEffectPage,
  UseRefPage,
  UseContextPage,
  UseReducerPage,
  UseMemoPage,
  UseCallbackPage,
  CustomHooksPage,
} from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* ── JavaScript ── */}
      <Route path="/js/intro-js" element={<IntroJSPage />} />
      <Route path="/js/variables" element={<VariablesPage />} />
      <Route path="/js/data-types" element={<DataTypesPage />} />
      <Route path="/js/arrow-functions" element={<ArrowFunctionsPage />} />
      <Route path="/js/destructuring" element={<DestructuringPage />} />
      <Route path="/js/spread-rest" element={<SpreadRestPage />} />
      <Route path="/js/array-methods" element={<ArrayMethodsPage />} />
      <Route path="/js/objects" element={<ObjectNotesPage />} />
      <Route path="/js/loops-iterations" element={<LoopsPage />} />
      <Route
        path="/js/performance-time-complexity"
        element={<Performance1 />}
      />
      <Route
        path="/js/performance-time-complexity-part-2"
        element={<Performance2 />}
      />
      <Route path="/js/closures" element={<ClosuresPage />} />
      <Route path="/js/promises" element={<PromisesPage />} />
      <Route path="/js/modules" element={<ModulesPage />} />
      <Route path="/js/this-keyword" element={<ThisKeywordPage />} />
      <Route path="/js/async-await" element={<AsyncAwaitPage />} />
      <Route path="/js/error-handling" element={<ErrorHandlingPage />} />
      <Route path="/js/hoisting" element={<HoistingPage />} />
      <Route path="/js/scope" element={<ScopePage />} />
      <Route path="/js/prototypes" element={<PrototypesPage />} />

      {/* ── React Core ── */}
      <Route path="/react/introduction" element={<IntroductionPage />} />
      <Route path="/react/jsx" element={<JSXPage />} />
      <Route path="/react/components" element={<ComponentsPage />} />
      <Route path="/react/props" element={<PropsPage />} />
      <Route path="/react/events" element={<EventsPage />} />
      <Route
        path="/react/conditional-rendering"
        element={<ConditionalRenderingPage />}
      />
      <Route path="/react/lists-keys" element={<ListsKeysPage />} />
      <Route path="/react/forms" element={<FormsPage />} />
      <Route path="/react/routing" element={<RoutingPage />} />

      {/* ── Advanced React ── */}
      <Route path="/react/memo" element={<ReactMemoPage />} />
      <Route path="/react/lazy-suspense" element={<LazySuspensePage />} />
      <Route path="/react/error-boundaries" element={<ErrorBoundariesPage />} />
      <Route path="/react/portals" element={<PortalsPage />} />
      <Route path="/react/hoc" element={<HOCPage />} />

      {/* ── React Hooks ── */}
      <Route path="/react/hooks/use-state" element={<UseStatePage />} />
      <Route path="/react/hooks/use-effect" element={<UseEffectPage />} />
      <Route path="/react/hooks/use-ref" element={<UseRefPage />} />
      <Route path="/react/hooks/use-context" element={<UseContextPage />} />
      <Route path="/react/hooks/use-reducer" element={<UseReducerPage />} />
      <Route path="/react/hooks/use-memo" element={<UseMemoPage />} />
      <Route path="/react/hooks/use-callback" element={<UseCallbackPage />} />
      <Route path="/react/hooks/custom-hooks" element={<CustomHooksPage />} />
    </Routes>
  );
};

export default AppRoutes;
