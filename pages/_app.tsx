import type {AppProps} from "next/app";
import {Provider} from "react-redux";
import {store} from "../src/store";
import {Layout} from "../src/components/Layout";
import {ApolloProvider} from "@apollo/client";
import apolloClient from "../src/lib/apollo";

function MyApp({Component, pageProps}: AppProps) {
    return <ApolloProvider client={apolloClient}><Provider store={store}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </Provider></ApolloProvider>;

}

export default MyApp;
