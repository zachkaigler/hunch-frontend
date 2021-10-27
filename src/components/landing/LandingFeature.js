import React from 'react'

const LandingFeature = ({ id, img, header, blurb }) => {
    return (
        <div className="landing-feature">
            <img src={img} alt={`feature ${id}`} className={`landing-feature-${id}`} />
            <div>
                <h1 className="feature-header">{header}</h1>
                <h2>{blurb}</h2>
            </div>
        </div>
    )
}

export default LandingFeature
