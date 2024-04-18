import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConsolePage from './components/ConsolePage';
import ErrorPage from './components/ErrorPage'
import LandingPage from './components/LandingPage'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/console" element={<ConsolePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
