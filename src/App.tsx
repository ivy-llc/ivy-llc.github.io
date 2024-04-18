import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import SocialHandles from './components/SocialHandles'
import Transpilation1 from './components/Transpilation1'

// the component representing the full webpage
function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <NavBar />
            <h1>The World's First Source-to-Source AI Transpiler</h1>
            <p className="ivy-intro">
                Description here
            </p>
            <Transpilation1 />
            <h1>Works with any model size and complexity</h1>
            <h1>Unlock new deployment options</h1>
            <h1>Easily edit model after translation</h1>
            <h1>Models are performance optimized</h1>
            <h1>Find the optimal framework/hardware combination for your model</h1>
            <p className="ivy-intro">
                Ivy is the world's first source-to-source AI transpiler - allowing incredibly easy
                conversion of ML models between PyTorch, TensorFlow, Jax, and more!
            </p>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <SocialHandles />
        </>
    )
}

export default App
