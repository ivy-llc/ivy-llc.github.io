import React from 'react'
import '../styles/App.css'
import '../styles/index.css'
import '../styles/LandingPage.css'
import NavBar from './NavBar'
import SocialHandles from './SocialHandles'

function ConsolePage() {
    return (
        <>
            <NavBar />
            <h1>Transpile AI Console</h1>
            <p>We're still working on integrating the Transpile console to this page, apologies for the inconvenience.</p>
            <SocialHandles />
        </>
    );
}

export default ConsolePage;
