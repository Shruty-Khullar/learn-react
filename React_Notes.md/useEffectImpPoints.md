Nice — this error is actually **very important to understand** (and super common).

---

## ❌ What React is complaining about

> **“useEffect must not return anything besides a function”**

👉 This means your `useEffect` is returning a **Promise**, which React **doesn’t allow**

---

## 🧠 Why this happens

If you do something like:

```js
useEffect(async () => {
  await getMovieData();
}, []);
```

👉 An `async` function **always returns a Promise**

So React sees:

```js
useEffect(() => Promise)
```

❌ Not allowed

---

## ⚡ What React expects

`useEffect` should return ONLY:

* nothing (`undefined`) ✅
* OR a cleanup function ✅

```js
useEffect(() => {
  return () => {
    // cleanup
  };
}, []);
```

---

## ✅ Correct pattern (VERY IMPORTANT)

```js
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data.Search);
    } catch (err) {
      console.log(err);
    }
  };

  fetchData();
}, []);
```

---

## 🔥 Why this works

* `useEffect` → gets a **normal function** ✅
* Inside it → you define async function ✅
* Then call it ✅
* `useEffect` itself does NOT return a Promise ❌

---

## 🧠 Your case (combined fix)

Also fix your earlier mistake:

```js
useEffect(() => {
  getMovieData();
}, []);
```

OR better inline:

```js
useEffect(() => {
  const fetchData = async () => {
    const res = await axios.get(API);
    setData(res.data.Search);
  };

  fetchData();
}, []);
```

---

## ⚠️ One more thing (you might notice)

In development, you may see:
👉 API called **twice**

This is because of:
👉 React Strict Mode

It intentionally runs effects twice to detect bugs.

---

## 🧠 One-line takeaway

👉 **Never make `useEffect` itself async — wrap async logic inside it**

---

If you want, next I can show:

* How to **prevent double API calls in Strict Mode** (very useful)
* Or how to convert this into a **custom hook (`useFetch`)** like your PR reviewer suggested
