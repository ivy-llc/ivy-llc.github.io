import React from "react";
import "src/styles/App.css";
import "src/styles/index.css";
import "src/styles/LandingPage.css";
import NavBar from "src/components/NavBar";
import SocialHandles from "src/components/SocialHandles";

export default function Contact() {
    return (
        <>
            <NavBar />
            <h1>Contact</h1>
            <p>If you have any questions or are interested in one of our enterprise plans, feel free to get in touch at <span style={{
                color: "green",
                textDecoration: "underline",
            }}>hello@transpile-ai.com</span></p>
            <SocialHandles />
        </>
    );
}
