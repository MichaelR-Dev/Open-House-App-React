import React from 'react';
import { SubHeader } from './Column-subheader';
import { ProfileCard } from './Profile';
import avatar from '../../images/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBell, faCediSign, faCog, faCompass, faGift, faHeart, faMap, faMessage, faPerson, faPersonBooth, faPersonCirclePlus, faSearch, faSquarePersonConfined } from '@fortawesome/free-solid-svg-icons';

const fontAStyle={
  //background: 'linear-gradient(90deg, rgba(9,0,156,1) 0%, rgba(4,4,198,1) 45%, rgba(0,212,255,1) 100%)',
  color: 'aliceblue', 
  fontSize : '25px',
  width: '25px',
  height: '25px',
  padding: '5px',
  //backgroundColor: 'rgba(155,155,155,0.5)',
  backgroundColor: 'black',
  borderRadius: '20%'
}

export interface IColumn1Props {}
export function Column1 (props: IColumn1Props) {
  return (
    <div className="column" id="col-1">
        <ProfileCard pfp={avatar} username={'Density'}/>

        <button type="button" className="LeftPanel"><FontAwesomeIcon style={fontAStyle} icon={faAddressCard}/> Profile</button>
        <button type="button" className="LeftPanel"><FontAwesomeIcon style={fontAStyle} icon={faSearch}/> Explore</button>
        <button type="button" className="LeftPanel"><FontAwesomeIcon style={fontAStyle} icon={faBell}/> Notifications</button>
        <button type="button" className="LeftPanel"><FontAwesomeIcon style={fontAStyle} icon={faMessage}/> Messages</button>
        <button type="button" className="LeftPanel"><FontAwesomeIcon style={fontAStyle} icon={faHeart}/> Favorites</button>
        <button type="button" className="LeftPanel"><FontAwesomeIcon style={fontAStyle} icon={faCompass}/> Compass</button>
        <button type="button" id="altButton" className="LeftPanel"><FontAwesomeIcon style={fontAStyle} icon={faCog}/> Settings</button>
        <button id="logout" type="button" className="LeftPanel">Logout</button>
    </div>
  );
}

const mouseMove = (e: any) =>{
  e.target.style.backgroundPositionX = -e.offsetX + "px";
  e.target.style.backgroundPositionY = -e.offsetY + "px";
};

export interface IColumn2Props {}
export function Column2 (props: IColumn2Props) {
  return (
    <div className="column" id="col-2" onMouseOver={mouseMove}>
      <SubHeader/>
    </div>
  );
}

export interface IColumn3Props {}
export function Column3 (props: IColumn3Props) {
  return (
    <div className="column" id="col-3">
    </div>
  );
}



