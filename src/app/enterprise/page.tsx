import React from "react";
import "src/styles/App.css";
import "src/styles/index.css";
import "src/styles/LandingPage.css";
import "src/styles/Enterprise.css";
import NavBar from "src/components/NavBar";

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
                        <li className="enterprise-li">Unlimited functional transpilations</li>
                        <li className="enterprise-li">Source code processed by Ivy</li>
                        <li className="enterprise-li">No source-to-source transpiler</li>
                        <li className="enterprise-li">Open source support</li>
                    </ul>
                </div>
                <div className="enterprise-item">
                    <ul className="sub-tiers-ul">
                    <h3 className="enterprise-sub-title">Enterprise</h3>
                        <li className="enterprise-li">Unlimited functional transpilations</li>
                        <li className="enterprise-li">Source code processed by customer on premise</li>
                        <li className="enterprise-li">Source-to-source transpiler</li>
                        <li className="enterprise-li">Technical support by Ivy team</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
