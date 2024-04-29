import React from 'react'
import '../styles/SocialHandles.css'
import githubLogo from 'src/assets/github.svg'
import discordLogo from 'src/assets/discord.svg'
import linkedinLogo from 'src/assets/linkedin.svg'

function SocialHandles() {
    return (
        <nav className="social nav">
            <ul>
                <li>
                    <a href="https://github.com/unifyai/ivy" title="GitHub">
                        <img src={githubLogo.src} className="github logo" alt="GitHub" />
                    </a>
                </li>
                <li>
                    <a href="https://discord.com/channels/1220325004013604945/1220378015436111943" title="Discord">
                        <img src={discordLogo.src} className="discord logo" alt="Discord" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/transpile-ai" title="LinkedIn">
                        <img src={linkedinLogo.src} className="linkedin logo" alt="LinkedIn" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default SocialHandles;
