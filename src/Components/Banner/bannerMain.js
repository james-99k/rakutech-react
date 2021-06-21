import React from 'react'
import './bannerMain.scss'
import img from '../Images/iphone1.png'

function banner() {
    return (
        <section>
            <div className="main-banner">
                <button className="main-banner__arrow">
                    <i className="fas fa-chevron-left"></i>
                </button>
                <div className="main-banner__content">
                    <div className="main-banner__content--details">
                        <div className="details details__title">
                            iPhone X
                    </div>
                        <div className="details details__description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy.
                    </div>
                        <div className="details details__link">
                            <a href="$">MORE</a>
                        </div>
                    </div>
                    <div className="main-banner__content--image">
                        <img className="image" src={img} alt="Logo" />
                    </div>
                </div>
                <button className="main-banner__arrow">
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </section>
    )
}

export default banner