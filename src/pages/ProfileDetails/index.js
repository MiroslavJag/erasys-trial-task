import React, { Component } from 'react';
import axios, {GET_PROFILE} from '../../axiosConfig';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import consts from './consts'

class ProfileDetails extends Component {
    state = {
        item: null,
        loading: true
    }

    convertResponseString = (str) => {
        return str.toLowerCase()
            .charAt(0).toUpperCase() + str.substring(1)
            .toLowerCase()
            .replace(/_/g , " ")
    }

    componentDidMount () {
        const url = `${GET_PROFILE + this.props.match.params.id}`;
        axios.get(url)
            .then( response => {
                this.setState( { loading: false, item: response.data[0] })
            })
            .catch( error => {
                this.setState({loading: false});
                console.log(error)
            } );
    }
    render () {
        let profilePreview = null;
        const {name, picture, onlineStyle} = this.props.location.state.params
        const details = {...this.state.item }
        console.log(details)

        if (this.state.loading) {
            profilePreview = <h2>Content is Loading...</h2>
        } else {
            profilePreview = <div className="WrapperProfileDetails">
                    <div className="image-section">
                    <img src={picture} />
                    <FontAwesomeIcon icon={onlineStyle.showIcon.icon} color={onlineStyle.showColor.color}/>
                </div>
                <div className="profile-info-section">
                    <h1>{name}, {details.personal.age}</h1>
                    <div className="profile-location-info">
                        <FontAwesomeIcon icon={"map-marker-alt"}/>
                        <p>{details.location.city}, {details.location.country}</p>
                        <FontAwesomeIcon icon={"location-arrow"}/>
                        <p>{details.location.distance}km</p>
                    </div>
                    <div className="profile-headline">
                        <p>{details.headline}</p>
                    </div>
                    <div className="profile-info-section-details">
                        <div className="profile-info-details">
                            <h3>{consts.CONSTS.PERSONAL.TITLE}</h3>
                            <div className="profile-info-details-card">
                                <p>{consts.CONSTS.PERSONAL.ETHNICITY}  <span>{this.convertResponseString(details.personal.ethnicity)}</span></p>
                                <p>{consts.CONSTS.PERSONAL.RELATIONSHIP}  <span>{this.convertResponseString(details.personal.relationship)}</span></p>
                                <p>{consts.CONSTS.PERSONAL.SMOKER}  <span>{this.convertResponseString(details.personal.smoker)}</span></p>
                            </div>
                        </div>
                        <div className="profile-info-details middle-info">
                            <h3>{consts.CONSTS.LOOK.TITLE}</h3>
                            <div className="profile-info-details-card">
                                <p>{consts.CONSTS.LOOK.BODY_TYPE}  <span>{this.convertResponseString(details.personal.body_type)}</span></p>
                                <p>{consts.CONSTS.LOOK.HEIGHT}  <span>{details.personal.height.cm}</span></p>
                                <p>{consts.CONSTS.LOOK.WEIGHT}  <span>{details.personal.weight.kg}</span></p>
                                <p>{consts.CONSTS.LOOK.BODY_HAIR}  <span>{this.convertResponseString(details.personal.body_hair)}</span></p>
                                <p>{consts.CONSTS.LOOK.EYE_COLOR}  <span>{this.convertResponseString(details.personal.eye_color)}</span></p>
                            </div>
                        </div>
                        <div className="profile-info-details">
                            <h3>{consts.CONSTS.SEXUAL.TITLE}</h3>
                            <div className="profile-info-details-card">
                                <p>{consts.CONSTS.SEXUAL.ANAL_POSITION}  <span>{this.convertResponseString(details.sexual.anal_position)}</span></p>
                                <p>{consts.CONSTS.SEXUAL.SAFER_SEX}  <span>{this.convertResponseString(details.sexual.safer_sex)}</span></p>
                                <p>{consts.CONSTS.SEXUAL.SM}  <span>{this.convertResponseString(details.sexual.sm)}</span></p>
                            </div>
                        </div>
                    </div>
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
