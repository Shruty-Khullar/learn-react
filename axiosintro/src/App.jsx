import { Movie } from "./pages/Movie";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Movie />} />
      <Route path="/movie/:id" element={<div>Movie Detail</div>} />
    </Routes>
  );
};

export default App;