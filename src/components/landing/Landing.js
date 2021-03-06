import React, { useState, useEffect } from 'react'
import logo from '../../images/hunch-logo-full.png'
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
    const [wasTriggered, setWasTriggered] = useState(false)

    useEffect(() => {
        const mainObserver = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true)
            setWasTriggered(true)
          }, { threshold: [.25] });
          
          mainObserver.observe(document.querySelector("div.features-list"));
    }, [])

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
            <div className="header">
                <p>Log In | Sign Up</p>
            </div>
            <div className="content">
                <div className="landing-main">
                    <div className="heading-container">
                        <img src={logo} className="vivify swoopInTop delay-200" alt="hunch-logo"/>
                        <h1 className="landing-header vivify swoopInTop delay-600">surveys made easy.</h1>
                    </div>
                    <Link to="features-list" smooth="true" duration={800}>
                        <div className="landing-learn-more vivify swoopInBottom delay-1000">
                            <p>see how it works</p>
                        </div>
                    </Link>
                </div>    
                <div className={`features-list ${wasTriggered ? "vivify fadeInLeft" : "hidden"}`}>
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
