import React, { Component } from 'react';
import axios, {GET_PROFILE} from '../../axiosConfig';
import './index.css';

class ProfileDetails extends Component {
    state = {
        item: null,
        loading: true
    }

    componentDidMount () {
        const url = `${GET_PROFILE + this.props.match.params.id}`;
        console.log('check url: ', url)
        axios.get(url)
            .then( response => {
                console.log('response ', response.data[0])
                this.setState( { loading: false, item: response.data[0] })
            })
            .catch( error => {
                this.setState({loading: false});
                console.log(error)
            } );
    }
    render () {
        let profilePreview = null;
        const {name, picture, online} = this.props.location.state.params
        const details = {...this.state.item }
        console.log(this.props.location.state)
        if (this.state.loading) {
            profilePreview = <h2>Content is Loading...</h2>
        } else {
            profilePreview = <div className="WrapperProfileDetails">
                <img src={picture} />
                <div className="infoSection">
                    <h1>{name}</h1>
                    <p>{details.personal.age}</p>
                    <p>{online}</p>
                    <p>{details.location.distance}m</p>
                </div>
            </div>
        }
        return (
            <>
                {profilePreview}
            </>
        )
    }
}

export default ProfileDetails
