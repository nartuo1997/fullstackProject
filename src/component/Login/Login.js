import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from "../../store/userSlice"
import './Login.css'



const Login = ({ Login, Error }) => {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        password: ""
    })

    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();

        dispatch(
            login({
                email: details.email,
                password: details.password,
                loggedIn: true
            })
        )

    }
    return (
        <div className="login">
            <form onSubmit={submitHandler} className="login__form">
                <h1>Login</h1>
                <label htmlFor="name">Email</label>
                <input placeholder="Input your email"
                    type="email" name="email"
                    id="email"
                    onChange={e => setDetails({ ...details, email: e.target.value })}
                    value={details.email}
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

                <button type="submit" className="submit_btn" style={{ cursor: 'pointer' }} >Submit</button>

            </form>
        </div >
    )
}

export default Login
