import React, { useEffect, useState } from 'react'
import { BiExitFullscreen, BiFullscreen } from 'react-icons/bi';

const FullScreenToggleBtn = () => {
    const [isFullActive, setIsFullActive] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 580) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen(); // Firefox
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(); // Chrome, Safari, and Opera
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen(); // IE/Edge
            }
            setIsFullActive(true);
        }


    }, [])


    const toggleFullScreen = () => {
        // Check if the document is already in fullscreen mode
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen(); // Firefox
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(); // Chrome, Safari, and Opera
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen(); // IE/Edge
            }
            setIsFullActive(true); // Update state to indicate fullscreen is active
        } else {
            // Exit fullscreen
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen(); // Firefox
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen(); // Chrome, Safari, and Opera
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen(); // IE/Edge
            }
            setIsFullActive(false); // Update state to indicate fullscreen is inactive
        }
    };
    return (
        <button className="full_screen-btn" onClick={toggleFullScreen} >
            {isFullActive ? <BiExitFullscreen /> : <BiFullscreen />}
        </button>
    )
}

export default FullScreenToggleBtn