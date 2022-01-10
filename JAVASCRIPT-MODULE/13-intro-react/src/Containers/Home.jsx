import React from "react";
import Header from '../Layouts/Header.jsx'
import Footer from '../Layouts/Footer.jsx'

const Home = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            <Header />
            <div className="Home">
                <p>Salut, je suis la Home, Youyou !</p>
                <p>{props.phrase}</p>
            </div>
            <Footer />
        </React.Fragment>
        
    )
}

export default Home;