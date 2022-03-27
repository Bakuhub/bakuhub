import React from "react";
import {SessionContextValue} from "next-auth/react";
import {useRouter} from "next/router";

export interface DataFetcherProviderProps {
    data: SessionContextValue;
}

export const SessionProvider: React.FunctionComponent<DataFetcherProviderProps> =
        ({data, children}) => {
            const router = useRouter();
            return <></>;
        };