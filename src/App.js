import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DogoDetail from "./components/DogoDetail/DogoDetail";

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
          <Route path="/dogAPI" element={<Main />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
