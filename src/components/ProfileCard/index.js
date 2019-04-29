import React from 'react';
import './index.css'
import defaultProfilePicture from '../../assets/images/default_profile_pic.png';
import { Link } from 'react-router-dom'

const ProfileCard = (props) => {
    const profilePicture = props.picture ? props.picture.url : defaultProfilePicture;
    const params = {
        picture: profilePicture,
        name: props.name,
        online: props.online_status
    }
        return (
            <div className="Wrapper">
                <Link to= {{ pathname: `/profiles/profile/${props.id}`, state: { params} }}>
                    <div className="profileCard">
                        <img src={profilePicture} alt="profile"/>
                        <h3>{props.name}</h3>
                        <p>Online: {props.online_status}</p>
                        <p>Last login: {props.last_login}</p>
                    </div>
                </Link>
            </div>
        )
}

export default ProfileCard
