import React, { useState } from 'react'
import SignUp from './SignUp';

const SignUpSuccess = () => {
    const [formIsSubmitted, setformIsSubmitted] = useState(false);
    const submitForm = () => {
        setformIsSubmitted(true)
    }

    return (
        <div>
            {!formIsSubmitted ? (<SignUp submitForm={submitForm} />) : (alert("Account created!"))}
        </div>
    )
}

export default SignUpSuccess
