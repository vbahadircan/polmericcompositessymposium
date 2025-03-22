import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OrganizerLogos from './components/OrganizerLogos'
import CountdownTimer from './components/CountdownTimer'
import Speakers from './components/Speakers'
import Conference from './components/Conference'
import Footer from './components/Footer'
import Committee from './components/Comitee'
import Venue from './components/Venue'
import Submissions from './components/Submissions'
import Register from './components/Register'
import Sponsors from './components/Sponsors'
import Contact from './components/Contacts'
import SEO from './components/SEO'
import Workshop from './components/Workshop'
//import WelcomeLetter from './components/WelcomeLetter'
import AboutIzmir from './components/AboutIzmir';
import Accommodation from './components/Accommodation';
import SocialProgram from './components/SocialProgram';
import KeyDates from './components/KeyDates';
import Transportation from './components/Transportation';
import Program from './components/Program';





function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <SEO
                  title="Home"
                  description="Join us at the 6th International Polymeric Composites Symposium and Workshops in Izmir, Türkiye. Discover the latest advances in composite materials, network with experts, and explore innovative research."
                  keywords="polymeric composites, symposium 2025, Izmir, materials science, composite research"
                />
                <Hero />
                <OrganizerLogos />
                <CountdownTimer />
                <KeyDates />
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
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/venue/about-Izmir" element={<AboutIzmir />} />
            <Route path="/venue/accommodation" element={<Accommodation />} />
            <Route path="/venue/social-program" element={<SocialProgram />} />
            <Route path="/venue/transportation" element={<Transportation />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/program" element={<Program />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

