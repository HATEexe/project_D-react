import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Workpage from "./pages/Workspage.jsx";
import Servicepage from "./pages/Servicepage";
import Vacanciespage from "./pages/Vacanciespage";

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />}></Route>
        <Route path="/:pageid" element={<Workpage />}></Route>
        <Route path="/:pageid" element={<Servicepage />}></Route>
        <Route path="/:pageid" element={<Vacanciespage />}></Route>
      </Routes>
    </>
  );
}
