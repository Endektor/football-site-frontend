import React, { Component } from 'react';
import MembershipsService from '../../Services/MembershipsService';

const membershipsService = new MembershipsService();

class Membership extends Component {

    constructor(props) {
        super(props);
        this.state = {
            membership: [],
        };
    }

    componentDidMount() {
        const self = this;
        membershipsService.getMembership(this.props.id).then(function (result) {
            self.setState({ membership: result.data})
        });
    }

    render() {

        return (
            <div>
                {console.log(this.state)}
                {console.log(this.props.id)}
            </div>

        );
    }
}
export default Membership;