import "./App.css";
import Header from "./components/header";
import Comics from "./components/comics";
import Series from "./components/series";
import Events from "./components/events";
import Stories from "./components/stories";
import Creators from "./components/creators";
import HeroInfo from "./components/heroInfo";
import ComicInfo from "./components/comicInfo";
import EventInfo from "./components/eventInfo";
import Characters from "./components/characters";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/personagens/:id" element={<HeroInfo />} />
        <Route path="quadrinhos" element={<Comics />} />
        <Route path="/quadrinhos/:id" element={<ComicInfo />} />
        <Route path="events" element={<Events />} />
        <Route path="/events/:id" element={<EventInfo />} />
        <Route path="series" element={<Series />} />
        <Route path="criadores" element={<Creators />} />
        <Route path="historias" element={<Stories />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
