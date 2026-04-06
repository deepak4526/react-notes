import type { NotePageData } from "../../../../types/note";

export const formsNotes: NotePageData = {
  title: "Forms in React",
  description:
    "Forms in React use controlled components — React state drives the input values. This gives you full control over the form data and makes validation straightforward.",
  sections: [
    {
      id: "controlled-vs-uncontrolled",
      title: "Controlled vs Uncontrolled Inputs",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `// ❌ Uncontrolled — DOM owns the value (avoid in React)
function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    console.log(inputRef.current.value); // read from DOM
  };

  return <input ref={inputRef} />;
}

// ✅ Controlled — React state owns the value
function ControlledForm() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}                          // value from state
      onChange={(e) => setName(e.target.value)} // state updates on change
    />
  );
}`,
        },
        {
          type: "highlight",
          variant: "important",
          text: "Always use controlled inputs in React. State is the single source of truth — the input value always reflects what's in state.",
        },
      ],
    },
    {
      id: "basic-form",
      title: "Complete Form Example",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Single handler for all inputs (using name attribute)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ← always prevent page reload!

    // Validation
    if (!form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    console.log("Submitting:", form);
    // call API, etc.
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"       // ← must match state key
        type="email"
        value={form.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
      />

      <button type="submit">Login</button>
    </form>
  );
}`,
        },
      ],
    },
    {
      id: "input-types",
      title: "Different Input Types",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `function AllInputTypes() {
  const [values, setValues] = useState({
    text: "",
    number: 0,
    checked: false,
    selected: "option1",
    textarea: "",
    radio: "a",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <form>
      {/* Text input */}
      <input type="text" name="text" value={values.text} onChange={handleChange} />

      {/* Number input */}
      <input type="number" name="number" value={values.number} onChange={handleChange} />

      {/* Checkbox — uses 'checked' not 'value' */}
      <input type="checkbox" name="checked" checked={values.checked} onChange={handleChange} />

      {/* Select dropdown */}
      <select name="selected" value={values.selected} onChange={handleChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>

      {/* Textarea */}
      <textarea name="textarea" value={values.textarea} onChange={handleChange} />

      {/* Radio buttons */}
      <input type="radio" name="radio" value="a" checked={values.radio === "a"} onChange={handleChange} />
      <input type="radio" name="radio" value="b" checked={values.radio === "b"} onChange={handleChange} />
    </form>
  );
}`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "For checkboxes, use e.target.checked (not e.target.value). For radio buttons, compare the value to the selected state.",
        },
      ],
    },
  ],
};
