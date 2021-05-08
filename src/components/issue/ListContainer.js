import React from 'react';

export default function ListContainer(props){
    return(
        <div data-testid="issueContainer" className="main_container issues_page">
            <div className="main_container_header lists">
                <div className={`open filters_tab ${props.state === "is:open" ? "active" : ""}`} onClick={() => props.filterState("is:open")}>
                    <i className="fas fa-exclamation"></i>
                    {props.issueState.openIssues.totalCount} Open
                </div>
                <div className={`closed filters_tab ${props.state === "is:closed" ? "active" : ""}`} onClick={() => props.filterState("is:closed")}>
                    <i className="fas fa-check"></i>
                    {props.issueState.closedIssues.totalCount} Closed
                </div>
            </div>
                {props.children}
        </div>
    )
}