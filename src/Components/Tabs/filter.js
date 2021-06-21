import React from 'react'
import './filter.scss'

const filter = () => {
    return (
        <div className="accessories-nav">
            <div className="accessories-nav__content">
                <span>13 items</span>
                <span>Sort By</span>
                <ul className="accessories-nav__content--dropdown">
                    <li className="dropdown__options"><a href='#' className="dropdown language">NAME <i
                        className="fas fa-caret-down"></i></a>
                        <ul>
                            <li className="dropdown__options--tab"><a href='#'>PRICE</a></li>
                            <li className="dropdown__options--tab"><a href='#'>BRAND</a></li>
                        </ul>
                    </li>
                </ul>
                <span>Show</span>
                <ul className="accessories-nav__content--dropdown">
                    <li className="dropdown__options"><a href='#' className="dropdown language">12 <i
                        className="fas fa-caret-down"></i></a>
                        <ul>
                            <li className="dropdown__options--tab"><a href='#'>15</a></li>
                            <li className="dropdown__options--tab"><a href='#'>20</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default filter