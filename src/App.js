// dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages

// components
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";


function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/transactions" element={<Index />} />
                    <Route path="/transactions/new" element={<New />} />
                    <Route path="/transactions/:index" element={<Show />} />
                    <Route path="/transactions/:index/edit" element={<Edit />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;