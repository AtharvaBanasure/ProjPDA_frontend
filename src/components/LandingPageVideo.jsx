import React from "react";
import videoL from "../assets/images/IMG_8063.MP4"; // Make sure the path is correct

function LandingPageVideo() {
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

    return (
        <div style={videoStyle}>
            <video src={videoL} autoPlay loop muted style={videoContainerStyle}></video>
        </div>
    );
}

export default LandingPageVideo;
