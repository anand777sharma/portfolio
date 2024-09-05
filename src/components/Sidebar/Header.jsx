import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import FullScreenToggleBtn from '../FullScreenBtn/FullScreenToggleBtn'

const Header = ({ data, onClick }) => {
   
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
           <FullScreenToggleBtn/>

        </div>
    )
}

export default Header