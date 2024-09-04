import React from 'react'

const Footer = ({ data }) => {
    return (
        <ul className="social-list">
            {data.map((data, index) =>
                <li className="social-item" key={index}>
                    <a href={data?.to} className="social-link" target='_blank'>
                        {data?.icon}
                    </a>
                </li>
            )}
        </ul>
    )
}

export default Footer