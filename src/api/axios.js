import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        "Content-type": "application/json",
        // "Authorization": 'Bearer ' + sessionStorage.getItem('token'),
    }
})

// for GET requests
axios.interceptors.request.use(
    (request) => {
        // add configurration
        return request;
    },
    (err) => {
        return Promise.reject(err);
    }
)

// For POST requests
axios.interceptors.response.use(
    (res) => {
        // Add configurations here
        if (res.status === 201) {
            console.log('Posted Successfully');
        }
        return res;
    },
    (err) => {
        return Promise.reject(err);
    }
);
// axiosInstance.interceptors.