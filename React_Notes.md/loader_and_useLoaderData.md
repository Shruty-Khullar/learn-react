In **React Router**, a **`loader`** is used to **fetch data before a route renders**.

---

# 🔹 What is a loader?

👉 A **function attached to a route**
👉 It runs **before the component loads**
👉 It provides data to the component

---

# 🔥 Why use loader?

Without loader:

* Component renders first
* Then API call happens → UI may flicker/loading state

With loader:

* Data is fetched **before rendering**
* Component gets data directly ✅

---

# 🔹 Basic Example

```jsx id="7w13c1"
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/users",
    element: <Users />,
    loader: async () => {
      const res = await fetch("https://api.example.com/users");
      return res.json();
    }
  }
]);
```

---

# 🔹 Accessing loader data

Use `useLoaderData()` inside the component:

```jsx id="3kfrgq"
import { useLoaderData } from "react-router-dom";

function Users() {
  const data = useLoaderData();

  return (
    <div>
      {data.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
```

---

# 🔹 How it works (flow)

1. User visits `/users`
2. `loader()` runs first
3. Data is fetched
4. Component renders with data

---

# 🔹 Important features

### ✅ 1. Runs before render

No need for `useEffect` for initial data

---

### ✅ 2. Can throw errors

```jsx id="4k3b6x"
loader: async () => {
  const res = await fetch("/api");

  if (!res.ok) {
    throw new Response("Failed", { status: 500 });
  }

  return res.json();
}
```

---

### ✅ 3. Can access params

```jsx id="iz2y3h"
loader: async ({ params }) => {
  return fetch(`/api/user/${params.id}`);
}
```

---

# 🔥 Loader vs useEffect

| Feature        | Loader ✅        | useEffect ❌    |
| -------------- | --------------- | -------------- |
| Runs before UI | ✔ Yes           | ❌ No           |
| Data ready     | ✔ Before render | ❌ After render |
| SEO friendly   | ✔ Better        | ❌ Worse        |

---

# 💡 When to use loader?

👉 Use loader when:

* Page needs data before showing
* You want clean data-fetching logic
* You want better UX (no flicker)

---

# ⚠️ Important

* Works with **data routers** (`createBrowserRouter`)
* Not with old `<BrowserRouter>` setup

---

# 🧠 Simple way to remember

> `loader` = “fetch data before entering the page”

---

If you want, I can show:

* `action` (form handling with React Router)
* OR full CRUD example using loader + action (very interview important)
