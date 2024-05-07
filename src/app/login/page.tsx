"use client";

import React, { useState } from "react";
import "src/styles/App.css";
import "src/styles/index.css";
import "src/styles/LandingPage.css";
import "src/styles/Login.css";
import NavBar from "src/components/NavBar";
import SocialHandles from "src/components/SocialHandles";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
    };

    return (
        <>
            <NavBar />
            <h1>Log In</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <label>
                    Email:
                    <input className="input-field" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input className="input-field" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </label>
                <input className="login-button" type="submit" value="Log In" />
            </form>
            <SocialHandles />
        </>
    );
}
