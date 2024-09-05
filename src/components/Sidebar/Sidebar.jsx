import React from 'react'
import { NavLink } from 'react-router-dom';
import Separator from '../Separator';
import Header from './Header';
import Footer from './Footer';
import { sidebarHeaderData, sidebarFooterData } from '../../util/util';

const Sidebar = ({ sidebarData }) => {

  const toggleSidebar = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle("active")
  }
  return (
    <aside className="sidebar">
      <Header data={sidebarHeaderData} onClick={toggleSidebar} />
      <div className="sidebar-info_more">
        <Separator />
        <ul className="contacts-list">
          {sidebarData.map((data, index) =>
            <li className="contact-item" key={index}>
              <div className="icon-box">
                {data?.icon}
              </div>
              <div className="contact-info">
                <p className="contact-title">{data?.title}</p>
                <a href={data?.to} className="contact-link">{data?.description}</a>
              </div>
            </li>
          )}
        </ul>
        <Separator />
        <Footer data={sidebarFooterData} />
      </div>
    </aside>
  )
}

export default Sidebar