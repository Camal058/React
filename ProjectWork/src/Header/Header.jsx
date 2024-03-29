import './Header.css';
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="header-container">
            <nav className="nav-container">
                <h1 className="nav-logo">Techno</h1>
                <ul className="nav-list">
                    <li className="nav-list-item"><Link to='/'><span>Catalog</span></Link></li>
                    <li className="nav-list-item"><Link to='/myBag'><span>My bag</span></Link></li>
                </ul>
            </nav>
        </header>
    )
}