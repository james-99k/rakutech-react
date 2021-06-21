import React from 'react'
import './ad.scss'
import iPhone from '../Images/iPhone-3.png'
import oculus from '../Images/goPro.png'
import GoPro from '../Images/Oculus-Rift.png'

function advertisements() {
    return (
        <section>
            <div className="advertisement">
                <div className="advertisement__column">
                    <div className="advertisement__column--1">
                    <img className="image" src={iPhone} alt="Logo" />
                        <div className="title">
                            iPhone 6
                    </div>
                        <div className="details">
                            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor
                    </div>
                        <div className="price">
                            $399
                    </div>
                    </div>
                    <div className="advertisement__column--2">
                        <img className="image" src={oculus} alt="Logo" />
                        <div className="row">
                            <div className="row__title">
                                Oculus Rift
                        </div>
                            <div className="row__price">
                                $349
                        </div>
                        </div>
                    </div>
                    <div className="advertisement__column--3">
                        <div className="content">
                            <div className="content__title">
                                GoPro Hero 6
                        </div>
                            <div className="content__details">
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor
                        </div>
                            <div className="content__price">
                                $299
                        </div>
                        </div>
                        <div className="image">
                            <img className="image" src={GoPro} alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default advertisements