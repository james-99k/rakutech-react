import React from 'react'
import './banner2.scss'
import iphone from '../Images/iPhone-3.png'

function banner2() {
    return (
        <section>
            <div className="second-banner">
                <div className="second-banner__content">
                    <div className="second-banner__content--details">
                        <div className="details details__title">
                            iPhone 6 Plus
                    </div>
                        <div className="details details__description">
                            Performance and design. Taken right to the edge.
                    </div>
                        <div className="details details__link">
                            <a href="$">SHOP NOW</a>
                        </div>
                    </div>
                    <div className="second-banner__content--image">
                        <img className="image" src={iphone} alt="Logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default banner2