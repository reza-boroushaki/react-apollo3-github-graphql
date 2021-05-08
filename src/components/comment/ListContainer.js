import React from 'react';

export default function ListContainer(props){
    return(
        <>
            <div className="main_container">
                <div className="main_container_header lists comment_author">
                    <img className="authorAvatar" src={props.issue.author.avatarUrl} alt=""/><h2>{props.author}</h2>
                </div>
                {props.children}
            </div> 
        </>
    )
}