import React from 'react'
import Upcomingevents from '../components/Upcomingevents'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function HomePage() {
    return (
        <div>
            <Navbar />
            <h1>Home Page</h1>
            <Upcomingevents />
            <Footer />
        </div>
    )
}

export default HomePage
