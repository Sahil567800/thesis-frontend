

import './App.css'
import MainLayout from './components/mainLayout/mainLayout'
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './pages/services'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/services' element={<Services/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
