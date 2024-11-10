import { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import EthiopianCalendar from './Components/mobile/EthiopianCalender.jsx';
import ScrollableDiv from './Components/mobile/ScrollableDiv.jsx';
import IntroCalender from './Components/mobile/IntroCalender.jsx';
import PicturesLoading from './assets/PicturesLoading.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Router>
    <Routes>
      <Route path='/ReactApp/ethioCalender' element={<EthiopianCalendar/>} ></Route>
      <Route path='/ReactApp' element={<App/>}></Route>
      <Route path='/ReactApp/scrollable' element={<ScrollableDiv/>} ></Route>
      <Route  path='/ReactApp/intro' element={<IntroCalender/>} ></Route>
      <Route path='/ReactApp/PictureLoading' element={<PicturesLoading/>} ></Route>
    </Routes>
    </Router>
  </StrictMode>,
)
