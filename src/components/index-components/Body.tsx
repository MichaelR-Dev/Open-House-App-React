import * as React from 'react';
import { Column1, Column2, Column3 } from './Column';

export interface IBodyProps {}
export function Body (props: IBodyProps) {
  return (
    <div id='bodyDiv'>
        <Column1/>
        <Column2/>
        <Column3/>
    </div>
  );
}
