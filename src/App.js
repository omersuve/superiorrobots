import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Teams from './components/Teams';
import Token from './components/Token';
import Faq from './components/Faq';
import Game from './components/Game';
import WalletPage from './WalletPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <header className='Main-header'>
            <Navbar />
            <Hero />
          </header>} />
        <Route path="/about" element={<About />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/token" element={<Token />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/game" element={<WalletPage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
