## 🔹 What is `useContext`?

`useContext` is a React hook used to **access data from a Context** without passing props manually through every component.

---

# 1️⃣ Problem it solves (Prop Drilling)

Without context:

```text
App → Parent → Child → GrandChild
```

If `GrandChild` needs data, you must pass it through every level:

```javascript
<App data={data} />
```

This is called **prop drilling** ❌

---

# 2️⃣ Solution: Context + useContext

React provides **Context API** to share data globally.

---

# 3️⃣ Steps to use `useContext`

### Step 1: Create context

```javascript
import { createContext } from "react";

export const UserContext = createContext();
```

---

### Step 2: Provide value

```javascript
<UserContext.Provider value="Shruty">
  <Child />
</UserContext.Provider>
```

---

### Step 3: Consume using `useContext`

```javascript
import { useContext } from "react";
import { UserContext } from "./UserContext";

function GrandChild() {
  const user = useContext(UserContext);

  return <p>{user}</p>;
}
```

---

# 4️⃣ How it works

```text
Provider → gives data
useContext → reads data
```

---

# 5️⃣ Example (Full)

```javascript
import { createContext, useContext } from "react";

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  const theme = useContext(ThemeContext);
  return <p>Theme: {theme}</p>;
}
```

Output:

```text
Theme: dark
```

---

# 6️⃣ When to use `useContext`

Use it when data is:

* Needed by many components
* Global/shared
* Not changing frequently

Examples:

```text
Theme (dark/light)
User info
Language
Auth state
```

---

# 7️⃣ When NOT to use

❌ For frequently changing data (can cause re-renders)
❌ For small/local state

Use `useState` instead.

---

# 8️⃣ Difference from props

| Props                   | useContext           |
| ----------------------- | -------------------- |
| Passed manually         | Accessed directly    |
| Good for local data     | Good for global data |
| Can cause prop drilling | Avoids prop drilling |

---

# 9️⃣ Mental model

```text
Context = global storage
useContext = read from that storage
```

---

# ✅ Final printable rule

> `useContext` lets you access shared data from a Context without passing props through multiple components.

---

If you want, I can show **a real-world example (like authentication or theme toggle) where `useContext` is used properly in production apps**.


--------------------------------------------------

export const BioContext = createContext(); 
const useBioContext = useContext(BioContext)

BioContext is a Context object.
Think of it as: A global container to store data
It is used to:
provide data (via Provider)
consume data (via useContext)

It internally gives you:
BioContext = {
  Provider,
  Consumer
}

const  useBioContext = useContext(BioContext);
What is useBioContext?
useBioContext is the value stored inside BioContext.Provider

3️⃣ How it works together

Step 1: Provide value
<BioContext.Provider value="Shruty">
  <App />
</BioContext.Provider>
Step 2: Consume value
const a = useContext(BioContext);

Now:

a = "Shruty"
4️⃣ Example
const BioContext = createContext();

function App() {
  return (
    <BioContext.Provider value={{ name: "Shruty", age: 25 }}>
      <Child />
    </BioContext.Provider>
  );
}

function Child() {
  const a = useContext(BioContext);

  console.log(a);
}

Output:

{ name: "Shruty", age: 25 }