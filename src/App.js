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

function App() {
  return (
    <div className="App">
      <header className='Main-header'>
        <Navbar />
        <Hero />
      </header>
      <About />
      <Roadmap />
      <Gallery />
      <Token />
      <Teams />
      <Faq />
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<div></div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
