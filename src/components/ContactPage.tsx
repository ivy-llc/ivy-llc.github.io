import React from 'react'
import './ContactPage.css'
import NavBar from './NavBar';
import SocialHandles from './SocialHandles'

function ContactPage() {
    return (
        <>
            <NavBar />
            <h1>Contact</h1>
            <p>If you might be interested in one of our enterprise plans, feel free to get in touch at <span style={{
                color: 'green',
                textDecoration: 'underline',
            }}>hello@transpile-ai.com</span></p>
            <SocialHandles />
        </>
    );
}

export default ContactPage;
