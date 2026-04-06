import type { NotePageData } from "../../../../types/note";

export const listsKeysNotes: NotePageData = {
  title: "Lists & Keys",
  description:
    "Rendering lists is one of the most common tasks in React. The key prop is React's way of tracking which items changed, added, or removed — getting it wrong causes bugs.",
  sections: [
    {
      id: "rendering-lists",
      title: "Rendering Lists with .map()",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `const fruits = ["Apple", "Mango", "Banana"];

// Basic list rendering
function FruitList() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}

// List of objects
const users = [
  { id: 1, name: "Deepak", role: "Admin" },
  { id: 2, name: "Raj",    role: "User"  },
  { id: 3, name: "Priya",  role: "User"  },
];

function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> — {user.role}
        </li>
      ))}
    </ul>
  );
}`,
        },
      ],
    },
    {
      id: "why-keys",
      title: "Why Keys Matter",
      blocks: [
        {
          type: "text",
          text: "Keys help React identify which items in a list have changed, been added, or removed. Without correct keys, React may re-render more than necessary or produce incorrect UI.",
        },
        {
          type: "code",
          language: "jsx",
          code: `// ❌ No key — React warning + potential bugs
{users.map(user => <UserCard user={user} />)}

// ❌ Index as key — works for static lists, bad for dynamic ones
{users.map((user, index) => (
  <UserCard key={index} user={user} />
))}

// ✅ Stable unique ID as key (best)
{users.map(user => (
  <UserCard key={user.id} user={user} />
))}`,
        },
        {
          type: "highlight",
          variant: "warning",
          text: "Never use array index as a key for lists that can be reordered, filtered, or have items deleted. It causes React to incorrectly reuse existing components, leading to state bugs.",
        },
        {
          type: "code",
          language: "jsx",
          code: `// Why index keys break re-ordering:
// Items: [A(key=0), B(key=1), C(key=2)]
// After removing A: [B(key=0), C(key=1)]
// React thinks key=0 is STILL the first item (A)
// It reuses A's component for B — wrong state!

// ✅ With stable IDs — React correctly tracks each item
// Items: [A(id=1,key=1), B(id=2,key=2), C(id=3,key=3)]
// After removing A: [B(id=2,key=2), C(id=3,key=3)]
// React correctly removes A and keeps B and C`,
        },
      ],
    },
    {
      id: "key-rules",
      title: "Key Rules",
      blocks: [
        {
          type: "list",
          items: [
            "Keys must be UNIQUE among siblings (not globally unique)",
            "Keys must be STABLE — same item should always have same key",
            "Keys should be STRINGS or NUMBERS (IDs from database are perfect)",
            "Keys are NOT passed as props — you cannot access props.key inside a component",
            "If no ID exists, generate one at creation time (crypto.randomUUID(), nanoid())",
          ],
        },
        {
          type: "code",
          language: "jsx",
          code: `// Keys only need to be unique among siblings
// Same key can appear in different lists
<ul>
  {listA.map(item => <li key={item.id}>{item.name}</li>)}
</ul>
<ul>
  {listB.map(item => <li key={item.id}>{item.name}</li>)}
</ul>

// Generate ID at creation time (not render time!)
const [todos, setTodos] = useState([]);

const addTodo = (text) => {
  setTodos(prev => [
    ...prev,
    { id: crypto.randomUUID(), text }, // ID created once
  ]);
};
// ❌ Don't: key={Math.random()} — new ID on every render!`,
        },
      ],
    },
    {
      id: "filtering-sorting",
      title: "Filtering & Sorting Lists",
      blocks: [
        {
          type: "code",
          language: "jsx",
          code: `function ProductList({ products }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Filter and sort derived from state (not stored in state)
  const filteredProducts = products
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "name")  return a.name.localeCompare(b.name);
      if (sortBy === "price") return a.price - b.price;
      return 0;
    });

  return (
    <div>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
        <option value="name">Sort by name</option>
        <option value="price">Sort by price</option>
      </select>

      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name} — ₹{product.price}</li>
        ))}
      </ul>
    </div>
  );
}`,
        },
        {
          type: "highlight",
          variant: "tip",
          text: "Never store derived data in state. Compute filtered/sorted lists directly from the source data — React re-renders automatically when search or sortBy changes.",
        },
      ],
    },
  ],
};
