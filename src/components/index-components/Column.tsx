import React from 'react';
import { SubHeader } from './Column-subheader';
import { ProfileCard } from './Profile';

export interface IColumn1Props {}
export function Column1 (props: IColumn1Props) {
  return (
    <div className="column" id="col-1">
        <ProfileCard pfp={'./images/woodenPanel1.png'} username={'test'}/>

        <button type="button" className="LeftPanel">Profile</button>
        <button type="button" className="LeftPanel">Explore</button>
        <button type="button" className="LeftPanel">Notifications</button>
        <button type="button" className="LeftPanel">Messages</button>
        <button type="button" className="LeftPanel">Favorites</button>
        <button type="button" className="LeftPanel">Compass</button>
        <button type="button" id="altButton" className="LeftPanel">Settings</button>
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



