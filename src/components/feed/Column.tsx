import React from 'react';
import { FeedRoot } from './Feed';
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

const username : string = 'MichaelR-Dev';

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
      <h1>Recommended</h1>
      <Map/>
      <Trending/>
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

export type TrendingProps = {}

export const Trending = (props: TrendingProps) => {
  return (
    <div id='trendingDiv'>
      <TrendingList/>
    </div>
  )
}

const trendEntries = [
  {
    id: 1,
    author: 'MichaelR-Dev',
    thumbnail: avatar,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis sapien non porta imperdiet. Donec venenatis id ligula viverra pretium. Fusce venenatis lobortis rutrum. Proin velit leo vel.',
    trendHref: '/posts/null',
    price: 'Listed at $1,000'
  },
  {
    id: 2,
    author: 'MichaelR-Dev',
    thumbnail: avatar,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis sapien non porta imperdiet. Donec venenatis id ligula viverra pretium. Fusce venenatis lobortis rutrum. Proin velit leo vel.',
    trendHref: '/posts/null',
    price: 'Listed at $1,000'
  },
  {
    id: 3,
    author: 'MichaelR-Dev',
    thumbnail: avatar,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis sapien non porta imperdiet. Donec venenatis id ligula viverra pretium. Fusce venenatis lobortis rutrum. Proin velit leo vel.',
    trendHref: '/posts/null',
    price: 'Listed at $1,000'
  },
  {
    id: 4,
    author: 'MichaelR-Dev',
    thumbnail: avatar,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis sapien non porta imperdiet. Donec venenatis id ligula viverra pretium. Fusce venenatis lobortis rutrum. Proin velit leo vel.',
    trendHref: '/posts/null',
    price: 'Listed at $1,000'
  },
  {
    id: 5,
    author: 'MichaelR-Dev',
    thumbnail: avatar,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis sapien non porta imperdiet. Donec venenatis id ligula viverra pretium. Fusce venenatis lobortis rutrum. Proin velit leo vel.',
    trendHref: '/posts/null',
    price: 'Listed at $1,000'
  },
  {
    id: 6,
    author: 'MichaelR-Dev',
    thumbnail: avatar,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis sapien non porta imperdiet. Donec venenatis id ligula viverra pretium. Fusce venenatis lobortis rutrum. Proin velit leo vel.',
    trendHref: '/posts/null',
    price: 'Listed at $1,000'
  }
]

export type TrendingListProps = {
}

export const TrendingList = (props: TrendingListProps) => {
  return (
    <ul id='trendingList'>
      {trendEntries.map((entry)=> (<TrendEntry author={`@${entry.author}`} thumbnail={entry.thumbnail} content={entry.content} trendHref={entry.trendHref} price={entry.price}></TrendEntry>))}
    </ul>
  );
}

export type TrendEntryProps = {
  author: string,
  thumbnail: string,
  content: string,
  trendHref: string,
  price: string
}

export const TrendEntry = (props: TrendEntryProps) => {
  return (
    <aside className='trendEntry'>
      <a href={props.trendHref}>
        <img src={props.thumbnail}/>
        <div className='trendEntryDiv'>
          <h3>Property</h3>
          <span>{props.content}</span>
          <div><small>{props.author}</small>  <small>{props.price}</small></div>

        </div>
      </a>
    </aside>
  )
}



