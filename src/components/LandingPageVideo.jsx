import React, { useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa"; // Import icons from Font Awesome
import videoL from "../assets/images/IMG_8063.MP4"; // Make sure the path is correct

function LandingPageVideo() {
    const [muted, setMuted] = useState(true);

    const toggleMute = () => {
        setMuted(!muted);
    };

    return (
        <>
       
        <div className="mt-6   sm:m-0">
            <video 
                src={videoL} 
                autoPlay 
                loop 
                muted={muted} 
                className="w-full h-screen  sm:h-screen  sm:m-0" // Adjust the height for small devices
            ></video>
            
        </div>
        </>
    );
}

export default LandingPageVideo;
