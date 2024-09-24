import React from 'react'
import { IoClose, IoCodeOutline, IoEyeOutline } from 'react-icons/io5'

const FullScreenModal = ({ modalData, closeModal }) => {
    return (
        modalData.isOpen && (
            <div className="modal-container active" >
                <div className="overlay active" onClick={closeModal}></div>
                <section className="fullScreen-modal">
                    <button className="modal-close-btn" onClick={closeModal}>
                        <IoClose />
                    </button>
                    <div className="fullScreen-modal-img-wrapper">
                        <figure className="fullScreen-modal-avatar-box">
                            <img
                                src={modalData.imgSrc}
                                alt={modalData.imgAlt}
                                width="80"
                            />
                            <div className="fullScreen-modal-item-icon-box">
                                <a href={modalData?.githubUrl} target='_blank'> <div className="box" title='github'><IoCodeOutline /></div>  </a>
                                <a href={modalData?.deployedUrl} target='_blank'> <div className="box" title='see the site'><IoEyeOutline /></div>  </a>
                            </div>
                        </figure>

                    </div>

                    <div className="modal-content fullScreen-modal-content">
                        <h4 className="h3 modal-title" >{modalData.title}</h4>
                        <div>
                            <p>{modalData.text}</p>
                        </div>

                    </div>
                </section>
            </div>
        )

    )
}

export default FullScreenModal