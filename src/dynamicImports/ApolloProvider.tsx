import {ApolloProvider as AP} from "@apollo/client";
import {FunctionComponent, PropsWithChildren} from "react";
import apolloClient from "../lib/apollo";

const ApolloProvider: FunctionComponent<PropsWithChildren<{}>> = ({children}) => {
    return (
            <AP client={apolloClient}>
                {children}
            </AP>
    );
};

export default ApolloProvider;