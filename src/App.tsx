import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./App.css";
import RemovedPage from "./pages/Removed";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="removed" element={<RemovedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
