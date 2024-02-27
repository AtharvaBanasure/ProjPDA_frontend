import React from 'react'
import Carousel from '../components/Carousel'
import UpcomingEvents from '../components/UpcomingEvents'
import LandingPageVideo from '../components/LandingPageVideo'

function HomePage() {
    return (
        <div>
            <LandingPageVideo/>
            {/* <Carousel /> */}
            <UpcomingEvents />

        </div>
    )
}

export default HomePage
