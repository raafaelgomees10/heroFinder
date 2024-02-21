import "./App.css";
import { useState } from "react";
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
  const [footerData, setFooterData] = useState("");
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Characters setFooterData={setFooterData} />}
        />
        <Route
          path="/characters/:id"
          element={<HeroInfo setFooterData={setFooterData} />}
        />

        <Route
          path="comics"
          element={<Comics setFooterData={setFooterData} />}
        />
        <Route
          path="/comics/:id"
          element={<ComicInfo setFooterData={setFooterData} />}
        />

        <Route
          path="events"
          element={<Events setFooterData={setFooterData} />}
        />
        <Route
          path="/events/:id"
          element={<EventInfo setFooterData={setFooterData} />}
        />

        <Route path="series" element={<Series />} />
        <Route
          path="/series/:id"
          element={<SerieInfo setFooterData={setFooterData} />}
        />

        <Route
          path="creators"
          element={<Creators />}
          setFooterData={setFooterData}
        />
        <Route path="/creators/:id" element={<CreatorInfo />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer footerData={footerData} />
    </BrowserRouter>
  );
}

export default App;
