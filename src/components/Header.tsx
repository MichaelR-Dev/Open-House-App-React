import * as React from 'react';

export interface INavBarProps {
}

export function NavBar (props: INavBarProps) {
  return (
    <div className="NavBarDiv">
        <form action=''>
            <input className="NavLink" id="searchInput" placeholder="Search OpenHouse... (@username/topic/location)"/>
            <button className="NavLink" id="searchButton" type="button">Search</button>
        </form>
    </div>
  );
}


export interface IHeaderProps { 
}

export function Header (props: IHeaderProps) {
  return (
    <div className="NavBar">
        <NavBar/>
    </div>
  );
}
