import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Place from "./pages/place";

const App = () => {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="place-to-stay" element={<Place />} />
      </Routes>
    </div>
  );
}

export default App;
