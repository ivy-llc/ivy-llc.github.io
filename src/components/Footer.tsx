"use client";

import React from "react";
import "src/styles/Footer.css";
import { FaArrowUp, FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaDiscord } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="#about">About Us</a>
                    <a href="#contact">Contact</a>
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#terms">Terms of Service</a>
                </div>
                <div className="footer-socials">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://www.linkedin.com/company/ivy-dev/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    <a href="https://github.com/ivy-llc/ivy" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://discord.gg/r5mcSAfp" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
                </div>
                <div className="footer-copyright">
                    © 2024 Ivy. All rights reserved.
                </div>
                <button className="scroll-to-top" onClick={scrollToTop}>
                    <FaArrowUp />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
