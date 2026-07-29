import NotePage from "../components/notes/NotePage";

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
  objectsNotes,
  loopsAndIterationNotes,
  performanceTimeComplexityPart1Notes,
  performanceTimeComplexityPart2Notes,
  javascriptPracticeEasy,
  javascriptPracticeMedium,
  javascriptPracticeHard,
} from "../features/notes/data/javascript";

export const IntroJSPage = () => <NotePage data={introJS} />;

export const VariablesPage = () => <NotePage data={variablesNotes} />;

export const DataTypesPage = () => <NotePage data={dataTypesNotes} />;

export const ArrowFunctionsPage = () => <NotePage data={arrowFunctionsNotes} />;

export const DestructuringPage = () => <NotePage data={destructuringNotes} />;

export const SpreadRestPage = () => <NotePage data={spreadRestNotes} />;

export const ArrayMethodsPage = () => <NotePage data={arrayMethodsNotes} />;

export const ObjectNotesPage = () => <NotePage data={objectsNotes} />;

export const LoopsPage = () => <NotePage data={loopsAndIterationNotes} />;

export const Performance1 = () => (
  <NotePage data={performanceTimeComplexityPart1Notes} />
);

export const Performance2 = () => (
  <NotePage data={performanceTimeComplexityPart2Notes} />
);

export const ClosuresPage = () => <NotePage data={closuresNotes} />;

export const PromisesPage = () => <NotePage data={promisesNotes} />;

export const ModulesPage = () => <NotePage data={modulesNotes} />;

export const ThisKeywordPage = () => <NotePage data={thisKeywordNotes} />;

export const AsyncAwaitPage = () => <NotePage data={asyncAwaitNotes} />;

export const ErrorHandlingPage = () => <NotePage data={errorHandlingNotes} />;

export const HoistingPage = () => <NotePage data={hoistingNotes} />;

export const ScopePage = () => <NotePage data={scopeNotes} />;

export const PrototypesPage = () => <NotePage data={prototypesNotes} />;

export const JsPracticeEasy = () => <NotePage data={javascriptPracticeEasy} />;

export const JsPracticeMedium = () => (
  <NotePage data={javascriptPracticeMedium} />
);

export const JsPracticeHard = () => <NotePage data={javascriptPracticeHard} />;
