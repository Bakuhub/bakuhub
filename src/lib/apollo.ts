import {ApolloClient, InMemoryCache} from "@apollo/client";
import {getUrl} from "../utils/getUrl";

const apolloClient = new ApolloClient({
    uri: `${getUrl(process.env.NEXT_PUBLIC_VERCEL_URL)}/api/graphql`,
    cache: new InMemoryCache()
});

export default apolloClient;