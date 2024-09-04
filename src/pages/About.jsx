import React from 'react'
import Slider from '../components/Slider/Slider'
import ImgDesCard from '../components/Card/ImgDesCard'
import { skillData } from '../util/util'
import IconProgressCard from '../components/Card/IconProgressCard'

const About = ({ data }) => {
    return (
        <article className="about  active" data-page="about">

            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
                {data?.mainContent}
            </section>
            {/* all Skills */}
            <IconProgressCard data={skillData} />
            <Slider data={data?.SliderData} />
        </article>
    )
}

export default About