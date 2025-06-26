import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Consultancy } from './pages/Consultancy'
import { Projects } from './pages/Projects'
import { Solutions } from './pages/Solutions'
import { Calculator } from './pages/Calculator'
// import { Market } from './pages/Market'
import { Contact } from './pages/Contact'
 import './App.css'

function App() {
  return (
  <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/consultancy" element={<Consultancy />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/calculator" element={<Calculator />} />
            {/* <Route path="/market" element={<Market />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

