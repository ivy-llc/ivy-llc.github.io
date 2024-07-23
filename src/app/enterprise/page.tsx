"use client";

import React, { useState } from "react";
import "src/styles/App.css";
import "src/styles/index.css";
import "src/styles/LandingPage.css";
import "src/styles/Enterprise.css";
import NavBar from "src/components/NavBar";
import checkImg from "src/assets/check.svg";
import crossImg from "src/assets/cross.svg";

export default function Enterprise() {
    const [selectedTier, setSelectedTier] = useState("");

    const handleSelect = (tier: string) => {
        setSelectedTier(tier);
    };

    return (
        <>
            <NavBar />
            <div className="pricing-intro">
                <h1>Pricing Plans</h1>
                <p>Ivy offers additional products and features for enterprise customers.</p>
                <p>If interested, please contact us at <a href="mailto:enterprise@ivy.dev">enterprise@ivy.dev</a></p>
                <br/>
                <p>Select the best plan that suits your needs</p>
            </div>
            <div className="pricing-container">
                <div
                    className={`pricing-item ${selectedTier === "Standard" ? "selected" : ""}`}
                    onClick={() => handleSelect("Standard")}
                >
                    <h3 className="pricing-title">Standard</h3>
                    <ul className="pricing-features">
                        <li className="pricing-feature"><img src={checkImg.src} className="icon" /> Unlimited functional transpilations</li>
                        <li className="pricing-feature"><img src={crossImg.src} className="icon" /> Source code processed by Ivy</li>
                        <li className="pricing-feature"><img src={crossImg.src} className="icon" /> No source-to-source transpiler</li>
                        <li className="pricing-feature"><img src={crossImg.src} className="icon" /> Open source support only</li>
                    </ul>
                </div>
                <div
                    className={`pricing-item ${selectedTier === "Enterprise" ? "selected" : ""}`}
                    onClick={() => handleSelect("Enterprise")}
                >
                    <h3 className="pricing-title">Enterprise</h3>
                    <ul className="pricing-features">
                        <li className="pricing-feature"><img src={checkImg.src} className="icon" /> Unlimited functional transpilations</li>
                        <li className="pricing-feature"><img src={checkImg.src} className="icon" /> Source code processed on premise</li>
                        <li className="pricing-feature"><img src={checkImg.src} className="icon" /> Source-to-source transpiler</li>
                        <li className="pricing-feature"><img src={checkImg.src} className="icon" /> Technical support by Ivy team</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
