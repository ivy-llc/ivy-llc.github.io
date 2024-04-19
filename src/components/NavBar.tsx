import './NavBar.css'
import { useNavigate } from 'react-router-dom';


function NavBar() {
    const navigate = useNavigate();

    return (
        <nav className="nav bar">
            <ul className="title-logo">
                <li>
                    <button onClick={() => navigate("/")} className="title-button">Transpile AI</button>
                </li>
            </ul>
            <ul className="page-links">
                <li>
                    <a href="https://unify.ai/docs/ivy/">Docs</a>
                </li>
                {/* <li>
                    <button onClick={() => navigate("/console")}>Console</button>
                </li> */}
                <li>
                    <a href="https://github.com/unifyai/ivy">GitHub</a>
                </li>
                <li>
                    <button onClick={() => navigate("/contact")}>Contact</button>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
