import "./App.css";
import Heros from "./components/heros";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comics from "./components/modelo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Heros />} />
        <Route path="quadrinhos" element={<Comics />} />

        {/* 
        <Route path="*" element={<NotFound />} />
              <Route path="login/*" element={<LoginRouter />} />
              <Route path="perfil/:user" element={<UserProfile />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
