import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Thanks from "./pages/Thanks";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import Footer from "./components/Footer";
import QuickView from "../src/components/Quickview"
import Contact from "./components/Contact";

function App() {
  return (
    <>
       <Router>
           <Navbar/>
           <Routes>
               <Route path='/' element={<Explore/>} />
               <Route path='/thank' element={<Thanks/>} />
               <Route path='/quick' element={<QuickView/>}/>
               <Route path='/contact'element={<Contact/>}/>
           </Routes>
           <Footer/>
       </Router>
    </>
  );
}

export default App;
