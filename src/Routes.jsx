import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Movie from "./Movie.jsx";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/movie-api-react/" element={<App />} />
        <Route path="/movie-api-react/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
