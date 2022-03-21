import type {AppProps} from "next/app";
import {Provider} from "react-redux";
import {store} from "../src/store";
import {Layout} from "../src/components/Layout";
import {ApolloProvider} from "@apollo/client";
import apolloClient from "../src/lib/apollo";
import {SessionProvider} from "next-auth/react";

function MyApp({
                   Component, pageProps: {session, ...pageProps},
               }: AppProps) {
    return <SessionProvider session={session}>
        <ApolloProvider client={apolloClient}><Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider></ApolloProvider></SessionProvider>;

}

export default MyApp;
