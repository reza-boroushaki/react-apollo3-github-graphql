import React from 'react';

export default function List({ body }){

    return(
        <div className="lists">
            <div dangerouslySetInnerHTML={{__html: body}}></div>
        </div>
    )
}