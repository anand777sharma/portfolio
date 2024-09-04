import React from 'react'
import Separator from '../components/Separator'
import { GoDownload } from 'react-icons/go'
import Timeline from '../components/Timeline/Timeline'
import { CirtificationTimelineData, EducationTimelineData, skillData } from '../util/util'
import IconProgressCard from '../components/Card/IconProgressCard'
const Resume = () => {
    return (
        <article className="resume" data-page="resume">

            <header>
                <h2 className="h2 article-title">Resume</h2>
                <p ><a className='form-btn' target="_blank" href="https://drive.google.com/file/d/1Iem441uH-c2bonJNcoRECY919DuB-L-Y/view?usp=sharing">Download <GoDownload /></a></p>
            </header>

            <Timeline data={EducationTimelineData}/>
            <Separator />
            {/* <Timeline data={ExperienceTimelineData} />
            <Separator /> */}
            <Timeline data={CirtificationTimelineData} />
            <Separator />
            <IconProgressCard data={skillData} />

            {/* <section className="skill">

                <h3 className="h3 skills-title">My skills</h3>

                <ul className="skills-list content-card">

                    <li className="skills-item">

                        <div className="title-wrapper">
                            <h5 className="h5">Java</h5>
                            <data value="80">80%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: "80%" }}></div>
                        </div>

                    </li>

                    <li className="skills-item">

                        <div className="title-wrapper">
                            <h5 className="h5">Kotlin</h5>
                            <data value="70">70%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: "70%" }}></div>
                        </div>

                    </li>

                    <li className="skills-item">

                        <div className="title-wrapper">
                            <h5 className="h5">Android Development</h5>
                            <data value="90">90%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: "90%" }}></div>
                        </div>

                    </li>

                    <li className="skills-item">

                        <div className="title-wrapper">
                            <h5 className="h5">Data Structure and Algorithms</h5>
                            <data value="60">60%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: "50%" }}></div>
                        </div>

                    </li>

                </ul>

            </section> */}

        </article>

    )
}

export default Resume