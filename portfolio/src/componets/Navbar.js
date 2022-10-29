import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Portfolio</h1>
            <div className="links">
                <Link to="/">Home </Link>
                <Link to="/education">Education </Link>
                <Link to="/projects">Projects </Link>
                <Link to="/skills">Skills</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;