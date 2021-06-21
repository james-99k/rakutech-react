import React from 'react'
import './home.scss'
import NewsLetter from '../Modal/newsLetter'
import Phone from '../Images/smart-phone-card.png'
import Laptop from '../Images/macbook2.png'
import Tablet from '../Images/ipad-back.png'
import Beats from '../Images/beats.png'
import Tv from '../Images/tv.png'
import Gague from '../Images/gague.png'
import Tab from '../Header/navTab'
import Logo from '../Header/logo'
import NavMain from '../Navigation/navMain'
import Banner from '../Banner/bannerMain'
import Ad from '../Banner/ad'
import Card from '../Card/card'
import Banner2 from '../Banner/banner2'
import Shipping from '../Banner/shippingDetails'
import Latest from '../Card/latest'
import Featured from '../Card/featured'
import Search from '../Search/searchHome'
import { connect } from 'react-redux'

const Home = ({ products }) => {
    return (
        <div>
            <NewsLetter />
            <Tab />
            <Logo />
            <NavMain />
            <Banner />
            <Ad />
            <div className="cardList">
                {products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
            <div>
                <h2 className="loadMore">LOAD MORE</h2>
            </div>
            <Banner2 />
            <Shipping />
            <h2>Latest News</h2>
            <div className="latest">
                <Latest date="01 Jan, 2015" title="iPhone" detail="Lorem ipsum is simply dummy text of the printing and" img={Phone} />
                <Latest date="02 Feb, 2017" title="MacBook" detail="Lorem ipsum is simply dummy text of the printing and" img={Laptop} />
                <Latest date="03 Mar, 2019" title="iPad" detail="Lorem ipsum is simply dummy text of the printing and" img={Tablet} />
            </div>
            <h2>Featured Product</h2>
            <div className="featured">
                <Featured product="Beats Solo 2 On Ear Headphones - Black" price="$199" discountedPrice="$299" img={Beats} />
                <Featured product="H-Squared tvTray" price="$299" discountedPrice="$399" img={Tv} />
                <Featured product="Netatmo Rain Gauge" price="$399" discountedPrice="$499" img={Gague} />
            </div>
            <Search />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.cart.products
    }
}

export default connect(mapStateToProps)(Home)