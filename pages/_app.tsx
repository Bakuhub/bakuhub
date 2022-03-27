import type {AppProps} from "next/app";
import {Provider} from "react-redux";
import {store} from "../src/store";
import {Layout} from "../src/components/Layout";
import {ApolloProvider} from "@apollo/client";
import apolloClient from "../src/lib/apollo";
import {SessionProvider} from "next-auth/react";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../src/theme";
import {CssBaseline} from "@mui/material";

function MyApp({
                   Component, pageProps: {session, ...pageProps},
               }: AppProps) {
    // useSession with next-auth
    return <SessionProvider session={session}>
        {/* this is MUI theme*/}
        <ThemeProvider theme={theme}>
            {/* for apollo provide for useQuery and useMutation */}
            <ApolloProvider client={apolloClient}>
                {/* for redux store */}
                <Provider store={store}>
                    {/* for Dark theme */}
                    <CssBaseline/>
                    {/*get MUI dynamic fonts*/}
                    <link
                            rel="stylesheet"
                            href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />
                    {/* for layout with drawer and header */}
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Provider>
            </ApolloProvider>
        </ThemeProvider>
    </SessionProvider>;

}

export default MyApp;
