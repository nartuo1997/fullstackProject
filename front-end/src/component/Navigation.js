import React from 'react'

//import file
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { logoutUser } from '../service/loginAPI/authAction';
import Resource from './Resource/Resource';
import { useState, useEffect } from 'react';


//import CSS library
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserPlus, faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";


const Navigation = (props) => {
    const { dispatch } = props;


    const logout = () => {
        dispatch(logoutUser());
        sessionStorage.removeItem('token')

    }

    return (
        <div>
            <div className="ui secondary pointing large menu">
                {
                    props.isLoggedIn ?

                        <React.Fragment>
                            <NavLink to="/" className="item">Home</NavLink>
                            <NavLink to="/about" className=" item" >About</NavLink>

                            <NavLink to="/resource" className=" item" >Resource</NavLink>

                            <div className="item right menu">
                                <Dropdown text="Project" >

                                    <Dropdown.Menu>
                                        <NavLink to="/project">
                                            <Dropdown.Item text="Project1" />
                                        </NavLink>
                                        <NavLink to="/project" >
                                            <Dropdown.Divider />
                                            <Dropdown.Item text="Project2" />
                                        </NavLink>
                                    </Dropdown.Menu>

                                </Dropdown>

                                <i className="user large circle icon"></i>
                                <Dropdown text={props.userName}>
                                    {/* <img alt="avatar" class="ui circular image"></img> */}

                                    <Dropdown.Menu>

                                        <Dropdown.Item text="Profile" />
                                        <Dropdown.Divider />
                                        <Dropdown.Item text="Logout" onClick={logout} />

                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </React.Fragment>
                        :
                        <div className="right menu">
                            <NavLink to="/signup" className="ui primary button">Sign Up</NavLink>
                            <NavLink to="/login" className="item" ><strong>Login</strong> </NavLink>
                        </div>
                }
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

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        isLoggedIn: state.auth.isLoggedIn,
        userName: state.auth.userName
    }
}

// const mapDispatch = (dispatch) => ({
//     logoutUser: () => logoutUser()(dispatch)
// })




export default connect(
    mapStateToProps
)(Navigation)
