import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { __issue_add_comment } from '../../api/Queries';
import './form.scss';

export default function Form({ fetchMore, id }){

    const [disabled, setDisabled] = useState(true);
    const [comment, setComment] = useState('');

    const [addComment] = useMutation(__issue_add_comment, { refetchQueries: fetchMore, awaitRefetchQueries: true });

    const handleTextarea = e => {
        const { value } = e.target;
        value.length ? setDisabled(false) : setDisabled(true);
        setComment(value);
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        if(!disabled){
            addComment({
                variables: { nodeID: id, body: comment },
            });
            setComment('');
            setDisabled(true);
        }
    }

    return(
        <div className="main_container write_comment">
            <div className="main_container_header lists">
                <span>Write</span>                    
            </div>
            <div className="lists">
                <form onSubmit={handleFormSubmit}>
                    <textarea onChange={handleTextarea} value={comment} placeholder="Leave a comment"/>
                    <div>
                        <button disabled={disabled ? 'disabled' : ''} className={disabled ? 'disabled' : ''} type="submit">Comment</button>
                    </div>
                </form>
            </div>
        </div>
    )
}