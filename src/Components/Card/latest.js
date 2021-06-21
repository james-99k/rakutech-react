import React from 'react'
import './latest.scss'

function latest(props) {
    return (
        <div className="latest-news__content">
            <div className="news">
                <div className="news__image">
                    <img className="image" src={props.img} alt="Logo" />
                </div>
                <div className="news__details">
                    <div className="news__details--date">
                        {props.date}
                    </div>
                    <div className="news__details--title">
                        {props.title}
                    </div>
                    <div className="news__details--text">
                        {props.detail}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default latest