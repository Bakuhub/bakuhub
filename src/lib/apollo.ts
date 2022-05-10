import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {getUrl} from "../utils/getUrl";
import {relayStylePagination} from "@apollo/client/utilities";
import {IncomingMessage} from "http";
import {NextApiRequestCookies} from "next/dist/server/api-utils";

const devGraphqlUrl = "http://localhost:3000/api/graphql";
// const devGraphqlUrl = "http://localhost:4000";

export const apolloClient = new ApolloClient({
                                                 uri: `${getUrl(process.env.NODE_ENV ===
                                                                "development"
                                                                ? devGraphqlUrl
                                                                :`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_VERCEL_GRAPHQL_URL}`)}`,
                                                 cache: new InMemoryCache({
                                                                              typePolicies: {
                                                                                  Query: {
                                                                                      fields: {
                                                                                          links: relayStylePagination(),
                                                                                      },
                                                                                  },
                                                                              }
                                                                          }),
                                             });
export const getSsrApollo = (req: IncomingMessage & { cookies: NextApiRequestCookies }) =>
        new ApolloClient({
                             ssrMode: true,
                             cache: new InMemoryCache(),
                             link: createHttpLink({
                                                      uri: `${getUrl(process.env.NODE_ENV ===
                                                                     "development"
                                                                     ? devGraphqlUrl
                                                                     :
                                                                     `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_VERCEL_GRAPHQL_URL}`)}`,
                                                      credentials: "same-origin",
                                                      headers: {
                                                          cookie: req.headers.cookie,
                                                      },
                                                  }),
                         });
export default apolloClient;