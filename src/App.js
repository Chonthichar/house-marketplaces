import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Thanks from "./pages/Thanks";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import Footer from "./components/Footer";

function App() {
  return (
    <>
       <Router>
           <Navbar/>
           <Routes>
               <Route path='/' element={<Explore/>} />
               <Route path='/thank' element={<Thanks/>} />
           </Routes>
           <Footer/>
       </Router>
    </>
  );
}

export default App;
