import './App.css';
import { Routes, Route } from 'react-router';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all-beers' element={<Beers />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
