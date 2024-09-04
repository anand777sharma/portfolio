import React from 'react'

const Header = ({data}) => {
    return (
        <div className="sidebar-info">

            <figure className="avatar-box">
                <img src={data?.profileUrl} alt={data?.name} width="80" />
            </figure>

            <div className="info-content">
                <h1 className="name" title={data?.name}>{data?.name}</h1>

                <p className="title">{data?.position}</p>
            </div>

            <button className="info_more-btn" data-sidebar-btn>
                <span>Show Contacts</span>

                <ion-icon name="chevron-down"></ion-icon>
            </button>

        </div>
    )
}

export default Header