import React from "react";
import Link from "next/link";
import "src/styles/NavBar.css";
import ivyLogo from "src/assets/ivy-logo.png";


function NavBar() {
    return (
        <nav className="nav bar">
            {/* <ul>
                <li>
                    <Link href="/" className="title-button">
                        <img src={ivyLogo.src} className="title-logo" alt="ivy" />
                    </Link>
                </li>
            </ul> */}
            <ul className="page-links">
                <li>
                    <Link href="/enterprise">Ivy Enterprise</Link>
                </li>
                <li>
                    <a href="https://ivy.dev/docs/">Docs</a>
                </li>
                <li>
                    <a href="https://github.com/ivy-llc/ivy">Ivy on GitHub</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
