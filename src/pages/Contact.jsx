import React from 'react'

const Contact = () => {
    return (
        <article className="contact" data-page="contact">

            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="mapbox" data-mapbox>
                {/* <figure> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.9189726833233!2d80.92093507428821!3d26.842529363105164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdb6595ae263%3A0xa29615fb1cdde830!2sGaneshganj%2C%20Raniganj%2C%20Aminabad%2C%20Lucknow%2C%20Uttar%20Pradesh%20226018!5e0!3m2!1sen!2sin!4v1720094928211!5m2!1sen!2sin" width="400" height="400" loading="lazy"></iframe>
            </section>

            <section className="contact-form">

                <h3 className="h3 form-title">Contact Form</h3>

                <form action="#" className="form" data-form>

                    <div className="input-wrapper">
                        <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />

                        <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
                    </div>

                    <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

                    <button className="form-btn" type="submit" disabled data-form-btn>
                        <ion-icon name="paper-plane"></ion-icon>
                        <span>Send Message</span>
                    </button>

                </form>

            </section>

        </article>
    )
}

export default Contact