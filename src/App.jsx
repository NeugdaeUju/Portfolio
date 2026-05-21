import {HashRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Accueil from './pages/Accueil'
import Header from './components/Header'



function App() {
  return (
    <>
    <Header />
      <HashRouter>
        <Routes>
          <Route path='/' element={<Accueil />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  )
}

export default App
