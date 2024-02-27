import React from 'react';
import UpcomingEvents from '../components/UpcomingEvents'
import LandingPageVideo from '../components/LandingPageVideo';

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
