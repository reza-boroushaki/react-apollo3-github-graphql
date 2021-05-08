import React from 'react';

export default function Header({ issue }){

    const stateStyle = {
        backgroundColor: issue.state === "OPEN" ? "var(--main-green)" : "var(--main-red)"
    }

    return(
        <>
            <h1>{issue.title}</h1>
            <span className="comment_state" style={stateStyle}>{issue.state.toLowerCase()}</span> <b>{issue.author.name}</b>
        </>
    )
}