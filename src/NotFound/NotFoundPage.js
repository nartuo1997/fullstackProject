import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'

class NotFoundPage extends React.Component {
    PageNotFound = "https://mk0abtastybwtpirqi5t.kinstacdn.com/wp-content/uploads/404-featured.jpg"
    render() {
        return (
            <div className="ui container">
                <div className="ui center aligned basic segment">
                    <img src="https://mk0abtastybwtpirqi5t.kinstacdn.com/wp-content/uploads/404-featured.jpg" alt="" />
                    <p style={{ textAlign: "center" }}>
                        <Link to="/">Go to Home </Link>
                    </p>
                </div>
            </div>
        )
    }
}
export default NotFoundPage;