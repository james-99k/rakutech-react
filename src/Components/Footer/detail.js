import React from 'react'
import './detail.scss'

function detail() {
    return (
        <div className="footer upper">
            <div className="footer_description">
                <h3>RAKUTECH</h3>
                <div className="footer_text">
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever.Since the 1500s, when an unknown printer. </p>
                </div>
            </div>

            <div className="social_media">

                <h2> Follow Us </h2>
                <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>

                <div className="smLogo">
                    <div className="webLogo 1"><i className="fab fa-facebook-f facebook"></i></div>
                    <div className="webLogo 2"> <i className="fab fa-twitter twitter"></i></div>
                </div>

            </div>

            <div className="contact">

                <h2>Contact Us</h2>
                <p>My Company , 4578 Marmora Road, Glasgow </p>
                <p> D04 89GR </p>
                <p>Call us now: 0123-456-789 </p>
                <p>Email: support@whatever.com</p>

            </div>
        </div>
    )
}

export default detail