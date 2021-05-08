import React from 'react';
import { Link } from 'react-router-dom';
import { daysCalc } from '../../helpers/Utils';
import './list.scss';

export default function List({ items }){
    return(        
        <div className="lists">            
            <div className="lists_state_icon">
                {
                    items.state === "OPEN"
                    ?
                    <i className="fas fa-exclamation open"></i>
                    :
                    <i className="fas fa-exclamation closed"></i>
                }
            </div>
            <div className="lists_title_container">
                <Link to={`/${items.number}`}>{items.title}</Link>
                <p>#{items.number} {items.state.toLowerCase()} {daysCalc(items.createdAt)} {items.author.name !== null && 'by ' + items.author.name}</p>
            </div>
            {
                items.comments.totalCount > 0 &&
                <div className="lists_comments">
                    <i className="far fa-comment-alt"></i>
                    <b>{items.comments.totalCount}</b>
                </div>
            }
        </div>
    )
}