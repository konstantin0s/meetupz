import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MeetupDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: ''
        };
    }
    render() {
        return (
            <div>
                <br />
                <Link to="/" className="btn grey">Back</Link>
                <h2>Details</h2>
            </div>
        );
    }
}


export default MeetupDetails;