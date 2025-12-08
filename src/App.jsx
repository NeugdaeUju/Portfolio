import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Accueil from './pages/Accueil'
import Works from './pages/Works'
// import WorksDetails from './pages/WorksDetails'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/works' element={<Works />} />
          <Route path='/works/:id' element='{<WorksDetails />}' />
          <Route path='/about' element='{<About />}' />
          <Route path='/contact' element='{<Contact />}' />
          <Route path='*' element='{<ErrorPage />}' />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
