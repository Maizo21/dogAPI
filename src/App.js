import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import DogoDetail from "./components/DogoDetail/DogoDetail";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>

        <Routes>
          <Route path="/" element={<Main />}></Route>

          <Route
            path="/DogoDetail/:name/:breed"
            element={<DogoDetail />}
          ></Route>
          <Route path="/DogoDetail/:name" element={<DogoDetail />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
