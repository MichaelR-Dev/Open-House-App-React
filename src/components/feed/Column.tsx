import React from 'react';
import { FeedRoot } from './Column-subheader';
import { ProfileCard } from './Profile';
import avatar from '../../images/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCog, faCompass, faHeart, faHouse, faMessage, faSearch } from '@fortawesome/free-solid-svg-icons';

const fontAStyle={
  //background: 'linear-gradient(90deg, rgba(9,0,156,1) 0%, rgba(4,4,198,1) 45%, rgba(0,212,255,1) 100%)',
  color: 'white', 
  fontSize : '25px',
  width: '2vh',
  height: '2vh',
  padding: '5px',
  marginRight: '20px',
  //backgroundColor: 'rgba(155,155,155,0.5)',
  //backgroundColor: 'silver',
  //borderStyle: 'solid',
  //borderColor: 'black',
  borderWidth: '1px',
  borderRadius: '25%'
}

const username : string = 'Density';

export interface ISideNavProps {}
export function SideNav (props: ISideNavProps) {
  return (
    <div className="column" id="col-1">
        <ProfileCard pfp={avatar} username={username}/>

        <LeftPanelButton href={`/feed`} content={' Home'} style={fontAStyle} icon={faHouse}/>
        <LeftPanelButton href={`/explore`} content={' Explore'} style={fontAStyle} icon={faSearch}/>
        <LeftPanelButton href={`/notifications`} content={' Notifications'} style={fontAStyle} icon={faBell}/>
        <LeftPanelButton href={`/messages`} content={' Messages'} style={fontAStyle} icon={faMessage}/>
        <LeftPanelButton href={`/favorites`} content={' Favorites'} style={fontAStyle} icon={faHeart}/>
        <LeftPanelButton href={`/compass`} content={' Compass'} style={fontAStyle} icon={faCompass}/>
        <LeftPanelButton href={`/settings`} content={' Settings'} style={fontAStyle} icon={faCog}/>
        <button id="logout" type="button" className="LeftPanel">Logout</button>
    </div>
  );
}

export interface ILeftPanelButtonProps{
  href: string,
  content: any,
  style: any,
  icon: any
}
export function LeftPanelButton (props: ILeftPanelButtonProps){

  return (
    <a href={props.href}><button type="button" className="LeftPanel"><FontAwesomeIcon style={props.style} icon={props.icon}/>{props.content}</button></a>
  )
}

const mouseMove = (e: any) =>{
  e.target.style.backgroundPositionX = -e.offsetX + "px";
  e.target.style.backgroundPositionY = -e.offsetY + "px";
};

export interface IColumn2Props {}
export function Column2 (props: IColumn2Props) {
  return (
    <div className="column" id="col-2" onMouseOver={mouseMove}>
      <FeedRoot/>
    </div>
  );
}

export interface IColumn3Props {}
export function Column3 (props: IColumn3Props) {
  return (
    <div className="column" id="col-3">
      <h1>Local Recommended</h1>
      <Map/>
      <Recommended/>
    </div>
  );
}

export interface IMapProps{}
export function Map (props: IMapProps){
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe id="gmap_canvas" src={"https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=9&ie=UTF8&iwloc=&output=embed"} frameBorder={"0"} scrolling={"no"} marginHeight={0} marginWidth={0}></iframe>
      </div>
    </div>
  );
}

export type RecommendedProps = {}

export const Recommended = (props: RecommendedProps) => {
  return (
    <div id='recomDiv'>
      <RecomList id='recomList'/>
    </div>
  )
}

export type RecomListProps = {
  id: string
}

export const RecomList = (props: RecomListProps) => {
  return (
    <ul id={props.id}>

    </ul>
  );
}



