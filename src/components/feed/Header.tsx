import { faAddressCard, faSearch, faSearchMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

export interface INavBarProps {
}

export function NavBar (props: INavBarProps) {
  return (
    <div className="NavBarDiv">
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
