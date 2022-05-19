import { render } from '@testing-library/react';
import background from '../../images/woodenPanel1.png';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export interface FeedRootProps {}
export function FeedRoot(props: FeedRootProps){

    return(
        <div id='FeedRoot'>
            <form id='feedForm' action=''>
                <input id="searchInput" placeholder="Search OpenHouse... (@username/topic/location)"/>
                <button id="searchButton" type="submit"><FontAwesomeIcon icon={faSearch}/> Search</button>
            </form>
            <NewPost/>
        </div>
    )
}

export interface NewPostProps {}
export function NewPost(props: NewPostProps){

    return(
        <div id='newPostDiv'>
            <form>
                <button type='submit'>Create Post</button>
            </form>
        </div>
    )
}