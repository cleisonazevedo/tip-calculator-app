import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import TipLayout from './templates/TipLayout';

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<TipLayout/>}/>
      </Routes>
        
    </div>
  )
}

export default App;
