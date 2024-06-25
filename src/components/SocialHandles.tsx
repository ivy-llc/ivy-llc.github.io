import React from "react";
import "src/styles/SocialHandles.css";
import githubLogo from "src/assets/github-logo.png";
import discordLogo from "src/assets/discord-logo.png";
import linkedinLogo from "src/assets/linkedin-logo.png";

function SocialHandles() {
    return (
        <nav className="social nav">
            <ul>
                <li>
                    <a href="https://github.com/ivy-llc/ivy" title="GitHub">
                        <img src={githubLogo.src} className="social-logo" alt="GitHub" />
                    </a>
                </li>
                <li>
                    <a href="https://discord.com/channels/1220325004013604945/1220378015436111943" title="Discord">
                        <img src={discordLogo.src} className="social-logo" alt="Discord" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/transpile-ai" title="LinkedIn">
                        <img src={linkedinLogo.src} className="social-logo" alt="LinkedIn" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default SocialHandles;
