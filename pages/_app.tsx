import type {AppProps} from "next/app";
import {ApolloProvider} from "@apollo/client";
import apolloClient from "../src/lib/apollo";
import {SessionProvider} from "next-auth/react";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../src/theme";
import dynamic from "next/dynamic";
import {SnackbarProvider} from "notistack";
import {Collapse} from "@mui/material";

const CssBaseline = dynamic(() => import("@mui/material/CssBaseline"));
const Layout = dynamic(() => import("../src/components/Layout"));

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
                {/*<Provider store={store}>*/}
                <SnackbarProvider
                        maxSnack={3}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        TransitionComponent={Collapse}
                        iconVariant={{
                            success: "✅ ",
                            error: "✖️",
                            warning: "⚠️",
                            info: "ℹ️",
                        }}
                >
                    {/* for Dark theme */}
                    <CssBaseline/>
                    {/*get MUI dynamic fonts*/}
                    <link
                            rel="stylesheet"
                            href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />
                    <title>
                        bakuhub
                    </title>
                    {/* for layout with drawer and header */}
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </SnackbarProvider>
                {/*</Provider>*/}
            </ApolloProvider>
        </ThemeProvider>
    </SessionProvider>;

}

export default MyApp;
