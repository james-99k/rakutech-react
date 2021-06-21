import React from 'react'
import iphone from '../Images/iPhone-2.png'
import './bannerStore.scss'

const banner = () => {
    return (
        <div class="accessories-banner">
            <div class="accessories-banner__content">
                <div class="accessories-banner__content--details">
                    <div class="details details__title">
                        iPhone 8
                            </div>
                    <div class="details details__description">
                        Performance and design. Taken right to the edge.
                            </div>
                    <div class="details details__link">
                        <a href="$">SHOP NOW</a>
                    </div>
                </div>
                <div class="accessories-banner__content--image">
                    <img src={iphone} alt="" class="image"/>
                        </div>
                </div>
            </div>
    )
}

export default banner