import React from 'react'
import { NavLink } from 'react-router-dom';
import Separator from '../Separator';
import Header from './Header';
import Footer from './Footer';
import { sidebarHeaderData, sidebarFooterData } from '../../util/util';

const Sidebar = ({ sidebarData }) => {
  return (
    <aside className="sidebar" data-sidebar>
      <Header data={sidebarHeaderData} />
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