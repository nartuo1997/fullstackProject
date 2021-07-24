const Validation = (user) => {
    let error = {};
    error.valid = true
    if (!user.name) {
        error.name = "Name is required."
        error.valid = false
    }

    if (!user.email) {
        error.email = "Email is required."
        error.valid = false
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
        error.email = "Email is invalid"
        error.valid = false
    }

    if (!user.password) {
        error.password = "Password is required."
        error.valid = false
    }

    return error


}

export default Validation
