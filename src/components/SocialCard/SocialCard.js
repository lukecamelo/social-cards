import React, {Component} from 'react';
import User from '../User/User';
import './SocialCard.css';

class SocialCard extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='Container'>
                <h1>{this.props.text}</h1>
                <User />
            </div>
        );
    }
}

export default SocialCard;