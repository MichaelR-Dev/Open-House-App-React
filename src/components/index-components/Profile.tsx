import React from 'react';

export interface IProfileCardProps {
    username : string;
    pfp : string;
}

export function ProfileCard (props: IProfileCardProps) {
    return (
        
        <a href={`/user/${props.username}`} style={{textDecoration : 'none', color : 'black'}}>
            <div id="profile">
                <img id="profilePic" alt="Profile Pic of this user" unselectable="on" style={{objectFit: 'contain'}} src={props.pfp}/>
                <h3 id="profileUsername" unselectable="on">{`${props.username}`}</h3>
            </div>
        </a>
    );
}