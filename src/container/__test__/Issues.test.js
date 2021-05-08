import React from 'react';
import { MockedProvider } from "@apollo/client/testing";
import Issues from "../Issues";
import { __search_repo_issue } from "../../api/Queries";
import { cleanup, render, waitFor } from "@testing-library/react";
import { __issues_mock_data } from '../../__data__';
import { __default_search } from "../../api/Settings";

afterEach(cleanup);

test("Runs fetch query for issues", async () => {
  const issuesSuccessMock = {
    request: {
      query: __search_repo_issue,
      variables: {
        query: __default_search.query,
      },
    },
    result: {
      data: {
        name: __issues_mock_data,
      },
    },
  };
  
  const { getByTestId } = render(
      <MockedProvider mocks={[issuesSuccessMock]} addTypename={false}>
        <Issues />
      </MockedProvider>
  );

  await waitFor(() => getByTestId("load"));
});
