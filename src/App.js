import { Routes,Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Annoucments from "./pages/Annoucments";
import NewAnnoucments from "./pages/NewAnnoucment";


function App() {
  //localhost:3000
  return (
    <Layout>
     <Routes>
        <Route path="/" element={<Annoucments />} />
        <Route path="/newAnnoucment" element={<NewAnnoucments />} />
       
      </Routes>
      </Layout>
  );
}

export default App;
