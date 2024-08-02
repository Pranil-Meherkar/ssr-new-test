import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home.jsx';
import About from './components/pages/about/About.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Add more routes here */}
        </Routes>
    );
}

export default App;
