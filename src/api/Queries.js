import { gql } from "@apollo/client";

export const __search_repo_issue = gql`
  query SearchIssues($query: String!, $after: String) {
    search(first: 10, query: $query, type: ISSUE, after: $after) {
      edges {
        node {
          ... on Issue {
            id
            number
            state
            title
            createdAt
            author {
              ... on User {
                name
              }
            }
            labels(first: 1) {
              edges {
                node {
                  name
                }
              }
            }
            comments(orderBy: { field: UPDATED_AT, direction: ASC }) {
              totalCount
            }
            repository {
              nameWithOwner
              openIssues: issues(states: OPEN) {
                totalCount
              }
              closedIssues: issues(states: CLOSED) {
                totalCount
              }
            }
          }
        }
      }
      issueCount
      pageInfo {
        endCursor
      }
    }
  }
`;

export const __issue_comments = gql`
  query Comments($num: Int!, $repoName: String!, $repoOwner: String!){	
    repository(name: $repoName, owner: $repoOwner) {
       issue(number: $num) {
        id
        title
        author {
            ... on User {
                avatarUrl
                name
            }
        }
        state
        bodyHTML
        comments(first: 50) {
           edges {
             node {
               id
               bodyHTML
               createdAt
               author {
                ... on User {
                    avatarUrl
                    login
                }
               }
               reactions(last: 1){
                edges{
                  node{
                    content
                  }
                }
              }
             }
           }
         }
       }
     }
   }
`;

export const __issue_add_comment = gql`
  mutation AddComment($nodeID: ID!, $body: String!) {
    addComment(input: { subjectId: $nodeID, body: $body }) {
      commentEdge {
        node {
          body
        }
      }
    }
  }
`;