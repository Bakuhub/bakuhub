import * as React from "react";
import {ApolloQueryResult} from "@apollo/client";
import ErrorPage from "../Error";

export interface WrapperProps<T> extends ApolloQueryResult<T> {
    children: Element;
}

export function Wrapper<T>({error, children}: WrapperProps<T>): JSX.Element {
    if (error) {
        return <ErrorPage>
            <div>{error?.message}</div>
        </ErrorPage>;
    }

    return <>{children}</>;
}