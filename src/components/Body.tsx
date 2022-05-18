import * as React from 'react';

const h1Col2Style = {
    marginLeft: 40,
    fontFamily: 'sans-serif', 
    fontWeight: 'bold'
}

const h1Col3Style = {
    marginLeft: 10,
    fontFamily : 'sans-serif', 
    fontWeight: 'bold'
}

export interface IColumn1Props {
}

export function Column1 (props: IColumn1Props) {
  return (
    <div className="column" id="col-1">
        <div id="profile">
            <img id="profilePic" unselectable="on" src="images/woodenPanel1.png"/>
            <h3 id="profileUsername" unselectable="on">@</h3>
        </div>

        <button type="button" className="LeftPanel" id="ProfileLeftPanel">Profile</button>
        <button type="button" className="LeftPanel">Notifications</button>
        <button type="button" className="LeftPanel">Recommended</button>
        <button type="button" className="LeftPanel">Compass</button>
        <button type="button" className="LeftPanel">Settings</button>
        <button id="logout" type="button" className="LeftPanel">Logout</button>
    </div>
  );
}

export interface IColumn2Props {
}

export function Column2 (props: IColumn2Props) {
  return (
    <div className="column" id="col-2">
        <h1 style={h1Col2Style}>feed</h1>
    </div>
  );
}

export interface IColumn3Props {
}

export function Column3 (props: IColumn3Props) {
  return (
    <div className="column" id="col-3">
        <h1 style={h1Col3Style}>compass</h1>
    </div>
  );
}

export interface IBodyProps {

}

export function Body (props: IBodyProps) {
  return (
    <div id='bodyDiv'>
        <Column1/>
        <Column2/>
        <Column3/>
    </div>
  );
}
