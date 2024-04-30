import React from 'react'
import ivyLogo from 'src/assets/ivy-logo-dark.png'


function MainTitle() {
    return (
        <div className="main-title-div">
            <img src={ivyLogo.src} className="ivy-logo" alt="ivy" />
            <h2 className="main-title-heading">Convert ML Models Between Frameworks</h2>
            <video poster="" id="video1" width="100%" height="100%" autoPlay loop muted>
                <source src="https://dl.dropboxusercontent.com/scl/fi/0k6jvh4iwetaoznc91eue/Ivy_hero_animation_18bg.mp4?rlkey=be89qp8xcycvr1ddvyk4un5yl&dl=0" type="video/mp4" />
            </video>
            <p className="main-title-pip">pip install ivy</p>
        </div>
    );
}

export default MainTitle;
