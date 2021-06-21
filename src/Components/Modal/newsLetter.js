import React from 'react'
import './newsLetter.scss'
import imgBG from '../Images/newsletter-img.png'

const NewsLetter = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className={open ? "open" : null}>
            <div className="newsletter_container" >
                <div className="newsletter">
                    <div className="close_btn">
                        <button className="btn_close" onClick={() => {
                            setOpen(!open);
                        }} >X</button>
                    </div>
                    <div className="form_side">
                        <h2>Newsletter</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Labore esse ab explicabo asperiores accusantium eligendi ipsam repellat quibusdam.</p>
                        <div className="email_box">
                            <input type="text" placeholder="Email" name="search" className="page_search_box" />
                            <button type="submit" className="search_button">Subscribe</button>
                        </div>
                        <div className="check_box">
                            <input type="checkbox" className="checkbox" />
                            <p>Don't show this popup again</p>
                        </div>
                    </div>
                    <div className="image_side">
                        <img src={imgBG} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter