import React, { useState, useEffect } from 'react'
import logo from '../../images/hunch-logo-full.png'
import { featureData } from './featureData'
import LandingFeature from './LandingFeature'
import { Link } from 'react-scroll'
import { useSpring, animated } from 'react-spring'

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
    const [renderState, setRenderState] = useState(false)

    useEffect(() => {
        const Observer = new IntersectionObserver(function(entries) {
          if(entries[0].isIntersecting === true)
          setRenderState(true)
        }, { threshold: [.25] });
        
        Observer.observe(document.querySelector("div.features-list"));
    }, [])

    const styles = useSpring({ 
        config: {
            duration: 400
        },
        opacity: renderState ? 1 : 0,
        filter: renderState ? `blur(0px)` : `blur(5px)`
    })

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
                        <img src={logo} alt="hunch-logo"/>
                        <h1 className="landing-header">surveys made easy.</h1>
                    </div>
                    <Link to="features-list" smooth="true" duration={800}>
                        <div className="landing-learn-more">
                            <p>see how it works</p>
                        </div>
                    </Link>
                </div>    
                <animated.div style={styles} className="features-list">
                    { renderState ? features : null }
                    <div className="landing-sign-up-mobile">
                        <h1>try it for free</h1>
                    </div>
                </animated.div>
                <div className="landing-sign-up-desktop">
                    <h1>try it for free</h1>
                </div>
            </div>
        </section>
    )
}

export default Landing
