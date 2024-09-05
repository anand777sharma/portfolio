import React, { useState } from 'react'
import { BiExitFullscreen, BiFullscreen } from 'react-icons/bi'
import { FaChevronLeft } from 'react-icons/fa'

const Header = ({ data, onClick }) => {
    const [isFullActive, setIsFullActive] = useState(false)
    const toggleFullScreen = () => {
        isFullActive ? setIsFullActive(false) : setIsFullActive(true)
        {
            if ((document.fullScreenElement && document.fullScreenElement !== null) ||
                (!document.mozFullScreen && !document.webkitIsFullScreen)) {
                if (document.documentElement.requestFullScreen) {
                    document.documentElement.requestFullScreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullScreen) {
                    document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            }
        }
    }
    return (
        <div className="sidebar-info" >

            <figure className="avatar-box">
                <img src={data?.profileUrl} alt={data?.name} width="80" />
            </figure>

            <div className="info-content">
                <h1 className="name" title={data?.name}>{data?.name}</h1>

                <p className="title">{data?.position}</p>
            </div>

            <button className="info_more-btn" onClick={onClick} >
                <span>Show Contacts</span>

                <FaChevronLeft />
            </button>
            <button className="full_screen-btn" onClick={toggleFullScreen} >
                <BiFullscreen />
                {/* <BiExitFullscreen /> */}
            </button>

        </div>
    )
}

export default Header