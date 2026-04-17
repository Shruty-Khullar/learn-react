`useTransition` is a **React Hook** used to handle **non-urgent state updates** so your UI stays smooth and responsive.

---

# 🔹 What problem does it solve?

Sometimes updates are **heavy / slow** (like filtering a big list).
Without `useTransition`, UI can **freeze**.

👉 `useTransition` lets you:

* Mark some updates as **low priority**
* Keep important UI (like typing) fast

---

# 🔹 Syntax

```jsx
const [isPending, startTransition] = useTransition();
```

* `isPending` → tells if transition is in progress
* `startTransition` → wraps low-priority updates

---

# 🔹 Example

```jsx
import { useState, useTransition } from "react";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value); // urgent update

    startTransition(() => {
      // non-urgent update
      const newList = Array(10000)
        .fill(value)
        .map((v, i) => v + i);
      setList(newList);
    });
  };

  return (
    <>
      <input value={input} onChange={handleChange} />

      {isPending && <p>Loading...</p>}

      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  );
}
```

---

# 🔹 What’s happening here?

| Update Type | Priority         |
| ----------- | ---------------- |
| `setInput`  | High (urgent)    |
| `setList`   | Low (transition) |

👉 So typing stays smooth even if list rendering is heavy.

---

# 🔹 When to use

Use `useTransition` when:

* Filtering/searching large lists
* Rendering heavy UI
* Avoiding UI lag

---

# 🔹 When NOT to use

* Simple state updates
* Small components
* Form inputs themselves (don’t wrap input updates)

---

# 🧠 Simple Definition

👉 `useTransition = delay non-urgent work to keep UI fast`

---

Good question — this is where many people get confused.

---

## 🔹 What does `isPending` store?

```jsx
const [isPending, startTransition] = useTransition();
```

👉 `isPending` is a **boolean (`true` or `false`)**

---

## 🔹 Meaning of `isPending`

* `true` → a **transition is currently running**
* `false` → no transition is happening

---

## 🔹 In your code

```jsx
useEffect(()=>{
   startTransition(async ()=>{
        const resp = await getCountryData();
        console.log(resp.data);
   });  
},[])
```

### What happens:

1. `startTransition(...)` starts
2. React marks this update as **low priority**
3. During this time → `isPending = true`
4. Once done → `isPending = false`

---

## ⚠️ Important misunderstanding in YOUR code

👉 `isPending` **does NOT track your API call directly**

It tracks:

> “Is React still processing the transition updates?”

---

## 🚨 Problem in your code

You’re using:

```jsx
if(isPending) return <Loader />;
```

But:

* You are **not updating any state inside transition**
* So React has nothing to "track"

👉 Result: `isPending` may not behave as you expect

---

## 🔹 Correct way (with state)

```jsx
import { useEffect, useState, useTransition } from "react";

export const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [data, setData] = useState([]);

    useEffect(() => {
        startTransition(() => {
            getCountryData().then((resp) => {
                setData(resp.data); // state update → tracked
            });
        });
    }, []);

    if (isPending) return <p>Loading...</p>;

    return <div>{JSON.stringify(data)}</div>;
};
```

---

## 🧠 Key takeaway

👉 `isPending` tracks **state updates inside startTransition**, not async work itself

---

## 🔥 Simple analogy

* `startTransition` = “Do this later, not urgent”
* `isPending` = “Is React still working on that delayed task?”

---

## ⚡ When to use `useTransition`

* Heavy rendering
* Filtering big lists
* Avoid blocking UI

❌ Not ideal for:

* Simple API loading (use `useState + loading` instead)

---
