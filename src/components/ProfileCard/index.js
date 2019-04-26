import React from 'react';
import './index.css'
import defaultProfilePicture from '../../assets/images/default_profile_pic.png';
import { Link } from 'react-router-dom'

const ProfileCard = (props) => {
        return (
            <div className="Wrapper">
                <Link to={`/profiles/${props.id}`}>
                    <div className="profileCard">
                        <img src={ props.picture ? props.picture.url : defaultProfilePicture} alt="profile"/>
                        <h3>{props.name}</h3>
                        <p>Online: {props.online_status}</p>
                        <p>Last login: {props.last_login}</p>
                    </div>
                </Link>
            </div>
        )
}

export default ProfileCard
