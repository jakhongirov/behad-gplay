import './App.css';
import { Routes, Route } from "react-router-dom";
import AdsApp from './components/adsApp/adsApp';

function App() {
  return (
    <>
      <Routes>
        <Route path='/:packageName' element={<AdsApp />} />
      </Routes>
    </>
  );
}

export default App;
