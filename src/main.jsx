import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import AnimatedRoutes from './components/AnimatedRoutes.jsx'
import HomePage from './App.jsx'
import AboutPage from './pages/AboutPage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import JobsPage from './pages/JobsPage.jsx'
import LocationsPage from './pages/LocationsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AnimatedRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
