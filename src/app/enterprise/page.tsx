import React from "react";
import "src/styles/App.css";
import "src/styles/index.css";
import "src/styles/LandingPage.css";
import "src/styles/Enterprise.css";
import NavBar from "src/components/NavBar";
import checkImg from "src/assets/check.svg";
import crossImg from "src/assets/cross.svg";

export default function Contact() {
    return (
        <>
            <NavBar />
            <div className="enterprise-intro">
                <h1>Ivy for Enterprise</h1>
                <p><span>Ivy offers additional products and features for enterprise customers.</span></p>
                <p><span>If interested, please contact us at enterprise@transpile-ai.com.</span></p>
            </div>
            <div className="enterprise-container">
                <div className="enterprise-item">
                    <ul className="sub-tiers-ul">
                    <h3 className="enterprise-sub-title">Standard</h3>
                        <li className="enterprise-li"><img src={checkImg.src} className="checkImg"/>Unlimited functional transpilations</li>
                        <li className="enterprise-li"><img src={crossImg.src} className="crossImg"/>Source code must be processed by Ivy</li>
                        <li className="enterprise-li"><img src={crossImg.src} className="crossImg"/>No source-to-source transpiler</li>
                        <li className="enterprise-li"><img src={crossImg.src} className="crossImg"/>Open source support only</li>
                    </ul>
                </div>
                <div className="enterprise-item">
                    <ul className="sub-tiers-ul">
                    <h3 className="enterprise-sub-title">Enterprise</h3>
                        <li className="enterprise-li"><img src={checkImg.src} className="checkImg"/>Unlimited functional transpilations</li>
                        <li className="enterprise-li"><img src={checkImg.src} className="checkImg"/>Source code processed by customer on premise</li>
                        <li className="enterprise-li"><img src={checkImg.src} className="checkImg"/>Source-to-source transpiler</li>
                        <li className="enterprise-li"><img src={checkImg.src} className="checkImg"/>Technical support by Ivy team</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
