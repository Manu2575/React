import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4un46x612di01ui1amd8295/master',
    cache: new InMemoryCache()
})