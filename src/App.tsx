import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DetailView from "./pages/DetailView";
import NotFound from "./pages/NotFound";
import Header from "./components/Common/Header";
import FavouriteSpells from "./pages/FavouriteSpells";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spells/:spellId" element={<DetailView />} />
          <Route path="/favourites" element={<FavouriteSpells />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
