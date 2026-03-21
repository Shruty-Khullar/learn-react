Alright — now the **final piece of the trio**: `useCallback` 👇
(this connects directly to everything you learned about `React.memo` and `useMemo`)

---

# 🧠 What is `useCallback`?

`useCallback` is used to **memoize (remember) a function**
👉 So React doesn’t create a new function on every render

---

## 🧩 Syntax

```javascript
const memoizedFn = useCallback(() => {
  // logic
}, [dependencies]);
```

---

# 🔥 Why do we need it?

Because in React:

```javascript
const handleClick = () => {
  console.log("clicked");
};
```

👉 This function is **recreated on every render** ❌

---

# ❌ Problem with React.memo

```javascript
const Child = React.memo(({ onClick }) => {
  console.log("Child render");
  return <button onClick={onClick}>Click</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
```

---

## 😵 What happens?

* Parent re-renders
* `handleClick` is recreated
* New function reference ❌

👉 `React.memo` thinks props changed
👉 Child re-renders

---

# ✅ Fix using `useCallback`

```javascript
import { useCallback } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []); // 👈 stable function

  return (
    <>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
```

---

## 🎯 Now what happens?

* Parent re-renders
* `handleClick` SAME reference ✅
* `React.memo` sees no change
  👉 Child does NOT re-render

---

# 🧠 Key Idea

> Functions are objects → compared by reference → new function = new reference

---

# 🔁 `useCallback` vs `useMemo`

| Hook        | Stores   |
| ----------- | -------- |
| useMemo     | value    |
| useCallback | function |

---

## 🔄 Equivalent relation

```javascript
// useCallback
const fn = useCallback(() => doSomething(), []);

// same as:
const fn = useMemo(() => () => doSomething(), []);
```

---

# ⚠️ Common Mistake

```javascript
const handleClick = useCallback(() => {
  setCount(count + 1);
}, []); // ❌ stale value
```

👉 `count` won’t update

Great — this is a **very important concept: closures + stale state** 👇

---

# 🔴 Your code

```javascript
const handleClick = useCallback(() => {
  setCount(count + 1);
}, []); // ❌ empty deps
```

---

# 🧠 Why `count` won’t update

Because of **closure**

---

## 🔍 What happens step-by-step

### 🟢 First render

Assume:

```javascript
count = 0
```

Now this runs:

```javascript
const handleClick = useCallback(() => {
  setCount(count + 1);
}, []);
```

👉 Since `[]`, React creates this function **ONLY ONCE**

👉 Inside it, `count` is captured as:

```javascript
count = 0  // frozen in time ❄️
```

---

## 🔴 Next renders

Even if `count` becomes 1, 2, 3…

👉 `handleClick` is NOT recreated
👉 It still remembers:

```javascript
count = 0 ❌
```

---

## 😵 So on click

```javascript
setCount(count + 1)
```

👉 Always:

```javascript
setCount(0 + 1) → 1
```

---

## 🔁 Result

* First click → 1 ✅
* Second click → still 1 ❌
* Third click → still 1 ❌

---

# 🧠 This is called

> **Stale closure** (function holds old state)

---

# ✅ Fix 1 (BEST)

```javascript
const handleClick = useCallback(() => {
  setCount(prev => prev + 1);
}, []);
```

👉 Why this works:

* `prev` is always latest state
* No dependency needed

---

# ✅ Fix 2 (dependency way)

```javascript
const handleClick = useCallback(() => {
  setCount(count + 1);
}, [count]);
```

👉 Now:

* Function recreates when `count` changes
* Always gets latest value

---

# ⚡ Which one to prefer?

👉 ✅ Prefer this:

```javascript
setCount(prev => prev + 1);
```

Because:

* No dependency issues
* Cleaner
* Avoids re-creation

---

# 🧠 Mental Model

> `useCallback([])` freezes variables from first render

---

# 🔥 Visual intuition

Think:

```javascript
handleClick = "use count = 0 forever"
```

---

# ⚡ Interview One-liner

> “With an empty dependency array, `useCallback` captures the initial value of `count`, leading to a stale closure. Using functional updates ensures access to the latest state.”

---

# 🔥 Golden Rule

If using state inside `useCallback`:

👉 Either:

* Add it to dependencies
* OR use functional update (`prev => ...`)

## ✅ Correct

```javascript
const handleClick = useCallback(() => {
  setCount(prev => prev + 1);
}, []);
```

---

# 🧠 When to use `useCallback`

Use it when:

* Passing function to **memoized child**
* Function is dependency in `useEffect`
* Prevent unnecessary re-renders

---

# ❌ When NOT to use

* Small/simple components
* No performance issue
* Not passing function to child

---

# 🧠 Mental Model

* `useMemo` → “remember VALUE”
* `useCallback` → “remember FUNCTION”
* `React.memo` → “skip COMPONENT render”

---

# ⚡ Interview One-liner

> “`useCallback` memoizes functions to prevent unnecessary re-creations, especially useful when passing callbacks to memoized components.”

---

# 🔥 Final Combo (VERY IMPORTANT)

```javascript
const Child = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Click</button>;
});

const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
```

👉 This combo avoids unnecessary renders

---
