import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Explore from "./pages/Explore";
import Thanks from "./pages/Thanks";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
       <Router>
           <Routes>
               <Route path='/' element={<Explore/>} />
               <Route path='/' element={<Thanks/>} />
           </Routes>
           <Navbar/>
       </Router>
    </>
  );
}

export default App;
