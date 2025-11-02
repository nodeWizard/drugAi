import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Recherche from './pages/Recherche'
import ProteineDetail from './pages/ProteineDetail'
import Education from './pages/Education'
import APropos from './pages/APropos'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recherche" element={<Recherche />} />
            <Route path="/proteine/:id" element={<ProteineDetail />} />
            <Route path="/education" element={<Education />} />
            <Route path="/apropos" element={<APropos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
