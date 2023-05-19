import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Edit from "./Pages/Edit.js";
import FourOFour from "./Pages/FourOFour.js";
import Home from "./Pages/Home.js";
import Index from "./Pages/Index.js";
import New from "./Pages/New.js";
import Show from "./Pages/Show.js";
import NavBar from "./Components/NavBar.js"


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <main>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/players" element={<Index />} />
            <Route path="/players/new" element={<New />} />
            <Route path="/players/:id" element={<Show />} />
            <Route path="/players/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
