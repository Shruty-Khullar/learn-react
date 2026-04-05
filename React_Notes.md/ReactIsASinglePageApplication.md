When we say **“React is a Single Page Application (SPA)”**, it means:

👉 Your app loads **only one HTML page**, and everything else updates **dynamically without reloading the page**.

---

## 🔹 Traditional Website (Multi-Page App)

* Every click → new request to server
* Entire page reloads
* Slower, less smooth

👉 Example:

```
Home → (reload) → About → (reload) → Contact
```

---

## 🔹 React (Single Page Application)

* Only **one page is loaded once**
* Navigation happens using **JavaScript**
* Only parts of the UI update (not the whole page)

👉 Example:

```
Home → About → Contact
(no full page reload)
```

---

## 🔧 How React does this

* Uses **components** to update parts of the UI
* Uses **React Router** for navigation
* Uses **Virtual DOM** for fast updates

---

## 🧠 Simple Example

Instead of this:

```html
<a href="/about">About</a>  <!-- reloads page -->
```

React uses:

```jsx
<NavLink to="/about">About</NavLink>  <!-- no reload -->
```

---

## ⚡ Key Features of SPA

* Fast navigation 🚀
* No full page refresh
* Better user experience
* Feels like a mobile app

---

## ⚠️ Important Note

React itself is just a **library**.
It becomes an SPA when you use tools like:

* `react-router-dom`
* client-side rendering

---

## 🔑 One-line definition (interview ready)

👉 **A Single Page Application is a web app that loads a single HTML page and dynamically updates content without reloading the entire page.**

---
