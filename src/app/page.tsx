import React from "react";
import Link from "next/link";
import "src/styles/App.css";
import "src/styles/index.css";
import "src/styles/LandingPage.css";
import GitHubStats from "src/components/GitHubStats";
import MainTitle from "src/components/MainTitle";
import NavBar from "src/components/NavBar";
import SocialHandles from "src/components/SocialHandles";
import SupportedFrameworks from "src/components/SupportedFrameworks";
import Transpilation1 from "src/components/Transpilation1";
import Transpilation2 from "src/components/Transpilation2";

// export function generateStaticParams() {
//     return [{ slug: [""] }]
// }

export default function Home() {
    return (
        <>
            <NavBar />
            <MainTitle />
            <div className="one-line-div">
                <h1 className="main-heading">One-Line Conversion</h1>
                <p className="ivy-intro">
                    <span style={{ color: "#08bc2c" }}><strong>Ivy</strong></span> allows deep learning models to be
                    transpiled between frameworks with just a single line of code.
                </p>
                <Transpilation2 />
            </div>
            <div className="uniting-div">
                <h1 className="sub-heading">Uniting The Most Popular Frameworks</h1>
                <p className="ivy-intro">
                    The transpiler brings cross-compatibility to some of the most widely-used and powerful frameworks in the industry.
                </p>
                <SupportedFrameworks />
            </div>
            <div className="s2s-div">
                <h1 className="sub-heading">Source-to-Source</h1>
                <p className="ivy-intro">
                    The transpiler converts the original model sourcecode to sourcecode in the target framework.<br />
                    This makes it incredibly easy to modify the model once its been transpiled to the new framework -
                    just as simple as if it had been created using it originally.
                </p>
                <Link className="internal-link" href="/source_to_source">Read More</Link>
                <Transpilation1 />
            </div>
            <div className="community-div">
                <h1 className="sub-heading">Join Our Community</h1>
                <p>
                    Join our growing community on a mission to make conversions between frameworks simple and accessible to all!<br />
                    We welcome open-source contributions to Ivy in the form of <strong>Pull Requests</strong> and <strong>Issues</strong> on our GitHub repository.
                </p>
                <p>
                    The Ivy Discord server is the perfect place to ask questions, get ideas for how to contribute,<br />
                    and get help from fellow developers and the <strong>Ivy</strong> team. We&apos;re looking forward to working with you!
                </p>
                <GitHubStats />
                <SocialHandles />
            </div>
            {/* <h1 className="sub-heading">Elite Performance</h1>
            <p className="ivy-intro">
                Maintaining the performance of models that have been transpiled to new frameworks is a top priority for us.
            </p> */}
            {/* <h1>Get Started</h1> */}
        </>
    );
}
