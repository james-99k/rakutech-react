import React from 'react'
import './storeTab.scss'

const accessoriesTab = () => {
    return (
        <div className="accessories">
            <div className="accessories__links">
                <h3>ACCESSORIES</h3>
                <ul>
                    <li><a href="#">Apple Car</a> </li>
                    <li><a href="#" className="link">Air port & wireless</a></li>
                    <li><a href="#" className="link">Cables & Docks</a></li>
                    <li><a href="#" className="link">Cases & Films</a></li>
                    <li><a href="#" className="link">Charging Devices</a></li>
                    <li><a href="#" className="link">Connected home</a></li>
                    <li><a href="#" className="link">Headphones</a></li>
                </ul>
            </div>
            <div className="accessories__quantity">
                <ul>
                    <li className="quantity">2</li>
                    <li className="quantity">48</li>
                    <li className="quantity">14</li>
                    <li className="quantity">15</li>
                    <li className="quantity">23</li>
                    <li className="quantity">1</li>
                    <li className="quantity">95</li>
                </ul>
            </div>
        </div>
    )
}

export default accessoriesTab