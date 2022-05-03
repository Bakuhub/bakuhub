import type {AppProps} from "next/app";
import dynamic from "next/dynamic";

const ThemeProvider = dynamic(() => import("../src/dynamicImports/ThemeProvider"));
const SessionProvider = dynamic(() => import("../src/dynamicImports/SessionProvider"));
const ApolloProvider = dynamic(() => import("../src/dynamicImports/ApolloProvider"));
const SnackbarProvider = dynamic(() => import("../src/dynamicImports/SnackbarProvider"));
const CssBaseline = dynamic(() => import("@mui/material/CssBaseline"));
const Layout = dynamic(() => import("../src/components/Layout"));

function MyApp({
                   Component, pageProps: {session, ...pageProps},
               }: AppProps) {
    // useSession with next-auth
    return <SessionProvider session={session}>
        {/* this is MUI theme*/}
        <ThemeProvider>
            {/* for apollo provide for useQuery and useMutation */}
            <ApolloProvider>
                {/* for redux store */}
                {/*<Provider store={store}>*/}
                <SnackbarProvider>
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
