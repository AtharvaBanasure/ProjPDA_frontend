import React, { useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa"; // Import icons from Font Awesome
import videoL from "../assets/images/IMG_8063.MP4"; // Make sure the path is correct

function LandingPageVideo() {
    const [muted, setMuted] = useState(true);

    const videoStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Adjust as needed
    };

    const videoContainerStyle = {
        maxWidth: "100%",
        maxHeight: "100%",
    };

    const toggleMute = () => {
        setMuted(!muted);
    };

    return (
        <div style={videoStyle}>
            <video src={videoL} autoPlay loop muted={muted} style={videoContainerStyle}></video>
            <button onClick={toggleMute}>
                {muted ? <FaVolumeMute /> : <FaVolumeUp />} {/* Use Font Awesome icons */}
            </button>
        </div>
    );
}

export default LandingPageVideo;
