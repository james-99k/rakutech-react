import React from 'react'
import './featured.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function featured(props) {
    return (
        <div className="featured-product__content">
            <div className="featured-product__content--image">
                <img className="image" src={props.img} alt="Logo" />
            </div>
            <div className="featured-product__content--details">
                <div className="title">
                    {props.product}
                </div>
                <div className="rating">
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                </div>
                <div className="price">
                    <div className="price-discounted">
                        {props.price}
                    </div>
                    <div className="price-orignal">
                        {props.discountedPrice}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default featured