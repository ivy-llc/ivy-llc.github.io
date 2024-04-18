import './LandingPage.css'
import NavBar from './NavBar'

// the component representing the full webpage
function LandingPage() {
    return (
        <>
            <NavBar />
            <h1>404: Page not found</h1>
            <h3>The page you are looking for doesn't exist or has been moved</h3>
        </>
    )
}

export default LandingPage
