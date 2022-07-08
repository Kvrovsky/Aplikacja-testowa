import { Routes,Route } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import Annoucments from "./pages/Annoucments";
import NewAnnoucments from "./pages/NewAnnoucment";


function App() {
  //localhost:3000
  return <div>
    <MainNavigation/>
     <Routes>
        <Route path="/" element={<Annoucments />} />
        <Route path="/newAnnoucment" element={<NewAnnoucments />} />
       
      </Routes>
  </div>
}

export default App;
