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
                <p>If you have any questions or are interested in one of our enterprise plans, feel free to get in touch at <span style={{
                    color: "green",
                    textDecoration: "underline",
                }}>hello@transpile-ai.com</span></p>
            </div>
            <div className="enterprise-container">
                <div className="enterprise-item">
                    <h3 className="enterprise-sub-title">Standard</h3>
                    <ul className="sub-tiers-ul">
                        <li className="enterprise-li">Unlimited functional transpilations</li>
                        <li className="enterprise-li">Transpilation data will be sent to ivy to help us improve</li>
                    </ul>
                </div>
                <div className="enterprise-item">
                    <h3 className="enterprise-sub-title">Enterprise</h3>
                    <ul className="sub-tiers-ul">
                        <li className="enterprise-li">Unlimited functional transpilations</li>
                        <li className="enterprise-li">Transpilation data will never be sent to ivy</li>
                        <li className="enterprise-li">Access to our source-to-source transpiler (beta)</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
