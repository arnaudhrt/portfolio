import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="antialiased">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
