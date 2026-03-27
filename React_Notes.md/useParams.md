`useParams` is another important hook from **React Router**.

---

# 🔹 What is `useParams`?

👉 It lets you **read dynamic values from the URL**

---

# 🔥 Example URL

```
/movie/tt0120338
```

👉 Here:

* `tt0120338` is a **dynamic parameter**

---

# 🔹 Step 1: Define route with param

```jsx id="0p6l2z"
{
  path: "/movie/:id",
  element: <MovieDetails />
}
```

👉 `:id` means → dynamic value

---

# 🔹 Step 2: Use `useParams`

```jsx id="u9v2kf"
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();

  console.log(params);
};
```

👉 Output:

```js id="m4d0e3"
{ id: "tt0120338" }
```

---

# 🔥 Best practice (destructuring)

```jsx id="6y8q1h"
const { id } = useParams();
```

👉 Now directly:

```jsx id="n2k1q7"
console.log(id); // tt0120338
```

---

# 🔹 Real use case

```jsx id="y6o3pn"
const { id } = useParams();

useEffect(() => {
  fetch(`/api/movie/${id}`)
    .then(res => res.json())
    .then(data => console.log(data));
}, [id]);
```

👉 Fetch data based on URL

---

# 🔹 How you navigate to this route

```jsx id="yxz1ju"
<NavLink to={`/movie/${imdbID}`}>
  View Details
</NavLink>
```

---

# 🔥 Key points

* Works only with routes having `:param`
* Returns an **object**
* Values are always **strings**

---

# 💡 Example with multiple params

```jsx id="s9k2qf"
path: "/user/:userId/post/:postId"
```

```jsx id="m7v1xs"
const { userId, postId } = useParams();
```

---

# 🧠 Simple way to remember

> `useParams` = “get values from URL”

---

# ✅ Final summary

| Thing         | Example           |
| ------------- | ----------------- |
| Route         | `/movie/:id`      |
| URL           | `/movie/tt123`    |
| `useParams()` | `{ id: "tt123" }` |

---
