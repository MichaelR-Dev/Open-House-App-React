import { render } from '@testing-library/react';
import background from '../../images/woodenPanel1.png';
import React from 'react';

const newPostStyle = {
    background: 'aliceblue',
    fontSize: '0.7vw',
    height: '3%',
    width: '10%',
    marginTop: '1%',
    marginLeft: '63%',
    marginRight: 'auto'
}

export interface SubHeaderProps {}
export function SubHeader(props: SubHeaderProps){

    return(
        <button style={newPostStyle}>Create Post</button>
    )
}