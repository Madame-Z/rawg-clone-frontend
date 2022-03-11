import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './pages/Home/Home';
import { Game } from './pages/Game/Game';
import {Signup} from './pages/Signup/Signup';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/games/:slug" element={<Game/>}/>
                <Route path="/signin" element={<Signup/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
      </Router>
    </div>
  );
}

export default App;
