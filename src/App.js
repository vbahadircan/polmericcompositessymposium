import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OrganizerLogos from './components/OrganizerLogos'
import CountdownTimer from './components/CountdownTimer'
import AimMissionVision from './components/AimMissionVision'
import Speakers from './components/Speakers'
import Conference from './components/Conference'
import Footer from './components/Footer'
import Committee from './components/Comitee'
import Venue from './components/Venue'
import Submissions from './components/Submissions'
import Register from './components/Register'
import Sponsors from './components/Sponsors'
import Contact from './components/Contacts'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <OrganizerLogos />
                <CountdownTimer />
                <AimMissionVision />
                <Speakers />
              </>
            } />
            <Route path="/conference" element={<Conference />} />
            <Route path="/committees" element={<Committee />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/submissions" element={<Submissions />} />
            <Route path="/registration" element={<Register />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/contact" element={<Contact />} />

            {/* Add more routes here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

