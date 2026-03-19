## 📌 Custom Hooks — Printable Notes

---

### 🔹 What is a Custom Hook?

> A **custom hook** is a JavaScript function that uses React hooks to **reuse logic across components**.

---

### 🔹 Why we use Custom Hooks

```text
✔ Avoid code duplication
✔ Keep components clean
✔ Separate logic from UI
✔ Reuse complex logic
✔ Follow DRY principle
```

---

### 🔹 Example

```javascript
function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data));
  }, [url]);

  return data;
}
```

Usage:

```javascript
const data = useFetch(API);
```

---

### 🔹 When to use

```text
✔ Same logic in multiple components
✔ Complex logic inside component
✔ Need cleaner and readable code
```

---

### 🔹 When NOT to use

```text
❌ Very small/simple logic
❌ Logic used only once
```

---

# ⚠️ Rules for Custom Hooks (Important)

```text
1. Must start with "use"
   ✔ useFetch
   ✔ useAuth

2. Can use other hooks inside
   ✔ useState
   ✔ useEffect
   ✔ useRef

3. Follow Rules of Hooks
   ✔ Call hooks at top level
   ❌ Do NOT call inside loops/conditions

4. Only call hooks inside:
   ✔ React components
   ✔ Custom hooks

5. Must return something usable
   ✔ data
   ✔ functions
   ✔ object
```

---

### 🔹 Example with rules applied

```javascript
function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return { count, increment };
}
```

---

# 🧠 One-line Summary

```text
Custom Hook = Reusable logic + cleaner components
```

---

If you want, I can convert this into a **1-page interview cheat sheet (React hooks full summary)** for quick revision.
