'use client'

import React from 'react'
import 'src/styles/App.css'
import 'src/styles/index.css'
import 'src/styles/LandingPage.css'
import NavBar from '../components/NavBar'
import SocialHandles from '../components/SocialHandles'

export default function Error() {
    return (
        <>
            <NavBar />
            <h1>Page not found</h1>
            <h3>The page you are looking for doesn&apos;t exist or has been moved</h3>
            <SocialHandles />
        </>
    );
}
