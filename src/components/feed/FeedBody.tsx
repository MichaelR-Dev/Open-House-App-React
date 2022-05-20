import * as React from 'react';
import { SideNav, Column2, Column3 } from './Column';

export interface IFeedBodyProps {}
export function FeedBody (props: IFeedBodyProps) {
  return (
    <div id='bodyDiv'>
        <Column2/>
        <Column3/>
    </div>
  );
}
