import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import TopStories from "./components/TopStories";
import Weather from "./components/Weather";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Business from "./Pages/Business";
import Entertainment from "./Pages/Entertainment";
import General from "./Pages/General";
import Health from "./Pages/Health";
import Science from "./Pages/Science";
import Sports from "./Pages/Sports";
import Technology from "./Pages/Technology";
import Error from "./Pages/Error";
import SearchResult from "./Pages/SearchResult";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState(false);
  const [country, setCountry] = useState("IN");
  const [searchInput, setSearchInput] = useState("");
  const [searchBtnClicked, setSearchBtnClicked] = useState(false);
  return (
    <Router>
      <NavBar
        menu={menu}
        setMenu={setMenu}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSearchBtnClicked={setSearchBtnClicked}
      />
      <Weather />
      <div
        className={`App min-h-screen bg-lightGray font-Rubik ${
          menu ? "overflow-hidden" : "overflow-y-auto"
        }h-[100%]`}
      >
        <Routes>
          <Route
            path="/"
            element={<TopStories country={country} setCountry={setCountry} />}
          />
          <Route
            path="business"
            element={<Business country={country} setCountry={setCountry} />}
          />
          <Route
            path="entertainment"
            element={
              <Entertainment country={country} setCountry={setCountry} />
            }
          />
          <Route
            path="general"
            element={<General country={country} setCountry={setCountry} />}
          />
          <Route
            path="health"
            element={<Health country={country} setCountry={setCountry} />}
          />
          <Route
            path="science"
            element={<Science country={country} setCountry={setCountry} />}
          />
          <Route
            path="sports"
            element={<Sports country={country} setCountry={setCountry} />}
          />
          <Route
            path="technology"
            element={<Technology country={country} setCountry={setCountry} />}
          />
          <Route
            path="searchresult"
            element={
              <SearchResult
                country={country}
                setCountry={setCountry}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                menu={menu}
                setMenu={setMenu}
                searchBtnClicked={searchBtnClicked}
              />
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
