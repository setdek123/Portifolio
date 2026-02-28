import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home"
import About from "./pages/about";
import Contacts from "./pages/contacts";

import Navbar from "./pages/navbar";
import Projects from "./pages/projects";

function App() {
  return <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contacts" element={<Contacts/>} />
              <Route path="/projects" element={<Projects/>} />
            </Routes>
        </BrowserRouter>
}

export default App;
