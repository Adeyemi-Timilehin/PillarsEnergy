import React, {useState, useEffect} from 'react'
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

function OfflinePage() {
  return( <div className="p-4 text-center">
      <h1 className="text-2xl font-bold text-gray-900">Offline Mode</h1>
      <p className="text-gray-600">You are offline. Some features may be unavailable.</p>
    </div>
  )
}
function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return (
    
  <Router>
      <div className="min-h-screen bg-background text-foreground">
        {isOnline ? (
          <>
            <Header />
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
            <Footer />
          </>
        ) : (
          <OfflinePage />
        )}  

      </div>
    </Router>
  )
}

export default App

