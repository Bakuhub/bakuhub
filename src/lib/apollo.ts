import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {getUrl} from "../utils/getUrl";
import {relayStylePagination} from "@apollo/client/utilities";
import {IncomingMessage} from "http";
import {NextApiRequestCookies} from "next/dist/server/api-utils";

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
export const getSsrApollo = (req: IncomingMessage & { cookies: NextApiRequestCookies }) =>
        new ApolloClient({
                             ssrMode: true,
                             cache: new InMemoryCache(),
                             link: createHttpLink({
                                                      uri: `${getUrl(process.env.NODE_ENV ===
                                                                     "development"
                                                                     ? "http://localhost:4000":
                                                                     `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_VERCEL_GRAPHQL_URL}`)}`,
                                                      credentials: "same-origin",
                                                      headers: {
                                                          cookie: req.headers.cookie,
                                                      },
                                                  }),
                         });
export default apolloClient;