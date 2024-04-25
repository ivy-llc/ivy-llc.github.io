import React from 'react'
import '../styles/App.css'
import '../styles/index.css'
import '../styles/LandingPage.css'
import NavBar from './NavBar'

function ErrorPage() {
    return (
        <>
            <NavBar />
            <h1>Page not found</h1>
            <h3>The page you are looking for doesn't exist or has been moved</h3>
        </>
    )
}

export default ErrorPage
