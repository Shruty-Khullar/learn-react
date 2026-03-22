Perfect — let’s **directly compare `useMemo` vs `useCallback` in the SAME example** so it clicks instantly 👇

---

# 🧠 Key Difference First

| Hook          | What it memoizes |
| ------------- | ---------------- |
| `useMemo`     | VALUE            |
| `useCallback` | FUNCTION         |

---

# 🔥 Example showing BOTH

## 🎯 Goal:

* Prevent child re-render
* Pass both **object + function**

---

## ❌ Without memoization (problem)

```javascript
const Child = React.memo(({ user, onClick }) => {
  console.log("Child render");
  return <button onClick={onClick}>{user.name}</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  const user = { name: "Shruty" }; // ❌ new object every render
  const handleClick = () => {      // ❌ new function every render
    console.log("clicked");
  };

  return (
    <>
      <Child user={user} onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
```

---

## 😵 Problem

* Parent re-renders
* `user` → new object ❌
* `handleClick` → new function ❌

👉 Child re-renders every time ❌

---

# ✅ With `useMemo` + `useCallback`

```javascript
import { useMemo, useCallback } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const user = useMemo(() => {
    return { name: "Shruty" };
  }, []); // ✅ memoized VALUE

  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []); // ✅ memoized FUNCTION

  return (
    <>
      <Child user={user} onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
```

---

## 🎯 Now what happens?

* Parent re-renders
* `user` → SAME reference ✅
* `handleClick` → SAME reference ✅

👉 `React.memo` sees no prop change
👉 Child does NOT re-render ✅

---

# 🔍 Side-by-side difference

## 🟢 useMemo

```javascript
const user = useMemo(() => ({ name: "Shruty" }), []);
```

👉 Stores:

```javascript
{ name: "Shruty" } // VALUE
```

---

## 🔵 useCallback

```javascript
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
```

👉 Stores:

```javascript
() => console.log("clicked") // FUNCTION
```

---

# 🔥 Internal equivalence

```javascript
// useCallback
const fn = useCallback(() => doSomething(), []);

// same as:
const fn = useMemo(() => () => doSomething(), []);
```

---

# 🧠 When to use what

### Use `useMemo`

* Objects / arrays
* Expensive calculations

---

### Use `useCallback`

* Functions passed to child
* Event handlers in memoized components

---

# ⚠️ Common mistake

```javascript
useMemo(() => () => console.log("hi"), []); // ❌ confusing
```

👉 Just use `useCallback`

---

# 🧠 Final Mental Model

* `useMemo` → “Don’t recreate VALUE”
* `useCallback` → “Don’t recreate FUNCTION”
* `React.memo` → “Don’t re-render COMPONENT”

---

# ⚡ Interview One-liner

> “`useMemo` memoizes values, `useCallback` memoizes functions, and both are used to maintain stable references so that `React.memo` can prevent unnecessary re-renders.”

---

