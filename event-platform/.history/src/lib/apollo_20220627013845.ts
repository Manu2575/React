import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
    uri: import.meta.env',
    cache: new InMemoryCache()
})