import "./App.css";
import {Routes,Route} from "react-router-dom"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Techstack from "./Pages/Techstack";
import { useState } from "react";
function App() {

     const [isDark, setDark] = useState(false);
     const clickHandler = () => {
         console.log('Handler function called');
        setDark(!isDark);
     }
  
  return (
    <div className={`flex w-full h-full flex-col justify-center ${isDark ? 'bg-black' : 'bg-white'}`}>
      <Navbar isDark={isDark} handler={clickHandler}></Navbar>
      <Routes>
        <Route path="/" element={<Home isDark={isDark} handler={clickHandler}></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Techstack" element={<Techstack></Techstack>}></Route>
        <Route path="/Projects" element={<Projects></Projects>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
