import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Intro } from "./components/Intro";
import { Wood } from "./components/Wood";
import { Steelwork } from "./components/Steelwork";
import { Facility } from "./components/Facility";
import { Service } from "./components/Service";
import { Footer } from "./components/Footer";
import { NotFound } from "./components/NotFound";
import { Test } from "./components/Test";
import { Stone } from "./components/Stone";
import { Fence } from "./components/Fence";
import "./styles/global.sass";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/intro" element={<Intro />}></Route>
          <Route path="/wood" element={<Wood />}></Route>
          <Route path="/steelwork" element={<Steelwork />}></Route>
          <Route path="/stone" element={<Stone />}></Route>
          <Route path="/fence" element={<Fence />}></Route>
          <Route path="/facility" element={<Facility />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
