import React, { Component } from 'react';
import axios from 'axios';

class Meetups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meetups: []
        };
    }

    componentWillMount() {
        this.getMeetups();
    }

    getMeetups() {
        axios.get('http://localhost:3000/api/meetups')
            .then(res => {
                this.setState({ meetups: res.data }, () =>
                    console.log(this.state))
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h2>Meetups page.</h2>
            </div>
        );
    }
}

export default Meetups;