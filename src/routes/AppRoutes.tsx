import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";

// ── JavaScript Pages ──────────────────────────────────────────────

const IntroJSPage = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.IntroJSPage,
  })),
);

const VariablesPage = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.VariablesPage,
  })),
);

const DataTypesPage = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.DataTypesPage,
  })),
);

const ArrowFunctionsPage = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.ArrowFunctionsPage,
  })),
);

const DestructuringPage = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.DestructuringPage,
  })),
);

const SpreadRestPage = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.SpreadRestPage,
  })),
);

const ArrayMethodsPage = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.ArrayMethodsPage,
  })),
);

const ObjectNotesPage = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.ObjectNotesPage,
  })),
);

const LoopsPage = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.LoopsPage,
  })),
);

const Performance1 = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.Performance1,
  })),
);

const Performance2 = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.Performance2,
  })),
);

const ClosuresPage = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.ClosuresPage,
  })),
);

const PromisesPage = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.PromisesPage,
  })),
);

const ModulesPage = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.ModulesPage,
  })),
);

const ThisKeywordPage = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.ThisKeywordPage,
  })),
);

const AsyncAwaitPage = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.AsyncAwaitPage,
  })),
);

const ErrorHandlingPage = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.ErrorHandlingPage,
  })),
);

const HoistingPage = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.HoistingPage,
  })),
);

const ScopePage = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.ScopePage,
  })),
);

const PrototypesPage = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.PrototypesPage,
  })),
);

const JsPracticeEasy = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.JsPracticeEasy,
  })),
);

const JsPracticeMedium = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.JsPracticeMedium,
  })),
);

const JsPracticeHard = lazy(() =>
  import("../pages/jsPages").then((module) => ({
    default: module.JsPracticeHard,
  })),
);

// ── React Core ────────────────────────────────────────────────────

const IntroductionPage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.IntroductionPage,
  })),
);

const JSXPage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.JSXPage,
  })),
);

const ComponentsPage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.ComponentsPage,
  })),
);

const PropsPage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.PropsPage,
  })),
);

const EventsPage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.EventsPage,
  })),
);

const ConditionalRenderingPage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.ConditionalRenderingPage,
  })),
);

const ListsKeysPage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.ListsKeysPage,
  })),
);

const FormsPage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.FormsPage,
  })),
);

const RoutingPage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.RoutingPage,
  })),
);

// ── React Advanced ────────────────────────────────────────────────

const ReactMemoPage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.ReactMemoPage,
  })),
);

const LazySuspensePage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.LazySuspensePage,
  })),
);

const ErrorBoundariesPage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.ErrorBoundariesPage,
  })),
);

const PortalsPage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.PortalsPage,
  })),
);

const HOCPage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.HOCPage,
  })),
);

// ── React Hooks ───────────────────────────────────────────────────

const UseStatePage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.UseStatePage,
  })),
);

const UseEffectPage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.UseEffectPage,
  })),
);

const UseRefPage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.UseRefPage,
  })),
);

const UseContextPage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.UseContextPage,
  })),
);

const UseReducerPage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.UseReducerPage,
  })),
);

const UseMemoPage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.UseMemoPage,
  })),
);

const UseCallbackPage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.UseCallbackPage,
  })),
);

const CustomHooksPage = lazy(() =>
  import("../pages/reactPages").then((module) => ({
    default: module.CustomHooksPage,
  })),
);

// ── Routes ────────────────────────────────────────────────────────

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[300px] items-center justify-center">
          <p className="text-sm text-gray-500">Loading notes...</p>
        </div>
      }
    >
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

        <Route path="/js/practice-easy" element={<JsPracticeEasy />} />
        <Route path="/js/practice-medium" element={<JsPracticeMedium />} />
        <Route path="/js/practice-hard" element={<JsPracticeHard />} />

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

        {/* ── React Advanced ── */}

        <Route path="/react/memo" element={<ReactMemoPage />} />

        <Route path="/react/lazy-suspense" element={<LazySuspensePage />} />

        <Route
          path="/react/error-boundaries"
          element={<ErrorBoundariesPage />}
        />

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
    </Suspense>
  );
};

export default AppRoutes;
