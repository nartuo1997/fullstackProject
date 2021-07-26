import React, { Component } from 'react';

import './Resource.css'

class Resource extends Component {
    render() {
        return (
            <div className="container ui">
                <table className="ui fixed table">
                    <thead>
                        <tr>
                            <th></th>
                            <th style={{ textAlign: "center" }}>Resource Catalog</th>
                            <th></th>
                        </tr>

                    </thead>
                    <thead>
                        <tr><th style={{ textAlign: "center" }}>RESOURCE NAME</th>
                            <th></th>
                            <th style={{ textAlign: "center" }}>RESOURCE CODE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >John</td>
                            <td></td>
                            <td>John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like</td>
                        </tr>
                        <tr>
                            <td>Jamie</td>
                            <td></td>
                            <td>Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like</td>
                        </tr>
                        <tr>
                            <td>Jill</td>
                            <td></td>
                            <td>Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    };
};

export default Resource

