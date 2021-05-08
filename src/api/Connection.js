import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    ApolloLink,
  } from "@apollo/client";
 
  import { relayStylePagination } from "@apollo/client/utilities";

  import { onError } from "@apollo/client/link/error";
  
  const httpLink = new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
  });
  
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    }
  
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });
  
  const link = ApolloLink.from([errorLink, httpLink]);
  
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          search: relayStylePagination(["reactjs_repo_issues"]),
        },
      },
    },
  });
  
  export const client = new ApolloClient({
    link,
    cache,
  });
  