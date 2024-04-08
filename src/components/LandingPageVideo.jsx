import React, { useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa"; // Import icons from Font Awesome
import videoL from "../assets/images/IMG_8063.MP4"; // Make sure the path is correct

function LandingPageVideo() {
    const [muted, setMuted] = useState(true);

    const toggleMute = () => {
        setMuted(!muted);
    };

    return (
        <div className="relative">
            <div className="overflow-hidden aspect-w-16 aspect-h-9">
                <video 
                    src={videoL} 
                    autoPlay 
                    loop 
                    muted={muted} 
                    className="w-full h-full  sm:h-screen  "
                ></video>
            </div>
            {/* <button 
                className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2" 
                onClick={toggleMute}
            >
                {muted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button> */}
        </div>
    );
}

export default LandingPageVideo;
