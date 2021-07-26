import { ConsoleWriter } from 'istanbul-lib-report'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { login, signup } from "../../store/userSlice"


//import CSS
import '../Login/Login.css'

//import file
import Validation from '../SignUp/Validation'
import axios from '../../api/axios'




// import { signup } from 'apiIndex";
// // apiIndex
// export const signup = () => {
//     return axios.get();
// }

// // Promise
// signup().then

// ().catch(console.error);
// [s]
// Promise.all([ signup, login, logout]) //=> [resSignup, resLogin, resLogout];

// // async/await
// const res1 = await apicall1();

// const res2 = await apicall2(res1);


// const onInputChange = (event) => {
//     setUser({
//         ...user,
//         [event.target.name]: event.target.value
//     })
// }

const SignUp = (props) => {

    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: ""
    })

    const [error, setError] = useState({})
    const [dataIsCorrect, setdataIsCorrect] = useState(false)




    const signUp = async (event) => {
        event.preventDefault();
        // validation
        const error = Validation(user);
        if (error && !error.valid) {
            return setError(error);
        }
        setError(false);


        // api call
        try {
            const response = await axios.post('/user/register', user);
            props.history.push('/');
            console.log(response);

        } catch (err) {
            console.error(err);
            alert('Failed');
        }

        //
    }



    return (
        <div className="login">
            <form onSubmit={signUp} className="login__form">
                <h1>SignUp</h1>
                <label htmlFor="name">Name</label>
                <input placeholder="Input your name"
                    type="text" name="name"

                    onChange={(e) => setUser({ ...user, userName: e.target.value })}
                    value={user.userName}

                    autoComplete="off" />
                {error.userName && <p style={{ color: 'red' }}>{error.userName}</p>}

                <label htmlFor="email">Email</label>
                <input placeholder="Input your email"
                    type="text" name="email"

                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    value={user.email}

                    autoComplete="off" />
                {error.email && <p style={{ color: 'red' }}>{error.email}</p>}

                <label htmlFor="password">Password</label>
                <input
                    placeholder="Input your password"
                    type="password" name="password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
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
