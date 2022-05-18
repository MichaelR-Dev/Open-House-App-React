import React from 'react';
import avatar from '../../images/avatar.png';

export interface IProfileCardProps {
    username : string;
    pfp : string;
}

export function ProfileCard (props: IProfileCardProps) {
    //props.pfp = props.pfp === "" ? `${avatar}` : props.pfp;
    
    return (
        <div id="profile">
            <img id="profilePic" alt="Profile Pic of this user" unselectable="on" style={{objectFit: 'contain'}} src={props.pfp}/>
            <h3 id="profileUsername" unselectable="on">{`@${props.username}`}</h3>
        </div>
    );
}