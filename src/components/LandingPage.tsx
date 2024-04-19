import { useState } from 'react'
import './LandingPage.css'
import NavBar from './NavBar'
import SocialHandles from './SocialHandles'
import Transpilation1 from './Transpilation1'

// the component representing the full webpage
function LandingPage() {
    const [count, setCount] = useState(0)

    return (
        <>
            <NavBar />
            <h1>Convert Models Between Frameworks</h1>
            <p className="ivy-intro">
                Convert deep learning models between frameworks, such as PyTorch and TensorFlow in a single line of code.
            </p>
            <Transpilation1 />
            <h1>Works with any model size and complexity</h1>
            <p className="ivy-intro">hello world</p>
            <SocialHandles />
        </>
    )
}

export default LandingPage
