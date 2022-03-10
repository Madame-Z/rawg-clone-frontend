import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './pages/Home/Home';
import { Game } from './pages/Game/Game';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/games/:slug" element={<Game/>}/>
            </Routes>
      </Router>
    </div>
  );
}

export default App;
