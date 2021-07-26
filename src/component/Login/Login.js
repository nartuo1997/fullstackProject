import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

//impport CSS
import './Login.css'
import { authenticateUser } from '../../service/login/authAction'

// <Login a={a}/>
// <Route component={Login} /> => <Login {...routeProps} />
// <ReduxComponent component={Login} /> => <Login {...routeProps} {...reduxProps} />
const Login = (props) => {
    const { isLoggedIn, history } = props;
    const { dispatch } = props
    const [isLogging, setIsLogging] = useState(false);
    const [details, setDetails] = useState({
        userName: "",
        password: ""
    })
    console.log(details.userName)

    // Component => action => reducer => Component
    useEffect(() => {   // TODO: fix alert only rendered once
        if (isLoggedIn === false) {
            return alert('Failure');
        }

    }, [isLoggedIn]);

    const submitHandler = (event) => {
        event.preventDefault();
        // dispatch(
        //     login({
        //         email: details.email,
        //         password: details.password,
        //         loggedIn: true
        //     })
        // )


        setIsLogging(false);
        const { userName, password } = details;

        // dispatch action
        dispatch(authenticateUser(userName, password));
    }
    return (
        <div className="login">
            <form onSubmit={submitHandler} className="login__form">
                <h1>Login</h1>
                <label htmlFor="name">Username</label>
                <input placeholder="Input your Username"
                    type="text" name="name"
                    id="name"
                    onChange={e => setDetails({ ...details, userName: e.target.value })}
                    value={details.userName}
                    required
                    autoComplete="off" />


                <label htmlFor="name">Password</label>
                <input
                    placeholder="Input your password"
                    type="password" name="password"
                    id="password"
                    onChange={e => setDetails({ ...details, password: e.target.value })}
                    value={details.password}
                    required
                    autoComplete="off" />

                <button disabled={isLogging} type="submit" className="submit_btn" style={{ cursor: 'pointer' }} >Submit</button>

            </form>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

// const mapDispatch = (dispatch, ownProps) => ({
//     login: (userName, password) => authenticateUser(userName, password)(dispatch)
// })

export default connect(
    mapStateToProps
)(Login)
