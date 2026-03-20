The **`useReducer` hook** in React is used for managing **complex state logic**—especially when state depends on previous values or involves multiple sub-values.

Think of it as a more structured alternative to `useState`.

---

## 🧠 Basic Idea

Instead of directly setting state, you:

1. **Dispatch an action**
2. A **reducer function** decides how state changes

---

## 🧩 Syntax

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

* `state` → current state
* `dispatch` → function to send actions
* `reducer` → function that updates state
* `initialState` → starting value

---

## ⚙️ Reducer Function

A reducer is just a function:

```javascript
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```

---

## ✅ Example: Counter

```javascript
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
```

---

## 🔁 Flow (Important)

1. User clicks button
2. `dispatch({ type: "increment" })` is called
3. Reducer runs → decides new state
4. React updates UI

---

## 🆚 `useState` vs `useReducer`

| Feature               | useState | useReducer |
| --------------------- | -------- | ---------- |
| Simple state          | ✅        | ❌ overkill |
| Complex logic         | ❌ messy  | ✅ clean    |
| Multiple state fields | ❌ harder | ✅ better   |
| Predictable updates   | ❌        | ✅          |

---

## 💡 When to Use `useReducer`

Use it when:

* State has **multiple related values**
* Next state depends on **previous state**
* Logic is getting messy in `useState`
* You want **Redux-like structure**

---

## 🧠 Mental Model

Think of it like:

> “Instead of saying *what the new state is*, you say *what happened*.”

Example:

```js
dispatch({ type: "ADD_TO_CART", item: product });
```

Reducer decides *how* to update.

---

## ⚡ Pro Tip

You can combine it with `useContext` to create **global state (mini Redux)**.

---
