import React from 'react'

//import file
import { NavLink } from 'react-router-dom';

//import CSS library
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserPlus, faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
    return (
        <div className="ui secondary pointing large menu">
            <NavLink to="/" className="item">Home</NavLink>
            <NavLink to="/about" className="item" >About</NavLink>
            <div className="right menu">
                <NavLink to="/signup" className="ui primary button">Sign Up</NavLink>
                <NavLink to="/login" className="item" ><strong>Login</strong> </NavLink>
            </div>
        </div>
        // <div>
        //     <div className="mr-auto"></div>
        //     <div className="navbar-right">
        //         <Link to={"register"} className="nav-link">
        //             <FontAwesomeIcon icon={faUserPlus} /> Register
        //         </Link>
        //         <Link to={"login"} className="nav-link">
        //             <FontAwesomeIcon icon={faSignInAlt} /> Login
        //         </Link>
        //     </div>
        // </div>
    )
}

export default Navigation
