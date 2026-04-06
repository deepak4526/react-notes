import type { NotePageData } from "../../../../types/note";

export const portalsNotes: NotePageData = {
  title: "Portals",
  description:
    "React Portals let you render a component's output into a different DOM node — outside the parent component's DOM hierarchy — while keeping it fully connected to the React tree.",
  sections: [
    {
      id: "what-are-portals",
      title: "What Are Portals?",
      blocks: [
        {
          type: "text",
          text: "Normally, React renders components inside their parent's DOM node. Portals break this constraint — you can render children into ANY DOM node (even one outside the root div), while React events, context, and state still work normally.",
        },
        {
          type: "list",
          items: [
            "Modals / dialogs — need to escape parent overflow:hidden or z-index stacking",
            "Tooltips / popovers — must appear above all other elements",
            "Notification toasts — render at document body level",
            "Dropdown menus — need to overflow parent containers",
          ],
        },
        {
          type: "highlight",
          variant: "info",
          text: "Even though a Portal renders in a different DOM location, it still behaves like a normal child in the React tree — events bubble up through React parents, not DOM parents.",
        },
      ],
    },
    {
      id: "creating-portal",
      title: "Creating a Portal",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `import { createPortal } from "react-dom";

// Syntax: createPortal(children, domNode)

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  // Renders children into document.body, NOT inside the parent div
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      {/* Modal box */}
      <div className="relative bg-white rounded-xl p-8 shadow-2xl max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body   // ← target DOM node (outside React root!)
  );
}`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Add a dedicated <div id='modal-root'></div> to your index.html and portal into it — cleaner than mounting directly on body.",
        },
      ],
    },
    {
      id: "portal-setup",
      title: "Setting Up Portal Targets in index.html",
      blocks: [
        {
          type: "code",
          language: "javascript",
          code: `<!-- index.html -->
<body>
  <div id="root"></div>         <!-- React app mounts here -->
  <div id="modal-root"></div>   <!-- Modals mount here -->
  <div id="toast-root"></div>   <!-- Toasts mount here -->
</body>`,
        },
        {
          type: "code",
          language: "jsx",
          code: `// Portal into a dedicated container
function Modal({ isOpen, onClose, children }) {
  const modalRoot = document.getElementById("modal-root");

  if (!isOpen || !modalRoot) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 ...">
      {children}
    </div>,
    modalRoot
  );
}

// Usage — looks like a normal child component
function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      {/* Renders in #modal-root, NOT inside this div */}
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>I'm a Portal Modal!</h2>
        <p>Rendered outside the React root div.</p>
      </Modal>
    </div>
  );
}`,
        },
      ],
    },
    {
      id: "event-bubbling",
      title: "Event Bubbling Through Portals",
      blocks: [
        {
          type: "text",
          text: "Events fired inside a Portal bubble up through the React component tree — not the DOM tree. This means the parent component can catch events from the portal's children.",
        },
        {
          type: "code",
          language: "jsx",
          code: `function Parent() {
  const handleClick = () => {
    console.log("Parent caught the click!"); // ✅ fires even though modal is in body
  };

  return (
    // onClick on parent — catches events from portal children via React bubbling
    <div onClick={handleClick}>
      <Modal isOpen={true}>
        <button>Click me inside portal</button>
        {/* Click bubbles to Parent in React tree, NOT to document.body in DOM */}
      </Modal>
    </div>
  );
}`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "React event bubbling follows the REACT tree, not the DOM tree. This is intentional and powerful — it means context, theme providers, etc. all work inside portals.",
        },
      ],
    },
    {
      id: "toast-example",
      title: "Real-World Example: Toast Notifications",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// ToastContainer.tsx — renders in a portal
import { createPortal } from "react-dom";

function ToastContainer({ toasts }) {
  return createPortal(
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg"
        >
          {toast.message}
        </div>
      ))}
    </div>,
    document.getElementById("toast-root")
  );
}

// Usage
function App() {
  const [toasts, setToasts] = useState([]);

  const addToast = (msg) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message: msg }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  return (
    <>
      <button onClick={() => addToast("Saved successfully!")}>Save</button>
      <ToastContainer toasts={toasts} />
    </>
  );
}`,
        },
      ],
    },
  ],
};
