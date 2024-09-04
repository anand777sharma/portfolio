import React from 'react'

const Timeline = ({ data }) => {
    return (
        <section className="timeline">
            <div className="title-wrapper">
                <div className="icon-box">
                    {data?.icon}
                </div>
                <h3 className="h3">{data?.title}</h3>
            </div>
            <ol className="timeline-list">
                {data?.timelines.map((timeline, index) =>
                    <li className="timeline-item" key={index}>

                        <h4 className="h4 timeline-item-title">{timeline?.timelineTitle}</h4>

                        <span>{timeline?.from} - {timeline?.to}</span>
                        {timeline.location ?
                            <p className="timeline-text">
                                {timeline?.location}
                            </p> : null
                        }
                        {timeline.description ?
                            <>
                                <p className="timeline-text">
                                    {timeline?.description}
                                </p>
                            </>
                            : null
                        }
                    </li>
                )}
            </ol>

        </section>
    )
}

export default Timeline