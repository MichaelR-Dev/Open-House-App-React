import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { type } from '@testing-library/user-event/dist/type';

const Posts = [
    {
        content: 'Test Post!!!'
    },
    {
        content: 'Test Post!!!'
    },
    {
        content: 'Test Post!!!'
    },
    {
        content: 'Test Post!!!'
    },
    {
        content: 'Test Post!!!'
    },
    {
        content: 'Test Post!!!'
    },
    {
        content: 'Test Post!!!'
    },
    {
        content: 'Test Post!!!'
    },
]


export interface FeedRootProps {}
export function FeedRoot(props: FeedRootProps){

    return(
        <div id='feedDiv'>
            <form id='feedForm' action={''}>
                <input id="searchInput" placeholder="Search OpenHouse... (@username/topic/location)"/>
                <button id="searchButton" type="submit"><FontAwesomeIcon icon={faSearch}/> Search</button>
            </form>
            <div id='FeedRoot'>

                    <NewPost/>
                    
                <div id='FeedPosts'>
                    {Posts.map((post) => (<Post content={post.content}></Post>))}
                </div>
            </div>
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

export type PostProps = {
    content: any
}
export const Post = (props: PostProps) => {

    return(
        <div className='PostDiv'>
            <article>
                <span>{props.content}</span>
            </article>
        </div>
    )
}