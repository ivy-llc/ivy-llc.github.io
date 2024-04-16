import './NavBar.css'
import ivyLogo from '../assets/old-ivy-logo.svg'


function TaskBar() {
    return (
        <nav className="nav">
            <a href="https://transpile-ai.com">
                <img src={ivyLogo} className="temp logo" alt="Transpile AI Logo" />
            </a>
            <ul>
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

export default TaskBar;
