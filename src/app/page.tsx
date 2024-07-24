"use client";

import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierCaveLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "src/styles/App.css";
import "src/styles/index.css";
import "src/styles/LandingPage.css";
import GitHubStats from "src/components/GitHubStats";
import MainTitle from "src/components/MainTitle";
import NavBar from "src/components/NavBar";
import SupportedFrameworks from "src/components/SupportedFrameworks";
import SourceToSourceTranspilation from "src/components/Transpilation1";
import codeExamples from "src/constants/codeExamples";
import pytorchLogo from "src/assets/logos/pytorch.svg";
import tensorflowLogo from "src/assets/logos/tensorflow.svg";
import jaxLogo from "src/assets/logos/jax.svg";
import numpyLogo from "src/assets/logos/numpy.svg";

const frameworks = ["PyTorch", "TensorFlow", "NumPy", "Jax"];
const frameworkLogos = {
    PyTorch: pytorchLogo.src,
    TensorFlow: tensorflowLogo.src,
    NumPy: numpyLogo.src,
    Jax: jaxLogo.src,
};

export default function Home() {
    const [sourceFramework, setSourceFramework] = useState("PyTorch");
    const [targetFramework, setTargetFramework] = useState("TensorFlow");

    const handleSourceChange = (event) => {
        setSourceFramework(event.target.value);
        setTargetFramework(
            frameworks.find((fw) => fw !== event.target.value) || "TensorFlow"
        );
    };

    const handleTargetChange = (event) => {
        setTargetFramework(event.target.value);
    };

    const codeExample =
        codeExamples[sourceFramework]?.[targetFramework] ||
        `Code example for transpiling from ${sourceFramework} to ${targetFramework} is not available.`;
    
    const customStyle = {
        fontSize: '1rem',
        lineHeight: '1.4',
    };

    return (
        <>
            <NavBar />
            <MainTitle />
            {/* Single Line Conversion */}
            <div className="section single-line-div">
                <h1 className="main-heading">Single Line Conversion</h1>
                <p className="ivy-intro">
                    <span className="ivy-text">Ivy</span> allows deep learning models to be
                    transpiled between frameworks with just a single line of code.
                </p>
                <div className="transpile-demo">
                    <div className="framework-selectors">
                        <div>
                            <label htmlFor="source-framework">Source Framework:</label>
                            <select
                                id="source-framework"
                                value={sourceFramework}
                                onChange={handleSourceChange}
                                className="framework-select"
                            >
                                {frameworks.map((framework) => (
                                    <option key={framework} value={framework}>
                                        {framework}
                                    </option>
                                ))}
                            </select>
                            <img src={frameworkLogos[sourceFramework]} alt={`${sourceFramework} logo`} />
                        </div>
                        <div>
                            <label htmlFor="target-framework">Target Framework:</label>
                            <select
                                id="target-framework"
                                value={targetFramework}
                                onChange={handleTargetChange}
                                className="framework-select"
                            >
                                {frameworks
                                    .filter((framework) => framework !== sourceFramework)
                                    .map((framework) => (
                                        <option key={framework} value={framework}>
                                            {framework}
                                        </option>
                                    ))}
                            </select>
                            <img src={frameworkLogos[targetFramework]} alt={`${targetFramework} logo`} />
                        </div>
                    </div>
                    <div className="code-block">
                        <SyntaxHighlighter language="python" style={atelierCaveLight} customStyle={customStyle}>
                            {codeExample}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
            {/* Source-to-Source Transpilation */}
            <SourceToSourceTranspilation />
            <div className="section uniting-div">
                <h1 className="sub-heading">Uniting The Most Popular Frameworks</h1>
                <p className="ivy-intro">
                    The transpiler brings cross-compatibility to some of the most widely-used and powerful frameworks in the industry.
                </p>
                <SupportedFrameworks />
            </div>
            <div className="section community-div">
                <h1 className="sub-heading">Join Our Community</h1>
                <p>
                    Join our growing community on a mission to make conversions between frameworks simple and accessible to all!
                    <br />
                    We welcome open-source contributions to Ivy in the form of <strong>Pull Requests</strong> and <strong>Issues</strong> on our GitHub repository.
                    <br />
                    <br />
                </p>
                <p>
                    The Ivy Discord server is the perfect place to ask questions, get ideas for how to contribute, and get help from fellow developers and the <span className="ivy-text">Ivy</span> team. We&apos;re looking forward to working with you!
                    <br />
                </p>
                <GitHubStats />
            </div>
        </>
    );
}
