import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import lazyNotePage from "../utils/lazyNotePage";

// ─────────────────────────────────────────────────────────────────
// JavaScript
// ─────────────────────────────────────────────────────────────────

const IntroJSPage = lazyNotePage(() =>
  import("../features/notes/data/javascript/intro").then(
    (module) => module.introJS,
  ),
);

const VariablesPage = lazyNotePage(() =>
  import("../features/notes/data/javascript/variables").then(
    (module) => module.variablesNotes,
  ),
);

const DataTypesPage = lazyNotePage(() =>
  import("../features/notes/data/javascript/dataTypes").then(
    (module) => module.dataTypesNotes,
  ),
);

const ArrowFunctionsPage = lazyNotePage(() =>
  import("../features/notes/data/javascript/arrowFunctions").then(
    (module) => module.arrowFunctionsNotes,
  ),
);

const DestructuringPage = lazyNotePage(() =>
  import("../features/notes/data/javascript/destructuring").then(
    (module) => module.destructuringNotes,
  ),
);

const SpreadRestPage = lazyNotePage(() =>
  import("../features/notes/data/javascript/spreadRest").then(
    (module) => module.spreadRestNotes,
  ),
);

const ArrayMethodsPage = lazyNotePage(() =>
  import("../features/notes/data/javascript/arrayMethods").then(
    (module) => module.arrayMethodsNotes,
  ),
);

const ObjectNotesPage = lazyNotePage(() =>
  import("../features/notes/data/javascript/objects").then(
    (module) => module.objectsNotes,
  ),
);

const LoopsPage = lazyNotePage(() =>
  import("../features/notes/data/javascript/loopsAndIterations").then(
    (module) => module.loopsAndIterationNotes,
  ),
);

const Performance1 = lazyNotePage(() =>
  import("../features/notes/data/javascript/performance1").then(
    (module) => module.performanceTimeComplexityPart1Notes,
  ),
);

const Performance2 = lazyNotePage(() =>
  import("../features/notes/data/javascript/performance2").then(
    (module) => module.performanceTimeComplexityPart2Notes,
  ),
);

const ClosuresPage = lazyNotePage(() =>
  import("../features/notes/data/javascript/closures").then(
    (module) => module.closuresNotes,
  ),
);

const PromisesPage = lazyNotePage(() =>
  import("../features/notes/data/javascript/promises").then(
    (module) => module.promisesNotes,
  ),
);

const ModulesPage = lazyNotePage(() =>
  import("../features/notes/data/javascript/modules").then(
    (module) => module.modulesNotes,
  ),
);

const ThisKeywordPage = lazyNotePage(() =>
  import("../features/notes/data/javascript/thisKeyword").then(
    (module) => module.thisKeywordNotes,
  ),
);

const AsyncAwaitPage = lazyNotePage(() =>
  import("../features/notes/data/javascript/asyncAwait").then(
    (module) => module.asyncAwaitNotes,
  ),
);

const ErrorHandlingPage = lazyNotePage(() =>
  import("../features/notes/data/javascript/errorHandling").then(
    (module) => module.errorHandlingNotes,
  ),
);

const HoistingPage = lazyNotePage(() =>
  import("../features/notes/data/javascript/hoisting").then(
    (module) => module.hoistingNotes,
  ),
);

const ScopePage = lazyNotePage(() =>
  import("../features/notes/data/javascript/scope").then(
    (module) => module.scopeNotes,
  ),
);

const PrototypesPage = lazyNotePage(() =>
  import("../features/notes/data/javascript/prototypes").then(
    (module) => module.prototypesNotes,
  ),
);

// ── JavaScript Practice ───────────────────────────────────────────

const JsPracticeEasy = lazyNotePage(() =>
  import("../features/notes/data/javascript/jsPracticeEasy").then(
    (module) => module.javascriptPracticeEasy,
  ),
);

const JsPracticeMedium = lazyNotePage(() =>
  import("../features/notes/data/javascript/jsPracticeMedium").then(
    (module) => module.javascriptPracticeMedium,
  ),
);

const JsPracticeHard = lazyNotePage(() =>
  import("../features/notes/data/javascript/jsPracticeHard").then(
    (module) => module.javascriptPracticeHard,
  ),
);

// ─────────────────────────────────────────────────────────────────
// React Core
// ─────────────────────────────────────────────────────────────────

const IntroductionPage = lazyNotePage(() =>
  import("../features/notes/data/react/introduction").then(
    (module) => module.introductionNotes,
  ),
);

const JSXPage = lazyNotePage(() =>
  import("../features/notes/data/react/jsx").then((module) => module.jsxNotes),
);

const ComponentsPage = lazyNotePage(() =>
  import("../features/notes/data/react/components").then(
    (module) => module.componentsNotes,
  ),
);

const PropsPage = lazyNotePage(() =>
  import("../features/notes/data/react/props").then(
    (module) => module.propsNotes,
  ),
);

const EventsPage = lazyNotePage(() =>
  import("../features/notes/data/react/events").then(
    (module) => module.eventsNotes,
  ),
);

const ConditionalRenderingPage = lazyNotePage(() =>
  import("../features/notes/data/react/conditionalRendering").then(
    (module) => module.conditionalRenderingNotes,
  ),
);

const ListsKeysPage = lazyNotePage(() =>
  import("../features/notes/data/react/listsKeys").then(
    (module) => module.listsKeysNotes,
  ),
);

const FormsPage = lazyNotePage(() =>
  import("../features/notes/data/react/forms").then(
    (module) => module.formsNotes,
  ),
);

const RoutingPage = lazyNotePage(() =>
  import("../features/notes/data/react/routing").then(
    (module) => module.routingNotes,
  ),
);

// ─────────────────────────────────────────────────────────────────
// React Advanced
// ─────────────────────────────────────────────────────────────────

const ReactMemoPage = lazyNotePage(() =>
  import("../features/notes/data/react/reactMemo").then(
    (module) => module.reactMemoNotes,
  ),
);

const LazySuspensePage = lazyNotePage(() =>
  import("../features/notes/data/react/lazySuspense").then(
    (module) => module.lazySuspenseNotes,
  ),
);

const ErrorBoundariesPage = lazyNotePage(() =>
  import("../features/notes/data/react/errorBoundaries").then(
    (module) => module.errorBoundariesNotes,
  ),
);

const PortalsPage = lazyNotePage(() =>
  import("../features/notes/data/react/portals").then(
    (module) => module.portalsNotes,
  ),
);

const HOCPage = lazyNotePage(() =>
  import("../features/notes/data/react/hoc").then((module) => module.hocNotes),
);

// ─────────────────────────────────────────────────────────────────
// React Hooks
// ─────────────────────────────────────────────────────────────────

const UseStatePage = lazyNotePage(() =>
  import("../features/notes/data/react/hooks/useState").then(
    (module) => module.useStateNotes,
  ),
);

const UseEffectPage = lazyNotePage(() =>
  import("../features/notes/data/react/hooks/useEffect").then(
    (module) => module.useEffectNotes,
  ),
);

const UseRefPage = lazyNotePage(() =>
  import("../features/notes/data/react/hooks/useRef").then(
    (module) => module.useRefNotes,
  ),
);

const UseContextPage = lazyNotePage(() =>
  import("../features/notes/data/react/hooks/useContext").then(
    (module) => module.useContextNotes,
  ),
);

const UseReducerPage = lazyNotePage(() =>
  import("../features/notes/data/react/hooks/useReducer").then(
    (module) => module.useReducerNotes,
  ),
);

const UseMemoPage = lazyNotePage(() =>
  import("../features/notes/data/react/hooks/useMemo").then(
    (module) => module.useMemoNotes,
  ),
);

const UseCallbackPage = lazyNotePage(() =>
  import("../features/notes/data/react/hooks/useCallback").then(
    (module) => module.useCallbackNotes,
  ),
);

const CustomHooksPage = lazyNotePage(() =>
  import("../features/notes/data/react/hooks/customHooks").then(
    (module) => module.customHooksNotes,
  ),
);

// ─────────────────────────────────────────────────────────────────
// Routes
// ─────────────────────────────────────────────────────────────────

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

        {/* ── JavaScript Practice ── */}

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
