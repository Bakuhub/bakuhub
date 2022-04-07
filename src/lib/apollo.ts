import {ApolloClient, InMemoryCache} from "@apollo/client";
import {getUrl} from "../utils/getUrl";
import {relayStylePagination} from "@apollo/client/utilities";
import {get} from "lodash";

const apolloClient = new ApolloClient({
    uri: `${getUrl(process.env.NODE_ENV==="development" ? "http://localhost:4000":
            (get(process, "env.NEXT_PUBLIC_VERCEL_URL") + get(process, "env.NEXT_PUBLIC_VERCEL_GRAPHQL_URL")))}`,
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