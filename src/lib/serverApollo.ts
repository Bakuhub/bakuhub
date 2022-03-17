import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {getUrl} from "../utils/getUrl";


export const serverApollo = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
        uri: `${getUrl(process.env.NEXT_PUBLIC_VERCEL_URL)}/api/graphql`,
        credentials: "same-origin",
    }),
    cache: new InMemoryCache(),
});