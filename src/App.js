import "./App.css";
import Header from "./components/header";
import Comics from "./components/comics";
import Series from "./components/series";
import Events from "./components/events";
import Footer from "./components/footer";
import Creators from "./components/creators";
import HeroInfo from "./components/heroInfo";
import NotFound from "./components/notFound";
import ComicInfo from "./components/comicInfo";
import SerieInfo from "./components/serieInfo";
import EventInfo from "./components/eventInfo";
import Characters from "./components/characters";
import CreatorInfo from "./components/creatorInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/characters/:id" element={<HeroInfo />} />

        <Route path="comics" element={<Comics />} />
        <Route path="/comics/:id" element={<ComicInfo />} />

        <Route path="events" element={<Events />} />
        <Route path="/events/:id" element={<EventInfo />} />

        <Route path="series" element={<Series />} />
        <Route path="/series/:id" element={<SerieInfo />} />

        <Route path="creators" element={<Creators />} />
        <Route path="/creators/:id" element={<CreatorInfo />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
