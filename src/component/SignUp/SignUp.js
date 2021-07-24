import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login, signup } from "../../store/userSlice"


//import CSS
import '../Login/Login.css'

//import file
import Validation from '../SignUp/Validation'


const SignUp = ({ submitForm }) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [error, setError] = useState({})
    const [dataIsCorrect, setdataIsCorrect] = useState(false)
    const dispatch = useDispatch();

    const onInputChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        // validation
        setError(Validation(user))
        // setdataIsCorrect(true)

        dispatch(
            login({
                name: user.name,
                email: user.email,
                password: user.password,
                loggedIn: false
            })
        )
    }

    // useEffect(() => {
    //     if (Object.keys(error).length === 0 && dataIsCorrect) {
    //         submitForm(true)
    //     }
    // })

    return (
        <div className="login">
            <form onSubmit={submitHandler} className="login__form">
                <h1>SignUp</h1>
                <label htmlFor="name">Name</label>
                <input placeholder="Input your name"
                    type="text" name="name"

                    onChange={onInputChange}
                    value={user.name}

                    autoComplete="off" />
                {error.name && <p style={{ color: 'red' }}>{error.name}</p>}

                <label htmlFor="email">Email</label>
                <input placeholder="Input your email"
                    type="text" name="email"

                    onChange={onInputChange}
                    value={user.email}

                    autoComplete="off" />
                {error.email && <p style={{ color: 'red' }}>{error.email}</p>}

                <label htmlFor="password">Password</label>
                <input
                    placeholder="Input your password"
                    type="password" name="password"
                    onChange={onInputChange}
                    value={user.password}
                    minLength="5"
                    autoComplete="off"
                />
                {error.password && <p style={{ color: 'red' }}>{error.password}</p>}

                <button type="submit" className="submit_btn" style={{ cursor: 'pointer' }} >Submit</button>

            </form>
        </div >

    )
}

export default SignUp
