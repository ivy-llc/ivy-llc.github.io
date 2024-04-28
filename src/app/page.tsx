import React from 'react'
import '../styles/App.css'
import '../styles/index.css'
import '../styles/LandingPage.css'
import NavBar from '../components/NavBar'
import SocialHandles from '../components/SocialHandles'
import SupportedFrameworks from '../components/SupportedFrameworks'
import Transpilation1 from '../components/Transpilation1'
import Transpilation2 from '../components/Transpilation2'

// export function generateStaticParams() {
//     return [{ slug: [''] }]
// }

export default function Home() {
    return (
        <>
            <NavBar />
            <h1 className="main-heading">Convert ML Models Between Frameworks</h1>
            <p className="ivy-intro">
                <span style={{ color: "#08bc2c" }}><strong>Ivy</strong></span>, developed by <strong>Transpile AI</strong>, allows deep learning models to be
                transpiled between frameworks with just a single line of code.
            </p>
            <Transpilation2 />
            <h1 className="sub-heading">Uniting The Most Popular Frameworks</h1>
            <p className="ivy-intro">
                The transpiler brings cross-compatibility to some of the most widely-used and powerful frameworks in the industry.
            </p>
            <SupportedFrameworks />
            <h1 className="sub-heading">Source-to-Source</h1>
            <p className="ivy-intro">
                The transpiler converts the original model sourcecode to sourcecode in the target framework.<br />
                This makes it incredibly easy to modify the model once its been transpiled to the new framework -
                just as simple as if it had been created using it originally.
            </p>
            <Transpilation1 />
            {/* <h1 className="sub-heading">Elite Performance</h1>
            <p className="ivy-intro">
                Maintaining the performance of models that have been transpiled to new frameworks is a top priority for us.
            </p> */}
            {/* <h1>Get Started</h1> */}
            <SocialHandles />
        </>
    );
}
