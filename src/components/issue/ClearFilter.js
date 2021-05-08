import React from 'react';
import './clearFilter.scss';

export default function ClearFilter(props){
    return(
        <>
            <p className={`clear_filter ${props.state !== "" && props.state !== null ? "show" : ""}`} onClick={() => props.filterState("")}><i className="fas fa-window-close"></i> <b>Clear current search query, filters, and sorts</b></p>
        </>
    )
}