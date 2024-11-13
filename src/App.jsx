import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/Scss/main.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Contact from './views/Contact';
import Footer from './components/Footer';
import ThemeProvider from './contexts/ThemeContexts';


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
