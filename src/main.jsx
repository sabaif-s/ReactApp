import { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
 
import LoadingImages from './Components/loading/LoadingMobile.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Router>
    <Routes>
   
      <Route path='/ReactApp' element={<App/>}></Route>
        <Route path='/ReactApp/loading' element={<LoadingImages/>} ></Route>
      
    </Routes>
    </Router>
  </StrictMode>,
)
