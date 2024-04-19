import './LandingPage.css'
import NavBar from './NavBar'
import SocialHandles from './SocialHandles'
import Transpilation1 from './Transpilation1'
import SupportedFrameworks from './SupportedFrameworks'

// the component representing the full webpage
function LandingPage() {
    return (
        <>
            <NavBar />
            <h1>Convert Models Between Frameworks</h1>
            <p className="ivy-intro">
                Convert deep learning models between frameworks, such as PyTorch and TensorFlow, in just a single line of code:
            </p>
            <Transpilation1 />
            <h1>Source-to-Source</h1>
            <p className="ivy-intro">
                The transpiler converts the original model sourcecode to sourcecode in the target framework.<br />
                This makes it incredibly easy to modify the model once its been transpiled to the new framework -
                just as simple as if it had been created using it originally.
            </p>
            <h1>Uniting The Most Popular Frameworks</h1>
            <p className="ivy-intro">
                The transpiler bring cross-compatibility to some of the most widely-used and powerful frameworks in the industry.
            </p>
            <SupportedFrameworks />
            <h1>Elite Performance</h1>
            <p className="ivy-intro">
                Maintaining the performance of models that have been transpiled to new frameworks is a top priority for us.
            </p>
            {/* <h1>Get Started</h1> */}
            <SocialHandles />
        </>
    )
}

export default LandingPage
