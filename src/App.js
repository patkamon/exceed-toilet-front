// import logo from './logo.svg';
import './App.css';
import Toilet from './component/Toilet'
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">


      <Routes>
          <Route path="/toilet" element={<Toilet />} />
          <Route path="*" element={<Navigate to="toilet" />} />
      </Routes>


    </div>
  );
}

export default App;
