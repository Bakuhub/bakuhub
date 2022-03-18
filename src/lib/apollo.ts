import {ApolloClient, InMemoryCache} from "@apollo/client";
import {getUrl} from "../utils/getUrl";
import {relayStylePagination} from "@apollo/client/utilities";

const apolloClient = new ApolloClient({
    uri: `${getUrl(process.env.NEXT_PUBLIC_VERCEL_GRAPHQL_URL)}`,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    links: relayStylePagination(),
                },
            },
        }
    })
});

export default apolloClient;