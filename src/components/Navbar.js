import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container-fluid p-0 nav-bar">
            <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
                <Link to="/" className="navbar-brand" >
                    <h1 className="m-0 display-4 font-weight-bold text-uppercase text-white">Gymnast</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto p-4 bg-secondary">
                        <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                        <NavLink to="/about" className="nav-item nav-link">About Us</NavLink>
                        {/* <NavLink href="feature.html" className="nav-item nav-link">Our Features</NavLink>
                        <NavLink href="class.html" className="nav-item nav-link">Classes</NavLink> */}
                        <NavLink to="/feed" className="nav-item nav-link">Feed</NavLink>
                        <NavLink to="/post" className="nav-item nav-link">Post</NavLink>
                        {/* <NavLink href="contact.html" className="nav-item nav-link">Contact</NavLink> */}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;