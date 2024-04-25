import './App.css';
import LandingScreen from './screen/LandingScreen';
import QuoteScreen from './screen/QuoteScreen';
import Restaurant from './screen/restaurants';
import {Routes,Route,BrowserRouter, Navigate} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/quotes" element={<QuoteScreen />} />
        <Route path="/restaurants" element={<Restaurant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
