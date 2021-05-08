import React, { useState } from 'react';
import List from '../components/issue/List';
import './issues.scss';
import { __search_repo_issue } from '../api/Queries';
import { useQuery } from '@apollo/client';
import { __default_search } from '../api/Settings';
import ListContainer from '../components/issue/ListContainer';
import Pagination from '../components/issue/Pagination';
import ClearFilter from '../components/issue/ClearFilter';
import Loading from '../components/loading';



export default function Issues(){

    const [state, setState] = useState(__default_search);

    const { loading, data, fetchMore } = useQuery(__search_repo_issue, {
        variables : { query: state.query, after: null }
    });        

    if(loading || !data){
        return <Loading />;
    }

    const filterState = stateName => {
        setState(prevState => ({...prevState, issueState: stateName, query: __default_search.query + ' ' + stateName}));
        fetchMore({
            variables: { query: __default_search.query + ' ' + stateName },
        });
    }

    const loadMore = e => {
        e.preventDefault();

        fetchMore({
            variables: { after: data.search.pageInfo.endCursor },
        });
    }

    return(
        <main>
            <ClearFilter filterState={filterState} state={state.issueState} />
            <ListContainer 
                filterState={filterState} 
                issueState={data.search.edges[0].node.repository}
                state={state.issueState}
            >
                    {
                        data.search.edges.map((item, index) => (
                            <List key={index} items={item.node} />                            
                        ))
                    }
            </ListContainer>

            <Pagination loadMore={loadMore} />           
        </main>
    )
}