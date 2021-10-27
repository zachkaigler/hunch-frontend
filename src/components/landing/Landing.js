import React from 'react'
import logo from '../../images/hunch-logo-full.png'
import Header from '../header/Header'
import { featureData } from './featureData'
import LandingFeature from './LandingFeature'
import { Link } from 'react-scroll'

const features = featureData.map((feature) => {
   return <LandingFeature 
            key={feature.id}
            id={feature.id}
            img={feature.image}
            header={feature.header}
            blurb={feature.blurb}
         />
}) 

const Landing = () => {
    return (
        <section className="landing">
            <div className="landing-bg">
                <div className="column-1"/>
                <div className="column-2"/>
                <div className="column-3"/>
                <div className="column-4"/>
                <div className="column-5"/>
                <div className="column-6"/>
            </div>
            <Header />
            <div className="content">
                <div className="landing-main">
                    <div className="heading-container">
                        <img src={logo} alt="hunch-logo"/>
                        <h1 className="landing-header">surveys made easy.</h1>
                    </div>
                    <Link to="features-list" smooth="true" duration={800}>
                        <div className="landing-learn-more">
                            <p>see how it works</p>
                        </div>
                    </Link>
                </div>    
                <div className="features-list">
                    {features}
                    <div className="landing-sign-up-mobile">
                        <h1>try it for free</h1>
                    </div>
                </div>
                <div className="landing-sign-up-desktop">
                    <h1>try it for free</h1>
                </div>
            </div>
        </section>
    )
}

export default Landing
