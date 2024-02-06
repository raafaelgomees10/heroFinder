import "./App.css";
import Heros from "./components/heros";
import Header from "./components/header";
import Comics from "./components/comics";
import Series from "./components/series";
import Stories from "./components/stories";
import Creators from "./components/creators";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroInfo from "./components/heroInfo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Heros />} />
        <Route path="/personagens/:id" element={<HeroInfo />} />
        <Route path="quadrinhos" element={<Comics />} />
        <Route path="series" element={<Series />} />
        <Route path="criadores" element={<Creators />} />
        <Route path="historias" element={<Stories />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
