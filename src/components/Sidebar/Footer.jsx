// import React from 'react'

// const Footer = ({ data }) => {
//     return (
//         <ul className="social-list">
//             {data.map((data, index) =>
//                 <li className="social-item" key={index}>
//                     <a href={data?.to} className="social-link" target='_blank'>
//                         {data?.icon}
//                     </a>
//                 </li>
//             )}
//         </ul>
//     )
// }

// export default Footer




import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Footer = ({ data }) => {
    const [pressTimer, setPressTimer] = useState(null);

    const handleLongPress = (url) => {
        navigator.clipboard.writeText(url)
            .then(() => {
                toast.success('Link copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy the link: ', err);
            });
    };

    const startPressTimer = (url) => {
        setPressTimer(setTimeout(() => handleLongPress(url), 800)); // 800ms for long press
    };

    const cancelPressTimer = () => {
        if (pressTimer) {
            clearTimeout(pressTimer);
        }
    };

    return (
        <ul className="social-list">
            {data.map((item, index) => (
                <li className="social-item" key={index}>
                    <a 
                        href={item?.to} 
                        className="social-link" 
                        target='_blank'
                        onMouseDown={() => startPressTimer(item?.to)}
                        onMouseUp={cancelPressTimer}
                        onMouseLeave={cancelPressTimer}
                        onTouchStart={() => startPressTimer(item?.to)}
                        onTouchEnd={cancelPressTimer}
                    >
                        {item?.icon}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Footer;
