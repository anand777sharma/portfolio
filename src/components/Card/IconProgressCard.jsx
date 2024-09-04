import React from 'react'

const IconProgressCard = ({ data }) => {
    return (
        <section className="service">

            <h3 className="h3 service-title">{data?.title}</h3>

            <ul className="service-list">
                {data?.skills?.map((skill, index) =>
                    <li className="service-item" key={index}>

                        <div className="service-icon-box">
                            {/* <img src="./assets/images/icon-design.svg" alt="design icon" width="40" /> */}
                            {skill?.icon}
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">{skill?.title} ({skill?.percentage})</h4>
                            <div className="skill-progress-bg">
                                <div className="skill-progress-fill" style={{ width: `${skill?.percentage}` }}></div>
                            </div>
                        </div>
                    </li>)}
            </ul>
        </section>
    )
}

export default IconProgressCard