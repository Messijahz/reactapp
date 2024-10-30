import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/Scss/main.css'
import Navbar from './components/Navbar';
import Home from './views/Home'
import Contact from './views/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
