import React from 'react';
import './comments.scss';
import './issues.scss';
import { __issue_comments } from '../api/Queries';
import { useQuery } from '@apollo/client';
import { __repo_name, __repo_owner } from '../api/Settings';
import Header from '../components/comment/Header';
import ListContainer from '../components/comment/ListContainer';
import List from '../components/comment/List';
import Reactions from '../components/comment/Reactions';
import Form from '../components/comment/Form';
import Loading from '../components/loading';

export default function Comments(props){

    const { loading, data, fetchMore } = useQuery(__issue_comments, {
        variables : {
            repoOwner: __repo_owner,
            repoName: __repo_name,
            num: parseInt(props.match.params.number)            
        }
    });

    if(loading || !data){
        return <Loading />;
    }

    return(
        <main>
            <Header issue={data.repository.issue} />
            <ListContainer issue={data.repository.issue} author={data.repository.issue.author.name}>
                <List body={data.repository.issue.bodyHTML} />
            </ListContainer>
            {
                data.repository.issue.comments.edges.map((item, index) => (
                    <ListContainer issue={item.node} author={item.node.author.login} key={index}>
                        <List body={item.node.bodyHTML} />
                        {
                            item.node.reactions.edges.length
                            ?
                            <Reactions content={item.node.reactions.edges[0].node.content} />
                            :
                            ""
                        }
                    </ListContainer>
                ))
            }
            <Form id={data.repository.issue.id} fetchMore={fetchMore} />
        </main>
    );
}