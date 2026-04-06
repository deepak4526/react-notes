import type { NotePageData } from "../../../../../types/note";

export const useContextNotes: NotePageData = {
  title: "useContext Hook",
  description:
    "useContext lets you read a value from Context — a way to share data across the component tree without passing props through every level. It solves prop drilling.",
  sections: [
    {
      id: "creating-context",
      title: "Creating & Providing Context",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `import { createContext, useContext, useState } from "react";

// 1. Create the context
const ThemeContext = createContext("light"); // default value

// 2. Create a Provider component to wrap your tree
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme(prev => prev === "light" ? "dark" : "light");

  return (
    // 3. Provide the value to all descendants
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 4. Wrap your app (or part of it)
function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Main />
    </ThemeProvider>
  );
}`,
        },
      ],
    },
    {
      id: "consuming",
      title: "Consuming Context with useContext",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// Any component inside the Provider can access the value
function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={\`nav nav--\${theme}\`}>
      <span>Theme: {theme}</span>
      <button onClick={toggleTheme}>Toggle</button>
    </nav>
  );
}

// Even deeply nested components — no prop drilling!
function DeepChild() {
  const { theme } = useContext(ThemeContext);
  return <div className={theme}>Deep content</div>;
}`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Create a custom hook to wrap useContext — it's cleaner and lets you add a helpful error message if used outside the Provider.",
        },
        {
          type: "code",
          language: "jsx",
          code: `// Custom hook for context (best practice)
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

// Usage — cleaner than importing both useContext + ThemeContext
function Button() {
  const { theme } = useTheme(); // ← clean!
  return <button className={theme}>Click</button>;
}`,
        },
      ],
    },
    {
      id: "real-world",
      title: "Real-World Context: Auth Example",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// contexts/AuthContext.jsx
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    const data = await loginAPI(credentials);
    setUser(data.user);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
};

// Usage anywhere in the app
function Profile() {
  const { user, logout } = useAuth();
  return (
    <div>
      <p>Welcome, {user?.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}`,
        },
      ],
    },
    {
      id: "when-not-to-use",
      title: "When NOT to Use Context",
      blocks: [
        {
          type: "list",
          items: [
            "Don't use Context for data that changes frequently (every keypress) — it re-renders ALL consumers",
            "Don't replace all prop passing with Context — props are simpler for local data",
            "For high-frequency updates (form values, animations), use local state or zustand",
          ],
        },
        {
          type: "highlight",
          variant: "info",
          text: "Context is best for: auth/user, theme, language/locale, feature flags — things that change rarely but are needed everywhere.",
        },
      ],
    },
  ],
};
