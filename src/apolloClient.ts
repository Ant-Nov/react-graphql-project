import { ApolloClient, ApolloLink, CombinedGraphQLErrors, HttpLink, InMemoryCache } from "@apollo/client";
import { ErrorLink } from '@apollo/client/link/error';

const errorLink = new ErrorLink(({ error }) => {
  if (CombinedGraphQLErrors.is(error)) {
    error.errors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  } else {
    console.error("[Network error]:", error);
  }
});

const httpLink = new HttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    "Authorization": `Bearer ${import.meta.env.GITHUB_TOKEN}`
  }
})

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([ errorLink, httpLink ]),
  cache: new InMemoryCache(),
});