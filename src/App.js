import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import MovieList from "./components/movieList/MovieList";
import MovieDetail from "./pages/movieDetail/MovieDetail";



function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie/:id" element={<MovieDetail/>} />
        <Route path="/movies/:type" element={<MovieList/>} />
        <Route path="/*" element={""} />
      </Routes>
    </div>
  );
}

export default App;
