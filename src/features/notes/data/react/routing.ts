import type { NotePageData } from "../../../../types/note";

export const routingNotes: NotePageData = {
  title: "React Router",
  description:
    "React Router is the standard routing library for React. It lets you build single-page applications with multiple views, URL-based navigation, and nested layouts.",
  sections: [
    {
      id: "setup",
      title: "Setup & Basic Routing",
      blocks: [
        {
          type: "code",
          language: "bash",
          code: `npm install react-router-dom`,
        },
        {
          type: "code",
          language: "jsx",
          code: `// main.tsx — wrap in BrowserRouter
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// App.tsx — define routes
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/"        element={<Home />} />
      <Route path="/about"   element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*"        element={<NotFound />} /> {/* 404 */}
    </Routes>
  );
}`,
        },
      ],
    },
    {
      id: "navigation",
      title: "Navigation — Link & NavLink",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `import { Link, NavLink } from "react-router-dom";

// Link — basic navigation (replaces <a href>)
function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

// NavLink — same as Link but adds 'active' class automatically
function Navbar() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Home
      </NavLink>
      <NavLink to="/about"
        style={({ isActive }) => ({
          color: isActive ? "purple" : "gray"
        })}
      >
        About
      </NavLink>
    </nav>
  );
}`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "Always use <Link> or <NavLink> instead of <a href> for internal navigation. <a href> causes a full page reload — Link does client-side navigation without reloading.",
        },
      ],
    },
    {
      id: "url-params",
      title: "URL Parameters & useParams",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// Define a dynamic route
<Route path="/users/:userId" element={<UserPage />} />
<Route path="/posts/:postId/comments/:commentId" element={<CommentPage />} />

// Access params with useParams
import { useParams } from "react-router-dom";

function UserPage() {
  const { userId } = useParams(); // gets the :userId from URL

  useEffect(() => {
    fetchUser(userId);
  }, [userId]);

  return <h1>User: {userId}</h1>;
}

// URL: /posts/42/comments/7
function CommentPage() {
  const { postId, commentId } = useParams();
  return <p>Post {postId}, Comment {commentId}</p>;
}`,
        },
      ],
    },
    {
      id: "usenavigate",
      title: "Programmatic Navigation — useNavigate",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    await loginAPI(credentials);
    navigate("/dashboard");          // redirect after login
    navigate("/dashboard", { replace: true }); // replace history
    navigate(-1);                    // go back
    navigate(-2);                    // go back 2 pages
    navigate("/profile", {
      state: { fromLogin: true }     // pass state data
    });
  };

  return <form onSubmit={handleLogin}>...</form>;
}

// Read navigation state
import { useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const { fromLogin } = location.state ?? {};

  return fromLogin ? <p>Welcome! You just logged in.</p> : null;
}`,
        },
      ],
    },
    {
      id: "nested-routes",
      title: "Nested Routes & Layout Routes",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `import { Outlet } from "react-router-dom";

// Layout component — renders shared UI + <Outlet> for child routes
function DashboardLayout() {
  return (
    <div className="dashboard">
      <Sidebar />          {/* always visible */}
      <main>
        <Outlet />          {/* child route renders here */}
      </main>
    </div>
  );
}

// Routes with nesting
<Routes>
  <Route path="/dashboard" element={<DashboardLayout />}>
    <Route index element={<DashboardHome />} />     {/* /dashboard */}
    <Route path="profile" element={<Profile />} />  {/* /dashboard/profile */}
    <Route path="settings" element={<Settings />} />{/* /dashboard/settings */}
  </Route>
</Routes>`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Use <Outlet /> in layout components to render the matched child route. The index route (no path) renders at the parent's exact path.",
        },
      ],
    },
  ],
};
