import React from 'react'
import '../../styles/App.css'
import '../../styles/index.css'
import '../../styles/LandingPage.css'
import NavBar from '../../components/NavBar';
import SocialHandles from '../../components/SocialHandles'

export default function Contact() {
    return (
        <>
            <NavBar />
            <h1>Contact</h1>
            <p>If you have any questions or are interested in one of our enterprise plans, feel free to get in touch at <span style={{
                color: 'green',
                textDecoration: 'underline',
            }}>hello@transpile-ai.com</span></p>
            <SocialHandles />
        </>
    );
}
