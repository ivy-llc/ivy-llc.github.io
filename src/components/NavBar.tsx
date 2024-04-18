import './NavBar.css'
import ivyLogo from '../assets/old-ivy-logo.svg'


function NavBar() {
    return (
        <nav className="nav bar">
            <ul className='title-logo'>
                <li>
                    {/* <a href="https://transpile-ai.com">
                        <img src={ivyLogo} className="temp logo" alt="Transpile AI Logo" />
                    </a> */}
                    <a href="https://transpile-ai.com">Transpile AI</a>
                </li>
            </ul>
            <ul className='page-links'>
                <li>
                    <a href="https://unify.ai/docs/ivy/">Docs</a>
                </li>
                <li>
                    <a href="https://console.unify.ai/">Console</a>
                </li>
                <li>
                    <a href="https://github.com/unifyai/ivy">GitHub</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
