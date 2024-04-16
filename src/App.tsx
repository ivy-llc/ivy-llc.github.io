import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SocialHandles from './components/SocialHandles'
import NavBar from './components/NavBar'

// the component representing the full webpage
function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <NavBar />
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <h1>Introducing Ivy</h1>
            <p className="ivy-intro">
                Ivy is the world's first source-to-source AI transpiler - allowing incredibly easy
                conversion of ML models between PyTorch, TensorFlow, Jax, and more!
            </p>
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
