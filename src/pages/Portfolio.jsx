import React from 'react'

const Portfolio = () => {
    return (
        <article className="portfolio" data-page="portfolio">

            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <section className="projects">

                <ul className="filter-list">

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

                </div>

                <ul className="project-list">

                    <li className="project-item  active" data-filter-item data-category="applications">
                        <a href="https://github.com/harshit6392/Concpts">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src="./assets/images/project-4.png" alt="brawlhalla" loading="lazy" />
                            </figure>

                            <h3 className="project-title">Android Blog Application</h3>

                            <p className="project-category">Android App</p>

                        </a>
                    </li>

                    <li className="project-item  active" data-filter-item data-category="applications">
                        <a href="https://github.com/harshit6392/Weather-App">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src="./assets/images/project-8.jpg" alt="task manager" loading="lazy" />
                            </figure>

                            <h3 className="project-title">Advance Weather Application</h3>

                            <p className="project-category">Android App</p>

                        </a>
                    </li>

                    <li className="project-item  active" data-filter-item data-category="applications">
                        <a href="https://github.com/harshit6392/ChatDemo">
                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src="./assets/images/project-10.jpg" alt="finance" loading="lazy" />
                            </figure>

                            <h3 className="project-title">Chat Application</h3>

                            <p className="project-category">Android</p>

                        </a>
                    </li>

                    <li className="project-item  active" data-filter-item data-category="web development">
                        <a href="https://github.com/harshit6392/BankManagementSystem">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src="./assets/images/project-2.png" alt="orizon" loading="lazy" />
                            </figure>

                            <h3 className="project-title">Bank Management System</h3>

                            <p className="project-category">Java based CLI version</p>

                        </a>
                    </li>

                    <li className="project-item  active" data-filter-item data-category="web development">
                        <a href="https://github.com/harshit6392/Web-Based-Student-Information-System">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src="./assets/images/project-7.png" alt="summary" loading="lazy" />
                            </figure>

                            <h3 className="project-title">Web Based Student Information System</h3>

                            <p className="project-category">Web development</p>

                        </a>
                    </li>
                </ul>

            </section>

        </article>
    )
}

export default Portfolio