import React from 'react'

const Slider = ({ data }) => {
    return (

        <>
            <section className="testimonials">

                <h3 className="h3 testimonials-title">{data?.title}</h3>

                <ul className="testimonials-list has-scrollbar">
                    {data?.slides?.map((slide, index) =>
                        <li className="testimonials-item" key={index}>
                            <div className="content-card" data-testimonials-item>

                                <figure className="testimonials-avatar-box">
                                    <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="60" data-testimonials-avatar />
                                </figure>

                                <h4 className="h4 testimonials-item-title" data-testimonials-title>Adapting to New Technologies</h4>

                                <div className="testimonials-text" data-testimonials-text>
                                    <p>
                                        <strong>Challenge</strong>: During my MCA, I had to quickly learn Kotlin for a major project after primarily using Java.
                                        <br />
                                        <strong>Solution</strong>: Dedicated extra hours to online courses and hands-on practice.
                                        <br />
                                        <strong>Outcome</strong>: Successfully mastered Kotlin, enhancing project efficiency.
                                    </p>
                                </div>

                            </div>
                        </li>
                    )}
                    {/* <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item>

                            <figure className="testimonials-avatar-box">
                                <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="60" data-testimonials-avatar />
                            </figure>

                            <h4 className="h4 testimonials-item-title" data-testimonials-title>Adapting to New Technologies</h4>

                            <div className="testimonials-text" data-testimonials-text>
                                <p>
                                    <strong>Challenge</strong>: During my MCA, I had to quickly learn Kotlin for a major project after primarily using Java.
                                    <br />
                                    <strong>Solution</strong>: Dedicated extra hours to online courses and hands-on practice.
                                    <br />
                                    <strong>Outcome</strong>: Successfully mastered Kotlin, enhancing project efficiency.
                                </p>
                            </div>

                        </div>
                    </li>

                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item>

                            <figure className="testimonials-avatar-box">
                                <img src="./assets/images/avatar-4.png" alt="Jessica miller" width="60" data-testimonials-avatar />
                            </figure>

                            <h4 className="h4 testimonials-item-title" data-testimonials-title>Balancing Multiple Responsibilities:</h4>

                            <div className="testimonials-text" data-testimonials-text>
                                <p>
                                    <strong>Challenge</strong>: While interning at Aikam, I had to balance my academic workload with my professional responsibilities.
                                    <br />
                                    <strong>Solution</strong>: I developed a strict time management plan, prioritizing tasks based on deadlines and importance. I used productivity tools to keep track of my progress and ensure I met all commitments.
                                    <br />
                                    <strong>Outcome</strong>: I managed to excel in both my academic and professional duties, completing my internship with commendation and maintaining a high GPA.
                                </p>
                            </div>

                        </div>
                    </li>

                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item>

                            <figure className="testimonials-avatar-box">
                                <img src="./assets/images/avatar-4.png" alt="Emily evans" width="60" data-testimonials-avatar />
                            </figure>

                            <h4 className="h4 testimonials-item-title" data-testimonials-title>Leading a Team</h4>

                            <div className="testimonials-text" data-testimonials-text>
                                <p>
                                    <strong>Challenge</strong>: During a group project in my final semester, I was assigned the role of team leader for the first time.
                                    <br />
                                    <strong>Solution</strong>: I organized regular team meetings, delegated tasks based on individual strengths, and encouraged open communication to resolve conflicts and share ideas.
                                    <br />
                                    <strong>Outcome</strong>: Our team completed the project ahead of schedule and received high praise for our coordination and the quality of our work. This experience significantly enhanced my leadership and teamwork skills.
                                </p>
                            </div>

                        </div>
                    </li>

                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item>

                            <figure className="testimonials-avatar-box">
                                <img src="./assets/images/avatar-1.png" alt="Henry william" width="60" data-testimonials-avatar />
                            </figure>

                            <h4 className="h4 testimonials-item-title" data-testimonials-title>Open-Source</h4>

                            <div className="testimonials-text" data-testimonials-text>
                                <p>
                                    <strong>Challenge</strong>: Contributing to open-source projects was initially intimidating due to the high standards and collaborative nature of the work.
                                    <br />
                                    <strong>Solution</strong>: I started by addressing smaller issues and gradually took on more complex tasks as I gained confidence. I also engaged with the community to seek feedback and learn from other contributors.
                                    <br />
                                    <strong>Outcome</strong>: My contributions were well-received, and I even led a small team to develop a new feature. This experience broadened my technical skills and taught me the value of community and collaboration.
                                </p>
                            </div>

                        </div>
                    </li> */}

                </ul>

            </section>

            {/* 
<!--
- testimonials modal
--> */}

            <div className="modal-container" data-modal-container>

                <div className="overlay" data-overlay></div>

                <section className="testimonials-modal">

                    <button className="modal-close-btn" data-modal-close-btn>
                        <ion-icon name="close-outline"></ion-icon>
                    </button>

                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                            <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img />
                        </figure>

                        <img src="./assets/images/icon-quote.svg" alt="quote icon" />
                    </div>

                    <div className="modal-content">

                        <h4 className="h3 modal-title" data-modal-title>Harshit Sharma</h4>


                        <div data-modal-text>
                            <p>
                                My name is Harshit Sharma.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Slider