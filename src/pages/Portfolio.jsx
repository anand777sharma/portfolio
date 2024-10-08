import React, { useState } from 'react'
import { IoCodeOutline, IoEyeOutline } from 'react-icons/io5'
import profile from '../assets/images/profile.png'
import { projects, SliderData } from '../util/util'
import FullScreenModal from '../components/Modal/FullScreenModal'
const Portfolio = () => {

    const [modalData, setModalData] = useState({
        isOpen: false,
        imgSrc: '',
        imgAlt: '',
        title: '',
        description: '',
        githubUrl: '',
        deployedUrl: ''
    });

    const openModal = (project) => {
        setModalData({
            isOpen: true,
            imgSrc: project.image,
            imgAlt: project.title,
            title: project.title,
            text: project.description,
            githubUrl: project?.githubUrl,
            deployedUrl: project?.deployedUrl
        });
    };

    const closeModal = () => {
        setModalData({ ...modalData, isOpen: false });
    };



    return (
        <article className="portfolio" data-page="portfolio">

            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <section className="projects">
                {/* <ul className="filter-list">

                    <li className="filter-item">
                        <button className="active" data-filter-btn>All</button>
                    </li>

                    <li className="filter-item">
                        <button data-filter-btn>Applications</button>
                    </li>

                    <li className="filter-item">
                        <button data-filter-btn>Web development</button>
                    </li>

                </ul>
                <div className="filter-select-box">

                    <button className="filter-select" data-select>

                        <div className="select-value" data-selecct-value>Select category</div>

                        <div className="select-icon">
                            <ion-icon name="chevron-down"></ion-icon>
                        </div>

                    </button>

                    <ul className="select-list">

                        <li className="select-item">
                            <button data-select-item>All</button>
                        </li>

                        <li className="select-item">
                            <button data-select-item>Android Apps</button>
                        </li>

                        <li className="select-item">
                            <button data-select-item>Web development</button>
                        </li>

                    </ul>

                </div> */}

                <ul className="project-list">
                    {projects?.map((project, index) =>
                        <li key={index} className="project-item  active" data-filter-item data-category="applications" onClick={() => openModal(project)}>
                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <a href={project?.githubUrl} target='_blank'> <div className="box" title='github'><IoCodeOutline /></div>  </a>
                                    <a href={project?.deployedUrl} target='_blank'> <div className="box" title='see the site'><IoEyeOutline /></div>  </a>
                                </div>
                                <img src={project?.image} alt={project?.title} loading="lazy" />
                            </figure>
                            <h3 className="project-title">{project?.title}</h3>
                            <p className="project-category">{project?.category}</p>
                        </li>
                    )}
                </ul>
                {/* <Slider data={SliderData} /> */}
                <FullScreenModal modalData={modalData} closeModal={closeModal} />
            </section>
        </article>
    )
}

export default Portfolio