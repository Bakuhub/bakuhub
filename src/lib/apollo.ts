import {ApolloClient, InMemoryCache} from "@apollo/client";
import {getUrl} from "../utils/getUrl";
import {relayStylePagination} from "@apollo/client/utilities";

const getApolloClient = (ssrMode: boolean = false) => new ApolloClient({
                                                                           uri: `${getUrl(process.env.NODE_ENV ===
                                                                                          "development"
                                                                                          ? "http://localhost:4000":
                                                                                          `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_VERCEL_GRAPHQL_URL}`)}`,
                                                                           cache: new InMemoryCache({
                                                                                                        typePolicies: {
                                                                                                            Query: {
                                                                                                                fields: {
                                                                                                                    links: relayStylePagination(),
                                                                                                                },
                                                                                                            },
                                                                                                        }
                                                                                                    }),
                                                                           ssrMode,
                                                                       });
export const apolloClient = getApolloClient();
export const ssrApolloClient = getApolloClient(true);
export default apolloClient;