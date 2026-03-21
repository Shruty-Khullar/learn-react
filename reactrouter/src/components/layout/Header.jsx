import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <p className="header-announcement">
                    Get Thapa Membership, 30-day return or refund guarantee.
                </p>
                <div className="header-auth">
                    {/* replace <a></a> with NavLink or Link and href with to */}
                    <NavLink to="/signin" className="auth-link">SIGN IN</NavLink>
                    <NavLink to="/signup" className="auth-link">SIGN UP</NavLink>
                </div>
            </div>

            <div className="header-bottom">
                <Link to="/" className="header-logo">ThapaFlix</Link>
                <nav className="header-nav">
                    <NavLink to="/" className={({isActive})=> isActive ? "nav-link active" : "nav-link"}>HOME</NavLink>
                    <NavLink to="/about" className={({isActive})=> isActive ? "nav-link active" : "nav-link"}>ABOUT</NavLink>
                    <NavLink to="/movie" className={({isActive})=> isActive ? "nav-link active" : "nav-link"}>MOVIES</NavLink>
                    <NavLink to="/contact" className={({isActive})=> isActive ? "nav-link active" : "nav-link"}>CONTACT</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header