// import logo from './logo.svg'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Toilet from './component/Toilet'
import Date from './components/Date'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/toilet" element={<Toilet />} />
        <Route path="*" element={<Navigate to="toilet" />} />
        <Route path="/date" element={<Date />} />
      </Routes>
    </div>
  )
}

export default App
