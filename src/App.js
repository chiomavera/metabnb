import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Connect from "./pages/connect";

const App = () => {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="connect" element={<Connect />} />
      </Routes>
    </div>
  );
}

export default App;
