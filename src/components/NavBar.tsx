import React from "react";
import Link from "next/link";
import "src/styles/NavBar.css";
import ivyLogo from "src/assets/full_logo_light_long.svg";
import { FaGithub, FaDiscord } from 'react-icons/fa';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link href="/" className="title-button">
                    <img src={ivyLogo.src} alt="ivy" />
                </Link>
            </div>
            <ul className="page-links">
                <li>
                    <Link href="/enterprise">Enterprise</Link>
                </li>
                <li>
                    <a href="https://ivy.dev/docs/">Documentation</a>
                </li>
                <li>
                    <a href="https://github.com/ivy-llc/ivy" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon" />
                    </a>
                </li>
                <li>
                    <a href="https://discord.gg/r5mcSAfp" target="_blank" rel="noopener noreferrer">
                        <FaDiscord className="icon" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
