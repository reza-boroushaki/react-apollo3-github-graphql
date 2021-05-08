import React from 'react';
import './pagination.scss';

export default function Pagination({ loadMore }){
    return(
        <>
            <button type="button" className="load_more_button" onClick={loadMore}>More comments</button>
        </>
    )
}