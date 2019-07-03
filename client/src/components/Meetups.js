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
                this.setState({ meetups: res.data }, () => {

                })
            })
            .catch(err => console.log(err));
    }

    render() {

        const meetupItems = this.state.meetups.map((meetup, i) => {
            return (
                <li key={i} className="link">{meetup.name}</li>
            )
        })

        return (
            <div>
                <h2>Meetups page.</h2>
                <ul className="link">
                    {meetupItems}
                </ul>
            </div>
        );
    }
}

export default Meetups;