import React from 'react';
import './index.css'
import defaultProfilePicture from '../../assets/images/default_profile_pic.png';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProfileCard = (props) => {
    const currentDate = new Date()
    const loginDate = new Date(props.last_login)
    const differenceTime = Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
        - Date.UTC(loginDate.getFullYear(), loginDate.getMonth(), loginDate.getDate()) ) /(1000 * 60 * 60 * 24));

    const profilePicture = props.picture ? props.picture.url : defaultProfilePicture;
    const profileTitle = props.name.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");

    const titleStyle = {
        fontSize: profileTitle.length > 15 ? "medium" : 18.5
    }
    const onlineStyle = {
        showColor: {
            color: props.online_status === "DATE"
                ? "red" : (props.online_status === "ONLINE" ? "limegreen" : "coral")
        },
        isVisible: {
            visibility: props.online_status === "OFFLINE" ? "visible" : "hidden"
        },
        showIcon: {
            icon: props.online_status === "DATE" ? "fire-alt" : "dot-circle"
        }
    }

    const params = {
        picture: profilePicture,
        name: profileTitle,
        online: props.online_status,
        items: props.items,
        onlineStyle: onlineStyle
    }
        return (
            <div className="Wrapper">
                <Link to= {{ pathname: `/profiles/profile/${props.id}`, state: {params} }}>
                    <div className="profileCard">
                        <img src={profilePicture} alt="profile"/>
                        <div className="card-info-section">
                            <div className="card-info-title">
                                <h3 style={titleStyle}>{profileTitle}, {props.age}</h3>
                                <div style={onlineStyle.showColor}>
                                    <FontAwesomeIcon icon={onlineStyle.showIcon.icon}/>
                                </div>
                                <p style={onlineStyle.isVisible}>{differenceTime}d</p>
                            </div>
                            <div className="card-info-location">
                                <FontAwesomeIcon icon={"map-marker-alt"}/>
                                <p>{props.city}</p>
                                <FontAwesomeIcon icon={"location-arrow"}/>
                                <p>{props.distance}km</p>
                            </div>
                            <p>{props.headline}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
}

export default ProfileCard
