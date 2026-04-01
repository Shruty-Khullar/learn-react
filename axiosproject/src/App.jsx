import { useEffect } from "react";
import { getPost } from "./api/PostApi";
import { Post } from "./components/Post";
import './App.css'
const App = () => {
  return (
    <section className="main-section">
      <Post />
    </section>
  )
}
export default App;