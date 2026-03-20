## 🧠 `React.memo` — what it does

`React.memo` is a **Higher Order Component (HOC)** that **prevents unnecessary re-renders of a component**.

👉 It re-renders the component **only if props change**

---

## 🧩 Syntax

```javascript
const MemoizedComponent = React.memo(Component);
```

or directly:

```javascript
const MyComponent = React.memo((props) => {
  return <div>{props.value}</div>;
});
```

---

## ✅ Example

```javascript
import React, { useState } from "react";

const Child = React.memo(({ count }) => {
  console.log("Child rendered");
  return <div>Count: {count}</div>;
});

export default function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <Child count={count} />

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <input onChange={(e) => setText(e.target.value)} />
    </div>
  );
}
```

---

## 🔍 What happens

* Typing in input → Parent re-renders
  ✅ Child does **NOT re-render** (props unchanged)

* Clicking increment → count changes
  ✅ Child **re-renders**

---

## 🧠 How it works

* It does **shallow comparison of props**
* If props are same → skips render
* If props changed → re-renders

---

## ⚠️ Important Gotcha

### ❌ This will STILL re-render:

```javascript
<Child obj={{ name: "Shruty" }} />
```

👉 Because new object is created every render

---

### ✅ Fix using `useMemo`

```javascript
const obj = useMemo(() => ({ name: "Shruty" }), []);

<Child obj={obj} />
```

---

## 🆚 `React.memo` vs `useMemo`

| Feature            | React.memo | useMemo                |
| ------------------ | ---------- | ---------------------- |
| What it memoizes   | Component  | Value                  |
| Prevents re-render | ✅          | ❌                      |
| Used for           | Components | Expensive calculations |

---

## 🧠 When to Use

Use `React.memo` when:

* Component renders frequently
* Props rarely change
* Component is **heavy / complex**

---

## ❌ When NOT to Use

* Small/simple components
* Props change frequently
* No performance issue

---

## ⚡ Custom Comparison (Advanced)

```javascript
const Child = React.memo(
  ({ count }) => <div>{count}</div>,
  (prevProps, nextProps) => {
    return prevProps.count === nextProps.count;
  }
);
```

👉 You can control when re-render happens

---

## 🧠 Easy Memory Trick

> `React.memo` = “Don’t re-render if props are same”

---

## ⚡ Interview Line

> “React.memo is used to optimize functional components by memoizing them and preventing unnecessary re-renders based on shallow prop comparison.”

---

If you want, I can show:

* 🔥 **useMemo + useCallback + React.memo together (very important combo)**
* OR a **real bug where memo fails (common interview trap)**
 ------------------------------------

 <Child obj={{ name: "Shruty" }} /> 👉 Because new object is created every render explain
This is one of the **most important React concepts** — once you get this, a lot of performance behavior becomes clear 👇

---

## 🔴 The Problem

```javascript
<Child obj={{ name: "Shruty" }} />
```

Even if the value looks same, React sees it as **different every time**.

---

## 🧠 Why?

Because in JavaScript:

```javascript
{} !== {}
```

Objects are compared by **reference**, not by value.

---

## 🔍 What actually happens

Every render of parent:

```javascript
const obj = { name: "Shruty" }; // NEW object every time
```

So React sees:

```javascript
prevProps.obj !== nextProps.obj // ❌ always true
```

Even though content is same!

---

## ⚡ How `React.memo` sees it

`React.memo` does **shallow comparison**:

```javascript
prevProps.obj === nextProps.obj
```

👉 Since reference is different → it thinks props changed
👉 So **Child re-renders**

---

## 📉 Visualization

### First render:

```javascript
obj → memory address: 0x123
```

### Next render:

```javascript
obj → memory address: 0x456
```

👉 Different reference → re-render

---

## ✅ Fix using `useMemo`

```javascript
const obj = useMemo(() => ({ name: "Shruty" }), []);

<Child obj={obj} />
```

Now:

```javascript
obj → same memory reference every render
```

👉 `prevProps.obj === nextProps.obj` ✅
👉 Child does NOT re-render

---

## 🔥 Key Insight

> React doesn’t check **inside objects**
> It only checks **reference (memory location)**

---

## 🧠 Real-world analogy

Think of it like:

* `{ name: "Shruty" }` = new paper every time
* Even if written same → it's still a **different paper**

`useMemo` = reuse the same paper

---

## ⚠️ Common Interview Trap

If someone says:

> “But values are same, why re-render?”

👉 Correct answer:

> “Because objects are compared by reference, not value, and a new object is created on every render.”

---

## ⚡ Rule to Remember

* Primitive (number, string) → compared by value ✅
* Objects/arrays/functions → compared by reference ❌

---

If you want, I can show:

* 🔥 same issue with **functions (useCallback case)**
* OR a **real bug scenario where this causes performance issues in production**
