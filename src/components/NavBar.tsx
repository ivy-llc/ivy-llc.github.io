import React from "react";
import "src/styles/NavBar.css";
import Link from "next/link";


function NavBar() {
    return (
        <nav className="nav bar">
            <ul className="title-logo">
                <li>
                    <Link href="/" className="title-button">Transpile AI</Link>
                </li>
            </ul>
            <ul className="page-links">
                <li>
                    <a href="https://unify.ai/docs/ivy/">Ivy Docs</a>
                </li>
                {/* <li>
                    <button onClick={() => navigate("/console")}>Console</button>
                </li> */}
                <li>
                    <a href="https://github.com/unifyai/ivy">Ivy on GitHub</a>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
